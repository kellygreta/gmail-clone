<script>
	//TODO Le mail devono essere salvate, indipendentemente da refresh o stop dell’applicazione.
	export let writeMail = false;
</script>

{#if writeMail}
	<div class="z-2 h-90 absolute right-20 bottom-0 w-80 rounded-md bg-white shadow-2xl">
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
		<form method="POST">
			<div class="m-3 grid-cols-1">
				A <input
					name="recipient"
					id="recipient"
					class="form-control"
					type="email"
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

			<div class="m-3 grid-cols-1">
				<input
					name="attachments"
					id="attachments"
					class="form-control"
					type="file"
					placeholder="Attachments..."
					value=""
				/>
			</div>

			<!-- TODO add allegati, caricabili sia con il classico selettore di file che con un sistema di drag and drop  -->

			<div class="m-3 grid-cols-1">
				<button
					class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
					formaction="?/sendEmail"
				>
					Invia
				</button>
			</div>
		</form>
	</div>
{/if}

<style>
</style>
