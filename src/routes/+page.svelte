<script>
	//TODO prendere i sender in modo casuale da https://jsonplaceholder.typicode.com/users

	//TODO Le mail devono essere salvate, indipendentemente da refresh o stop dell’applicazione.
	//TODO Le mail possono essere ordinabili per data, dalla più recente a quella più vecchia e viceversa

	function addSuccess() {
		var success = document.getElementById('successImport');
		success.style.display = 'block';
	}

	function searchMail() {
		var tbody = document.getElementById('resultMail');
		tbody.innerHTML = '';

		var emails = window.localStorage.getItem('emails');
		var query = document.getElementById('cerca').value;

		if (query.length > 1 && emails != null) {
			emails = JSON.parse(emails);
			for (var i = 0; i < playlists.length; i++) {
				if (emails[i].body.toLowerCase().includes(query.toLowerCase())) {
					//TODO sender
					//let recipient = emails[i].recipient;
					let subject = emails[i].subject;
					let stato = emails[i].stato;

					//TODO add tasto per aprire singola email
					tbody.innerHTML += sender + '</td><td>' + subject + '</td><td>' + stato + '</td><tr>';
				}
			}
		}
	}

	var myInput = document.getElementById('searchMail');

	myInput.onfocus = function () {
		document.getElementById('resultMail').style.display = 'block';
	};

	myInput.onblur = function () {
		document.getElementById('resultMail').style.display = 'none';
	};

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

<h1>Gmail</h1>

<!--TODO Le mail potranno essere divise tra: “in arrivo”, “bozze”, “speciali” -->
<div>in arrivo, speciali, bozze, eliminati</div>

<div
	id="successImport"
	class="relative rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700"
	role="alert"
	style="display: none;"
>
	<span class="block sm:inline">Email inviata con successo!</span>
</div>

<div class="container m-3">
	<form>
		<input
			name="cerca"
			id="cerca"
			class="form-control"
			type="text"
			placeholder="cerca una playlist.."
			onkeyup="searchMail()"
		/>
	</form>
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
	<form on:submit={addEmail}>
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
