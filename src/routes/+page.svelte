<script>
	//TODO dividere la pagina in compnenti
	//(navbar laterale, barra di ricerca, tabella delle email in arrivo, nuova email)

	//TODO prendere i sender in modo casuale da https://jsonplaceholder.typicode.com/users

	//TODO Le mail devono essere salvate, indipendentemente da refresh o stop dell’applicazione.
	//TODO Le mail possono essere ordinabili per data, dalla più recente a quella più vecchia e viceversa

	/*function addSuccess() {
		var success = document.getElementById('successImport');
		success.style.display = 'block';
	}


	/*function getSender() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Qualcosa è andato storto');
			})
			.then((json) => {
				console.log(json);
				//TODO prendere utente sender con id Math.floor(Math.random() * 10) + 1;
				//TODO aggiungere sender al local storage (?)
			})
			.catch((error) => console.log(error));
	}*/
</script>

<div />
<!-- <div
	id="successImport"
	class="relative rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700"
	role="alert"
	style="display: none;"
>
	<span class="block sm:inline">Email inviata con successo!</span>
</div> -->

<!-- <div class="container m-3">
	<table class="table-auto">
		<thead>
			<tr>
				<th>Mittente</th>
				<th>Oggetto</th>
				<th>Speciale</th>
			</tr>
		</thead>
		<tbody id="resultMail" />
	</table>
</div> -->
<style></style>
