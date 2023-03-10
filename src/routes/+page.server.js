/** @type {import('./$types').Actions} */
export const actions = {
	sendEmail: async (request) => {
		const emails = window.localStorage.getItem('emails');

		if (emails === null) {
			emails = [];
		} else {
			emails = JSON.parse(emails);
		}

		const data = await request.formData();

		//TODO da rivedere come allegare file
		//var attachments = [];

		let email = {
			//prendere utente sender con id casuale
			sender: getSender(Math.floor(Math.random() * 10) + 1).email,
			recipient: data.get('recipient'),
			subject: data.get('subject'),
			body: data.get('email-body'),
			special: false,
			deleted: false
			//TODO add attachments
			//attachments:
		};

		emails.push(email);

		window.localStorage.setItem('emails', JSON.stringify(emails));
	}
};

async function getEmail() {
	const data = await fetch('https://jsonplaceholder.typicode.com/posts');
	return await data.json();
}

/** @type {import('./$types').PageServerLoad} */
export async function load(params) {
	//console.log('params', params);
	const mails = await getEmail();
	const infos = await Promise.all(
		mails.map(async (mail) => {
			const { name, email } = await getSender(mail.userId);
			return {
				user: { name, email, id: mail.userId },
				title: mail.title,
				body: mail.body,
				idm: mail.id
			};
		})
	);
	return {
		infos
	};
}

console.log(load());

async function getSender(id) {
	const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	return await data.json();
}
