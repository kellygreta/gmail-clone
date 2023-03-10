<script>
	//TODO Le mail possono essere ordinabili per data, dalla più recente a quella più vecchia e viceversa
	/** @type {import('./$types').PageData} */
	export let data;
	//$: console.log('data', data);

	import EmailItem from './EmailItem.svelte';
</script>

<!-- absolute left-80 top-20  -->
<div class="z-1 rounded-md">
	<div class="grid grid-cols-4 gap-4 border-b-2 border-gray-200">
		<div><img class="h-5  object-contain" src="/images/check_box.png" alt="check_box" /></div>
		<div><img class="h-5  object-contain" src="/images/refresh.png" alt="refresh-icon" /></div>
		<div><img class="h-5  object-contain" src="/images/more_vert.png" alt="more_vert-icon" /></div>
	</div>

	{#each data.infos as info}
		<EmailItem propSender="{info.user.email}," propSubject={info.title} />
	{/each}
</div>

<style></style>
