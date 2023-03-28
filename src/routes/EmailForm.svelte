<script>
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	export let writeMail = false;
	let recipient = [];
	let subject = '';
	let imgPreview;
	let emailBody = '';
	let count = 300;
	import { browser } from '$app/environment';
	let files = [];

	// dayjs.extend(relativeTime);
	// //import dayjs from 'dayjs' // ES 2015
	// dayjs().format();

	// const now = dayjs().format('H:m:s DD MMM YYYY');

	// console.log('now', now);
	// console.log(' dayjs().fromNow()', dayjs().fromNow());

	// Prevent default behavior (Prevent file from being opened)
	function dragOverHandler(ev) {
		ev.preventDefault();
	}

	function dropHandler(ev) {
		// Prevent default behavior (Prevent file from being opened)
		ev.preventDefault();
		readFile(ev.dataTransfer.files);
	}

	function readFile(eventFiles) {
		files = [];
		//let filesArr = browser ? window.localStorage.getItem('filesArr') : null;
		// let eventFiles;
		// if (e.dataTransfer.files != undefined) {
		// 	eventFiles = e.dataTransfer.files;
		// } else {
		// 	eventFiles = e.target.files;
		// }
		Object.values(eventFiles).forEach((file) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.addEventListener('load', () => {
				imgPreview.innerHTML += `
                <div class="image_box">
                    <img  object-scale-down
					h-48
					w-96 src='${reader.result}'>
                </div>
				
            `;
				files.push(reader.result);
			});
		});
	}

	async function sendEmail() {
		let emails = window.localStorage.getItem('emails');

		if (emails === null) {
			emails = [];
		} else {
			emails = JSON.parse(emails);
		}

		let email = {
			name: 'Greta',
			sender: 'gvigano@efebia.com',
			recipient: recipient,
			subject: subject,
			body: emailBody,
			//TODO attachments not working da modificare
			attachments: files,
			special: false,
			deleted: false,
			id: (count = count + 1),
			time: dayjs().toISOString()
		};

		emails.push(email);
		window.localStorage.setItem('emails', JSON.stringify(emails));
		emails = emails;
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
					<a href="/">
						<div class="flex items-center space-x-1  hover:bg-slate-200">
							<img class="h-5  object-contain" src="/images/reduce.png" alt="reduce-icon" />
						</div>
					</a>
					<a href="/">
						<div class="flex items-center space-x-1  hover:bg-slate-200">
							<img class="h-5  object-contain" src="/images/full.png" alt="full-icon" />
						</div>
					</a>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a href="">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
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
					multiple
					type="email"
					placeholder="Destinatari"
				/>
			</div>

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

			<div
				class="m-3 grid-cols-1 border border-dotted border-black"
				on:drop={(event) => {
					dropHandler(event);
				}}
				on:dragover={(event) => {
					dragOverHandler(event);
				}}
			>
				<input
					on:change={(event) => {
						readFile(event.target.files);
					}}
					name="attachments"
					id="attachments"
					class="form-control"
					multiple
					type="file"
				/>
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label>Drag and Drop uno o più files in questa <i>drop zone</i>.</label>
			</div>

			<div bind:this={imgPreview} class="m-3 grid-cols-1" />

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
