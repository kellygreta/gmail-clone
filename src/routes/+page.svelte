<script>
	const handleSubmit = (e) => {
		// getting the action url
		const ACTION_URL = e.target.action;

		// get the form fields data and convert it to URLSearchParams
		const formData = new FormData(e.target);
		const data = new URLSearchParams();
		for (let field of formData) {
			const [key, value] = field;
			data.append(key, value);
		}

		// check the form's method and send the fetch accordingly
		if (e.target.method.toLowerCase() == 'get') fetch(`${ACTION_URL}?${data}`);
		else {
			fetch(ACTION_URL, {
				method: 'POST',
				body: data
			});
		}
	};
</script>

<h1>Gmail</h1>

<input name="cerca-email" placeholder="Cerca nella posta" />

<div>in arrivo, speciali, bozze, eliminati</div>

<form on:submit|preventDefault={handleSubmit}>
	<input name="destinatario" placeholder="Destinatario" />
	<input name="oggetto" placeholder="Oggetto" />
	<input name="email-body" placeholder="Scrivi..." />
	<input type="submit" value="Invia" />
</form>

<!-- https://jsonplaceholder.typicode.com/users -->
