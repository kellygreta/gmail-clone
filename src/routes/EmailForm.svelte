<script>
	//TODO Le mail devono essere salvate, indipendentemente da refresh o stop dell’applicazione.
	export let writeMail = false;
	let recipient = '';
	let subject = '';
	let emailBody = '';
	let files;

	function sendEmail() {
		let emails = window.localStorage.getItem('emails');

		if (emails === null) {
			emails = [];
		} else {
			emails = JSON.parse(emails);
		}

		let email = {
			//prendere utente sender con id casuale
			//sender: await getSender(Math.floor(Math.random() * 10) + 1).email,
			recipient: recipient,
			subject: subject,
			body: emailBody,
			attachments: files,
			special: false,
			deleted: false
		};

		emails.push(email);

		window.localStorage.setItem('emails', JSON.stringify(emails));
	}
</script>

{#if writeMail}
	<div class="h-90 absolute right-20 bottom-0 z-10 w-80 rounded-md bg-white shadow-2xl">
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
		<form>
			<div class="m-3 grid-cols-1">
				A <input
					bind:value={recipient}
					name="recipient"
					id="recipient"
					class="form-control"
					type="email"
					placeholder="Destinatari"
				/>
			</div>

			<!-- TODO add CC -->

			<div class="m-3 grid-cols-1">
				<input
					bind:value={subject}
					name="subject"
					id="subject"
					class="form-control"
					type="text"
					placeholder="Oggetto"
				/>
			</div>

			<div class="m-3 h-32 grid-cols-1">
				<input
					bind:value={emailBody}
					name="email-body"
					id="email-body"
					class="form-control h-32 w-60"
					type="text"
					placeholder="Scrivi..."
				/>
			</div>
			<div class="m-3 grid-cols-1">
				<input
					bind:files
					name="attachments"
					id="attachments"
					class="form-control"
					multiple
					type="file"
					placeholder="Attachments..."
				/>
			</div>

			<!-- TODO add allegati, caricabili sia con il classico selettore di file che con un sistema di drag and drop  -->

			<div class="m-3 grid-cols-1">
				<button
					class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
					on:click={() => {
						sendEmail();
					}}
				>
					Invia
				</button>
			</div>
		</form>
	</div>
{/if}

<style>
</style>
