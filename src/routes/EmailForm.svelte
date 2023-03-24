<script>
	//TODO Le mail devono essere salvate, indipendentemente da refresh o stop dell’applicazione.
	export let writeMail = false;
	let recipient = [];
	let subject = '';
	let imgPreview;
	let emailBody = '';
	let count = 300;
	import { browser } from '$app/environment';
	let files = [];

	// const onFileSelected = (e) => {
	// 	let image = e.target.files[0];
	// 	let reader = new FileReader();
	// 	reader.readAsDataURL(image);
	// 	reader.onload = (e) => {
	// 		avatar = e.target.result;
	// 	};
	// };

	function dragOverHandler(ev) {
		console.log('File(s) in drop zone');

		// Prevent default behavior (Prevent file from being opened)
		ev.preventDefault();
	}

	function dropHandler(ev) {
		console.log('File(s) dropped');

		// Prevent default behavior (Prevent file from being opened)
		ev.preventDefault();

		if (ev.dataTransfer.items) {
			// Use DataTransferItemList interface to access the file(s)
			[...ev.dataTransfer.items].forEach((item, i) => {
				// If dropped items aren't files, reject them
				if (item.kind === 'file') {
					const file = item.getAsFile();
					console.log(`… file[${i}].name = ${file.name}`);
				}
			});
		} else {
			// Use DataTransfer interface to access the file(s)
			[...ev.dataTransfer.files].forEach((file, i) => {
				console.log(`… file[${i}].name = ${file.name}`);
			});
		}
	}

	function readFile(e) {
		files = [];
		//let filesArr = browser ? window.localStorage.getItem('filesArr') : null;
		const eventFiles = e.target.files;
		console.log('eventFiles', eventFiles);
		Object.values(eventFiles).forEach((file) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			//console.log('file', file);
			reader.addEventListener('load', () => {
				//console.log('file', file);
				//console.log('reader.result', reader.result);
				//imgPreview.setAttribute('src', reader.result);

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
		//$: console.log(files);
		//window.localStorage.setItem('filesArr', JSON.stringify(filesArr));
		//filesArr = filesArr;
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
			id: (count += 1)
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
					multiple
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
					on:change={(event) => {
						readFile(event);
					}}
					name="attachments"
					id="attachments"
					class="form-control"
					multiple
					type="file"
					placeholder="Attachments..."
				/>
			</div>

			<div
				class="border border-black"
				id="drop_zone"
				ondrop="dropHandler(event);"
				ondragover="dragOverHandler(event);"
			>
				<p>Drag and Drop uno o più files in questa <i>drop zone</i>.</p>
			</div>

			<div bind:this={imgPreview} class="m-3 grid-cols-1" />

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
