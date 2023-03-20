<script>
	export let propSender;
	export let propSubject;
	export let propSpecial;
	export let propID;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<div class="group flex border-b-2 border-gray-200 hover:shadow-xl">
	<div class="h-14 w-14 flex-none">
		<img class="h-5  object-contain" src="/images/check_box.png" alt="check_box" />
	</div>
	<div class="h-14 w-14 flex-none" on:click={() => dispatch('special')}>
		{#if propSpecial}
			<img class="h-5  object-contain" src="/images/special.png" alt="special-icon" />
		{:else}
			<img class="h-5  object-contain" src="/images/notSpecial.png" alt="notSpecial-icon" />
		{/if}
	</div>
	<div class="h-14 w-80 flex-none">{propSender}</div>
	<div class="h-14 w-2/5 flex-none"><a href="/specific/{propID}">{propSubject}</a></div>

	<div
		class="invisible h-14 w-14 flex-none group-hover:visible"
		on:click={() => dispatch('delete')}
	>
		<img class="h-5  object-contain" src="/images/delete.png" alt="delete-icon" />
	</div>
</div>

<style>
</style>
