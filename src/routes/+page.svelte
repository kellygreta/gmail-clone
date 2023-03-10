<script>
	//TODO Le mail possono essere ordinabili per data, dalla più recente a quella più vecchia e viceversa
	/** @type {import('./$types').PageData["mail"]} */
	export let data;
</script>

<!--TODO modifcare usando flexbox NON table  -->
<ul>
	{#each data.mails as mail}
		<li />
		<li />
		<li>
			{mail.user.email}
		</li>
		<li>
			{mail.title}
		</li>
	{/each}
</ul>

<style></style>
