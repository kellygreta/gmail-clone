<script>
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

<div class="h- ml-64 h-16 bg-slate-100 ">
	<!--TODO Le mail potranno essere divise tra: “in arrivo”, “bozze”, “speciali” -->

	<div class="flex items-center space-x-4 px-6 pl-6 pt-3">
		<input
			class="h-35 ml-64 rounded-md bg-slate-200 focus:bg-white"
			name="cerca"
			id="cerca"
			type="text"
			placeholder="Cerca nella Posta"
		/>
		<img class="h-5  object-contain" src="/images/cerca.png" alt="search-logo" />
	</div>

	<div class="flex items-center space-x-4 px-6 pl-6 pt-3">staus</div>
	<div class="flex items-center space-x-4 px-6 pl-6 pt-3">domande</div>
</div>

<style></style>
