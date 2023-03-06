<script>
	//TODO prendere i sender da https://jsonplaceholder.typicode.com/users

	//TODO Le mail devono essere salvate, indipendentemente da refresh o stop dell’applicazione.
	//TODO Le mail possono essere ordinabili per data, dalla più recente a quella più vecchia e viceversa

	function addSuccess() {
		var success = document.getElementById('successImport');
		success.style.display = 'block';
		success.innerHTML = '<p> Email inviata! </p>';
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

			//TODO da rivedere
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
	}
</script>

<h1>Gmail</h1>

<!--TODO Le mail potranno essere divise tra: “in arrivo”, “bozze”, “speciali” -->
<div>in arrivo, speciali, bozze, eliminati</div>

<div id="successImport" class="alert alert-success" role="alert" style="display: none;" />

<div class="container mt-3">
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

<div class="container mt-3">
	<table class="table-bordered table">
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

<div class="container mt-3">
	<form on:submit={addEmail}>
		<div class="col mb-3">
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

		<div class="col mb-3">
			<input
				name="subject"
				id="subject"
				class="form-control"
				type="text"
				placeholder="Oggetto"
				value=""
			/>
		</div>

		<div class="col mb-3">
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

		<div class="col mb-3">
			<button class="btn btn-primary">Invia</button>
		</div>
	</form>
</div>
