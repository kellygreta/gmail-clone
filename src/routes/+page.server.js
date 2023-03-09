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

		var email = {
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

		//TODO controllo validità email

		emails.push(email);

		window.localStorage.setItem('emails', JSON.stringify(emails));
	}
};

//TODO corregere
function getSender(id) {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Qualcosa è andato storto');
			}
		})
		.then((json) => {
			return json.find((p) => p.id == id);
		})
		.catch((error) => console.log(error));
}
