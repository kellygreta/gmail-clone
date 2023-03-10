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

		let email = {
			//prendere utente sender con id casuale
			//sender: await getSender(Math.floor(Math.random() * 10) + 1).email,
			recipient: data.get('recipient'),
			subject: data.get('subject'),
			body: data.get('email-body'),
			attachments: data.get('attachments'),
			special: false,
			deleted: false
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

async function getSender(id) {
	const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	return await data.json();
}
