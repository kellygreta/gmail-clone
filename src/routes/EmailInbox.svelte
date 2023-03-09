<script>
	//TODO Le mail possono essere ordinabili per data, dalla più recente a quella più vecchia e viceversa
	function feedBox() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Qualcosa è andato storto');
			})
			.then((json) => {
				json.forEach((person) => {
					//TODO modificare, bisogna usare solo i bindings di svelte, niente API del DOM
					//TODO add una funzione che prende id della persona e ne restituisce il nome (async/await)
					resultMail.innerHTML +=
						'<tr><td></td>' +
						'<td></td>' +
						'<td>' +
						person.id +
						'</td>' +
						'<td>' +
						person.title +
						'</td>' +
						'<td>' +
						'tempo' +
						'</td><tr>';
				});
			})
			.catch((error) => console.log(error));
	}
	feedBox();
</script>

<!--TODO modifcare usando flexbox NON table  -->
<div class="container m-3">
	<table class="table-auto">
		<thead>
			<tr>
				<th />
				<th />
				<th>Mittente</th>
				<th>Oggetto</th>
				<th>data</th>
			</tr>
		</thead>
		<tbody id="resultMail" />
	</table>
</div>

<style></style>
