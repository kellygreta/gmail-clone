<script>
	export let data;
	//$: console.log('data', data);

	import EmailItem from '../EmailItem.svelte';
</script>

<div class="z-1 absolute left-72 top-24 w-full rounded-md">
	<div class="flex border-b-2 border-gray-200">
		<div class="h-14 w-14 flex-none">
			<img class="h-5  object-contain" src="/images/check_box.png" alt="check_box" />
		</div>
		<div class="h-14 w-14 flex-initial">
			<img class="h-5  object-contain" src="/images/refresh.png" alt="refresh-icon" />
		</div>
		<div class="h-14 w-14 flex-initial">
			<img class="h-5  object-contain" src="/images/more_vert.png" alt="more_vert-icon" />
		</div>
	</div>
	{#each data.infos as info}
		{#if !info.deleted && info.special}
			<EmailItem propSender="{info.user.email}," propSubject="{info.title}," propID={info.idm} />
		{/if}
	{/each}
</div>

<style></style>
