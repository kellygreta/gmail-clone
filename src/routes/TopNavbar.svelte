<script>
	export let isOpen = true;
	let query = '';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	import { getContext } from 'svelte';
	let emails = getContext('emails');

	//TODO usare gli store
	export function searchMail(query) {
		//let emails = browser ? window.localStorage.getItem('emails') : null;
		//console.log('search mail + query: ', query);
		if (query.length > 1 && emails != null) {
			emails = JSON.parse(emails);
			//console.log('qui');
			//console.log(	'risultati ricerca: ',				emails.filter((email) => email.body.toLowerCase().includes(query.toLowerCase()))		);
			return emails.filter((email) => email.body.toLowerCase().includes(query.toLowerCase()));
		}
	}

	//TODO non funziona!!
	//console.log(searchMail(query));

	/*myInput:onfocus = function () {
		document.getElementById('resultMail').style.display = 'block';
	};

	myInput.onblur = function () {
		document.getElementById('resultMail').style.display = 'none';
	};*/
</script>

<nav class=" flex w-full bg-slate-100 shadow sm:items-center sm:justify-between sm:text-left">
	<div class="">
		<div class="flex items-center space-x-3 pl-3">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="space-y-1"
				on:click={() => {
					isOpen = !isOpen;
				}}
			>
				<div class="h-0.5 w-6 bg-gray-600" />
				<div class="h-0.5 w-6 bg-gray-600" />
				<div class="h-0.5 w-6 bg-gray-600" />
			</div>
			<img class="h-10 object-contain" src="/images/Gmail-logo.png" alt="Gmail-logo" />
			<a href="/">Gmail</a>
		</div>
	</div>
	<div>
		<div class="relative w-full">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<svg
					aria-hidden="true"
					class="h-5 w-5 text-gray-500 dark:text-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<input
				bind:value={query}
				on:keyup={() => {
					searchMail(query);
				}}
				class="pl-p-2.5 block w-full rounded-md  bg-slate-200 pl-10 text-sm text-black placeholder-slate-500 outline-none focus:bg-white"
				name="cerca"
				id="cerca"
				type="text"
				placeholder="Cerca nella Posta"
				required
			/>
		</div>
	</div>

	<div class="flex items-center space-x-10 px-3">
		<a href="/">
			<div class="flex items-center space-x-1 rounded-full hover:bg-slate-200" />
			<img class="h-5  object-contain" src="/images/help.png" alt="help-icon" />
		</a>
		<a href="/">
			<div class="flex items-center space-x-1 rounded-full hover:bg-slate-200" />
			<img class="h-5  object-contain" src="/images/settings.png" alt="settings-icon" />
		</a>
		<a href="/">
			<div class="flex items-center space-x-1 rounded-full hover:bg-slate-300" />
			<img class="h-5  object-contain" src="/images/apps.png" alt="apps-icon" />
		</a>
	</div>
</nav>

<style></style>
