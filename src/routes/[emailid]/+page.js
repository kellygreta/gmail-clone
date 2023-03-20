function getSentEmailData() {
	let emails = browser ? window.localStorage.getItem('emails') : null;

	if (emails === null) {
		emails = [];
	} else {
		emails = JSON.parse(emails);
	}

	return emails;
}

function getAPIEmailData() {
	let emailsAPI = browser ? window.localStorage.getItem('emailsAPI') : null;

	if (emailsAPI === null) {
		emailsAPI = [];
	} else {
		emailsAPI = JSON.parse(emailsAPI);
	}

	return emailsAPI;
}

let emails = getSentEmailData();
let emailsAPI = getAPIEmailData();

export const load = ({ fetch, params }) => {
	const fetchEmail = async (id) => {
		const email = emailsAPI.find((email) => email.id == id);
		if (!email) {
			email = emails.find((email) => email.id == id);
		}
		return email;
	};

	return {
		product: fetchEmail(params.emailid)
	};
};
