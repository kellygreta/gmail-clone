<script>
	export let isOpen = true;

	/*function searchMail() {
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
	};*/
</script>

<nav
	class="flex w-full flex-col bg-slate-100 py-2 px-6 text-center  shadow sm:flex-row sm:items-baseline sm:justify-between sm:text-left"
>
	<div class="mb-2">
		<div
			class="flex items-center space-x-4"
			on:click={() => {
				isOpen = !isOpen;
			}}
		>
			<div class="space-y-1">
				<div class="h-0.5 w-6 bg-gray-600" />
				<div class="h-0.5 w-6 bg-gray-600" />
				<div class="h-0.5 w-6 bg-gray-600" />
			</div>
			<img class="h-10  object-contain" src="/images/Gmail-logo.png" alt="Gmail-logo" />
			<a href="">Gmail</a>
		</div>
	</div>
	<div>
		<div
			class="relative mb-3 flex w-full flex-wrap items-stretch space-x-1 rounded-md bg-slate-200"
		>
			<input
				class=" w-full rounded border-0 bg-slate-200 px-3 py-4 pl-80 text-left text-black placeholder-slate-500 shadow  focus:bg-white focus:outline-none "
				name="cerca"
				id="cerca"
				type="text"
				placeholder="Cerca nella Posta"
			/>
			<span class=" absolute h-full items-center justify-center rounded bg-transparent py-5 pl-3 ">
				<img class="h-5  " src="/images/cerca.png" alt="search-logo" />
			</span>
		</div>
	</div>
	<div class="flex items-center space-x-3 px-3">
		<a href="">
			<div class="flex items-center space-x-1 rounded-full hover:bg-slate-200" />
			<img class="h-5  object-contain" src="/images/help.png" alt="help-icon" />
		</a>
		<a href="">
			<div class="flex items-center space-x-1 rounded-full hover:bg-slate-200" />
			<img class="h-5  object-contain" src="/images/settings.png" alt="settings-icon" />
		</a>
		<a href="">
			<div class="flex items-center space-x-1 rounded-full hover:bg-slate-300" />
			<img class="h-5  object-contain" src="/images/apps.png" alt="apps-icon" />
		</a>
	</div>
</nav>

<style></style>
