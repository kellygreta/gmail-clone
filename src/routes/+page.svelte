<script>
	import Sidebar from './Sidebar.svelte';
	import TopNavbar from './TopNavbar.svelte';

	//TODO dividere la pagina in compnenti
	//(navbar laterale, barra di ricerca, tabella delle email in arrivo, nuova email)

	//TODO prendere i sender in modo casuale da https://jsonplaceholder.typicode.com/users

	//TODO Le mail devono essere salvate, indipendentemente da refresh o stop dell’applicazione.
	//TODO Le mail possono essere ordinabili per data, dalla più recente a quella più vecchia e viceversa

	/*function addSuccess() {
		var success = document.getElementById('successImport');
		success.style.display = 'block';
	}

	function addEmail() {
		emails = window.localStorage.getItem('emails');

		if (emails === null) {
			emails = [];
		} else {
			emails = JSON.parse(emails);
		}

		//TODO da rivedere come allegare file
		//var attachments = [];

		var email = {
			//TODO add sender
			//sender:

			recipient: document.getElementById('recipient').value,
			subject: document.getElementById('subject').value,
			body: document.getElementById('email-body').value,

			//TODO stato da rivedere
			stato: ''

			//TODO add attachments
			//attachments:
		};

		//TODO controllo validità email

		emails.push(email);
		addSuccess();

		window.localStorage.setItem('emails', JSON.stringify(emails));
	}

	/*function getSender() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Qualcosa è andato storto');
			})
			.then((json) => {
				console.log(json);
				//TODO prendere utente sender con id Math.floor(Math.random() * 10) + 1;
				//TODO aggiungere sender al local storage (?)
			})
			.catch((error) => console.log(error));
	}*/
</script>

<TopNavbar />
<Sidebar />

<div
	id="successImport"
	class="relative rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700"
	role="alert"
	style="display: none;"
>
	<span class="block sm:inline">Email inviata con successo!</span>
</div>

<div class="container m-3">
	<table class="table-auto">
		<thead>
			<tr>
				<th>Mittente</th>
				<th>Oggetto</th>
				<th>Speciale</th>
			</tr>
		</thead>
		<tbody id="resultMail" />
	</table>
</div>

<div class="container m-3">
	<form on:submit={addEmail()}>
		<div class="m-3 grid-cols-1">
			A <input
				name="recipient"
				id="recipient"
				class="form-control"
				type="text"
				placeholder="Destinatario"
				value=""
			/>
		</div>

		<!-- TODO add CC -->

		<div class="m-3 grid-cols-1">
			<input
				name="subject"
				id="subject"
				class="form-control"
				type="text"
				placeholder="Oggetto"
				value=""
			/>
		</div>

		<div class="m-3 grid-cols-1">
			<input
				name="email-body"
				id="email-body"
				class="form-control"
				type="text"
				placeholder="Scrivi..."
				value=""
			/>
		</div>

		<!-- TODO add allegati, caricabili sia con il classico selettore di file che con un sistema di drag and drop  -->

		<div class="m-3 grid-cols-1">
			<button class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
				Invia
			</button>
		</div>
	</form>
</div>
