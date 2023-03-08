<script>
	/*
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
    */
</script>

<div class="relative h-32 w-32 bg-slate-200">
	<div class="absolute bottom-0 right-0 h-16 w-16 bg-slate-300">
		<form
			on:submit={() => {
				addEmail();
			}}
		>
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
</div>

<style>
</style>
