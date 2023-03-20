<script>
	export let propSender;
	export let propSubject;
	export let propSpecial;
	export let propBody;
	//export let data;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<div class="group flex flex-col border-b-2 border-gray-200">
	<div class="flex w-full flex-none ">
		<h1 class="text-xl">{propSubject}</h1>
		<img class="h-5  object-contain" src="/images/more_vert.png" alt="more_vert-icon" />
		<img class="h-5  object-contain" src="/images/more_vert.png" alt="more_vert-icon" />
	</div>

	<div class="flex w-full flex-none">
		<h2 class="text-lg">{propSender}</h2>
		<div on:click={() => dispatch('special')}>
			{#if propSpecial}
				<img class="h-5  object-contain" src="/images/special.png" alt="special-icon" />
			{:else}
				<img class="h-5  object-contain" src="/images/notSpecial.png" alt="notSpecial-icon" />
			{/if}
		</div>
		<img class="h-5  object-contain" src="/images/more_vert.png" alt="more_vert-icon" />
		<img class="h-5  object-contain" src="/images/more_vert.png" alt="more_vert-icon" />
	</div>

	<div class="flex h-14 flex-none">
		<p class="text-base">{propBody}</p>
	</div>
	<div class="flex h-14 flex-none">
		<button>rispondi</button>
		<button>inoltra</button>
	</div>
</div>

<style>
</style>
