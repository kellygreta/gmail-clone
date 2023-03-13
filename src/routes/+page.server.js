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
				idm: mail.id,
				special: false,
				deleted: false
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
