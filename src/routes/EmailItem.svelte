<script>
	import dayjs from 'dayjs';
	import { browser } from '$app/environment';

	export let propSender;
	export let propSubject;
	export let propSpecial;
	export let propID;
	export let propData;
	export let propDrag;
	export let propIndex;
	let item;

	let data = dayjs(propData).locale('it-IT');
	data = data.format(' DD MMM YYYY, H:mm:ss');

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	function handleDragStart(e) {
		this.style.opacity = '0.4';

		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('index', propIndex);
		console.log(e.dataTransfer.getData('index'));
		e.dataTransfer.setData('indexToChange', propIndex);
		console.log(e.dataTransfer.getData('indexToChange'));
	}

	function handleDragEnd(e) {
		this.style.opacity = '1';
		console.log('this', this);
		console.log('e', e);
	}

	function handleDragOver(e) {
		e.preventDefault();
		return false;
	}

	function handleDragEnter(e) {
		this.classList.add('border-dashed');
		this.classList.add('bg-slate-300');
	}

	function handleDragLeave(e) {
		this.classList.remove('border-dashed');
		this.classList.remove('bg-slate-300');
	}

	function handleDrop(e) {
		e.stopPropagation(); // stops the browser from redirecting.

		let indexToChange = e.dataTransfer.getData('indexToChange');
		indexToChange = propIndex;
		console.log('propIndex', propIndex);
		propIndex = e.dataTransfer.getData('index');
		//dispatch('swapIndex()');

		return false;
	}

	//console.log('item', item);

	//item.addEventListener('dragstart', handleDragStart, false);
	//item.addEventListener('dragend', handleDragEnd, false);
</script>

<!-- svelte-ignore missing-declaration -->
<!-- if drag true div draggable -->

<div
	draggable={propDrag}
	class=" group flex w-full border-b-2 border-gray-200 hover:shadow-xl"
	bind:this={item}
	on:dragstart={handleDragStart}
	on:dragend={handleDragEnd}
	on:dragover={handleDragOver}
	on:dragenter={handleDragEnter}
	on:dragleave={handleDragLeave}
	on:drop={handleDrop}
>
	<div class="h-14 w-14 flex-none ">
		<img class="h-5  object-contain" src="/images/check_box.png" alt="check_box" />
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="h-14 w-14 flex-none" on:click={() => dispatch('special')}>
		{#if propSpecial}
			<img class="h-5  object-contain" src="/images/special.png" alt="special-icon" />
		{:else}
			<img class="h-5  object-contain" src="/images/notSpecial.png" alt="notSpecial-icon" />
		{/if}
	</div>
	<div class="h-14 w-80 flex-none">{propSender}</div>
	<div class="h-14 w-2/5 flex-none">
		<a href="/{propID}" data-sveltkit-prefetch>{propSubject}</a>
	</div>
	{#if propSender == 'gvigano@efebia.com'}
		<div class="h-14 w-2/5 flex-none">
			<div class="h-14 w-80 flex-none">{data}</div>
		</div>
	{/if}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="invisible h-14 w-14 flex-none group-hover:visible"
		on:click={() => dispatch('delete')}
	>
		<img class="h-5  object-contain" src="/images/delete.png" alt="delete-icon" />
	</div>
</div>

<style>
</style>
