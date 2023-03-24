<script>
	export let propSender;
	export let propSubject;
	export let propSpecial;
	export let propBody;
	export let propRecipiant;
	export let propName;
	export let propAttachments;
	let imgPreview;

	import { createEventDispatcher } from 'svelte';
	import { HtmlTag } from 'svelte/internal';
	const dispatch = createEventDispatcher();
</script>

<div class="flex flex-col border-b-2 border-gray-200 pl-2">
	<div class="flex h-12 w-full">
		<div class="flex h-12 w-full items-center space-x-3">
			<h1 class="text-2xl">{propSubject}</h1>
			<img class="h-5 object-contain" src="/images/importanti.png" alt="importanti-icon" />
		</div>
		<div class="flex  h-12 items-center justify-end space-x-3 ">
			<img class="flex h-5 object-contain" src="/images/print.png" alt="print-icon" />
			<img class="flex h-5  object-contain" src="/images/open_in_new.png" alt="open_in_new-icon" />
		</div>
	</div>

	<div class="flex h-5 w-full flex-none">
		<div class="flex h-5 w-full flex-none">
			<h2 class="text-sm">{propName} &lt;{propSender}&gt;</h2>
		</div>
		<div class="flex h-12  w-full items-center justify-end space-x-3 ">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div on:click={() => dispatch('special')}>
				{#if propSpecial}
					<img class="h-5  object-contain" src="/images/special.png" alt="special-icon" />
				{:else}
					<img class="h-5  object-contain" src="/images/notSpecial.png" alt="notSpecial-icon" />
				{/if}
			</div>
			<img class="flex h-5  object-contain" src="/images/reply.png" alt="reply-icon" />
			<img class="flex h-5  object-contain" src="/images/more_vert.png" alt="more_vert-icon" />
		</div>
	</div>
	<div class="flex h-8 w-full  flex-none">
		{#if propSender == 'gvigano@efebia.com'}
			<div class="h-3 flex-none">
				<p class="text-sm">from me to &lt;{propRecipiant}&gt;</p>
			</div>
		{:else}
			<div class="h-3 flex-none">
				<p class="text-sm">to me</p>
			</div>
		{/if}
	</div>
	<div class="flex h-12 flex-none">
		<p class="text-base">{propBody}</p>
	</div>
	{#if propSender == 'gvigano@efebia.com' && propAttachments != null}
		{#each propAttachments as propAttachment}
			<class class="image_box">
				<img src={propAttachment} alt={propAttachment} />
			</class>
		{/each}
	{/if}

	<div class="flex h-8 flex-none space-x-4">
		<button
			class="flex h-8 rounded-2xl border border-gray-500  bg-transparent  px-3 py-1 text-gray-500 hover:border-transparent hover:bg-gray-300 "
		>
			<img
				class="flex  h-5 object-contain"
				src="/images/reply.png"
				alt="reply-icon"
			/>rispondi</button
		>
		<button
			class="flex rounded-2xl border border-gray-500 bg-transparent px-3 py-1 text-gray-500 hover:border-transparent hover:bg-gray-300 "
		>
			<img
				class="flex  h-5 object-contain"
				src="/images/forward.png"
				alt="forward-icon"
			/>inoltra</button
		>
	</div>
</div>

<style>
</style>
