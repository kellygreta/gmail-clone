<script>
	export let isOpen = true;
	export let writeMail = false;
</script>

<div class="flex h-screen w-fit max-w-[16rem] flex-col rounded-md bg-slate-100">
	<div class="flex w-fit items-center space-x-4 px-6 pl-6 pt-3">
		<button
			class="flex items-center rounded-lg bg-blue-200 py-2 px-4 hover:shadow-xl"
			on:click={() => {
				writeMail = true;
			}}
		>
			<img class="h-5  object-contain  pr-3" src="/images/pen.png" alt="pen-icon" />
			{#if isOpen}
				<p>Scrivi</p>
			{/if}
		</button>
	</div>
	<a href="/">
		<div class="flex w-fit items-center space-x-4 rounded-full px-6 pt-3 hover:bg-gray-200">
			<img class="h-5  object-contain" src="/images/incoming.png" alt="incoming-icon" />
			{#if isOpen}
				<p>Posta in arrivo</p>
			{/if}
		</div>
	</a>
	<a href="special">
		<div class="flex w-fit items-center space-x-4 rounded-full  px-6 pt-3 hover:bg-gray-200">
			<img class="h-5  object-contain" src="/images/notSpecial.png" alt="notSpecial-icon" />
			{#if isOpen}
				<p>Speciali</p>
			{/if}
		</div>
	</a>
	<a href="/">
		<div class="flex w-fit items-center space-x-4  rounded-full  px-6 pt-3 hover:bg-gray-200">
			<img class="h-5  object-contain" src="/images/posticipati.png" alt="postponed-icon" />
			{#if isOpen}
				<p>Posticipati</p>
			{/if}
		</div>
	</a>
	<a href="/">
		<div class="flex w-fit items-center space-x-4 rounded-full px-6  pt-3  hover:bg-gray-200">
			<img class="h-5  object-contain" src="/images/importanti.png" alt="important-icon" />
			{#if isOpen}
				<p>Importanti</p>
			{/if}
		</div>
	</a>
	<a href="/sent">
		<div class="flex w-fit items-center space-x-4 rounded-full px-6  pt-3  hover:bg-gray-200">
			<img class="h-5  object-contain" src="/images/inviati.png" alt="sent-icon" />
			{#if isOpen}
				<p>Inviati</p>
			{/if}
		</div>
	</a>
	<a href="/">
		<div class="flex w-fit items-center space-x-4 rounded-full px-6  pt-3  hover:bg-gray-200">
			<img class="h-5  object-contain" src="/images/draft.png" alt="draft-icon" />
			{#if isOpen}
				<p>Bozze</p>
			{/if}
		</div>
	</a>
</div>

<style>
</style>
