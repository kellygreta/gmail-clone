<script>
	//TODO Le mail possono essere ordinabili per data, dalla più recente a quella più vecchia e viceversa
	/** @type {import('./$types').PageData} */
	export let data;
	console.log('data', data);
</script>

<ul>
	{#each data.mail as info}
		<li />
		<li />
		<li>
			{info.user.email}
		</li>
		<li>
			{info.title}
		</li>
	{/each}
</ul>

<style></style>
