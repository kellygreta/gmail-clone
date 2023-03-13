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

<nav class=" flex w-full bg-slate-100 shadow sm:items-center sm:justify-between sm:text-left">
	<div class="">
		<div class="flex items-center space-x-3 pl-3">
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
		<div class="mt-3 mb-3 flex w-full space-x-1 rounded-md bg-slate-200">
			<span class="py-5">
				<img class="h-5" src="/images/cerca.png" alt="search-logo" />
			</span>
			<input
				class="rounded-md bg-slate-200  pl-3 text-black placeholder-slate-500 outline-none focus:bg-white"
				name="cerca"
				id="cerca"
				type="text"
				placeholder="Cerca nella Posta"
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
