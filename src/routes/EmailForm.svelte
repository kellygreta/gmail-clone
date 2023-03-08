<script>
	//TODO Le mail devono essere salvate, indipendentemente da refresh o stop dell’applicazione.

	export let writeMail = false;

	function addEmail() {
		let emails = window.localStorage.getItem('emails');

		if (emails === null) {
			emails = [];
		} else {
			emails = JSON.parse(emails);
		}

		//TODO da rivedere come allegare file
		//var attachments = [];

		var email = {
			//prendere utente sender con id casuale
			sender: getSender(Math.floor(Math.random() * 10) + 1),
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

	function getSender(id) {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Qualcosa è andato storto');
			})
			.then((json) => {
				//TODO prendere utente con ID passato come parametro
			})
			.catch((error) => console.log(error));
	}
</script>

{#if writeMail}
	<div class="absolute right-20 bottom-0 h-80 w-80 rounded-md shadow-2xl">
		<div class="h-10 flex-col rounded-md bg-slate-300 py-2 px-6 ">
			<div class="flex items-center">
				<div>
					<p>Nuovo messaggio</p>
				</div>
				<div class="flex items-center space-x-3 px-7">
					<a href="">
						<div class="flex items-center space-x-1  hover:bg-slate-200">
							<img class="h-5  object-contain" src="/images/reduce.png" alt="reduce-icon" />
						</div>
					</a>
					<a href="">
						<div class="flex items-center space-x-1  hover:bg-slate-200">
							<img class="h-5  object-contain" src="/images/full.png" alt="full-icon" />
						</div>
					</a>
					<a href="">
						<div
							class="flex items-center space-x-1  hover:bg-slate-200"
							on:click={() => {
								writeMail = false;
							}}
						>
							<img class="h-5  object-contain" src="/images/close.png" alt="close-icon" />
						</div>
					</a>
				</div>
			</div>
		</div>
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
					placeholder="Destinatari"
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

			<div class="m-3 h-32 grid-cols-1">
				<input
					name="email-body"
					id="email-body"
					class="form-control h-32 w-60"
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
{/if}

<style>
</style>
