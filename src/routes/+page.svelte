<script>
	//TODO Le mail possono essere ordinabili per data, dalla più recente a quella più vecchia e viceversa
	/** @type {import('./$types').PageData} */
	export let data;
	$: console.log('data', data);

	import EmailItem from './EmailItem.svelte';
</script>

<div>
	{#each data.infos as info}
		<EmailItem propSender="{info.user.email}," propSubject{info.title} />
	{/each}
</div>

<style></style>
