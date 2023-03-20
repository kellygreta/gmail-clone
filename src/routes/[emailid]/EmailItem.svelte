<script>
	export let propSender;
	export let propSubject;
	export let propSpecial;
	//export let data;
</script>

<div class="group flex border-b-2 border-gray-200 hover:shadow-xl">
	<div class="h-14 w-14 flex-none">
		<h1>{propSubject}</h1>
		<img class="h-5  object-contain" src="/images/more_vert.png" alt="more_vert-icon" />
		<img class="h-5  object-contain" src="/images/more_vert.png" alt="more_vert-icon" />
	</div>
	<div class="h-14 w-14 flex-none">
		<h2>{propSender}</h2>
		{#if propSpecial}
			<img class="h-5  object-contain" src="/images/special.png" alt="special-icon" />
		{:else}
			<img class="h-5  object-contain" src="/images/notSpecial.png" alt="notSpecial-icon" />
		{/if}
		<img class="h-5  object-contain" src="/images/more_vert.png" alt="more_vert-icon" />
		<img class="h-5  object-contain" src="/images/more_vert.png" alt="more_vert-icon" />
	</div>
	<div class="h-14 w-14 flex-none">
		<p>{propBody}</p>
	</div>
	<div class="h-14 w-14 flex-none">
		<button>rispondi</button>
		<button>inoltra</button>
	</div>
</div>

<style>
</style>
