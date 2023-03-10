<script>
	export let propSender;
	export let propSubject;
</script>

<div class="flex border-b-2 border-gray-200 hover:shadow-xl">
	<div class="h-14 w-14 flex-none">
		<img class="h-5  object-contain" src="/images/check_box.png" alt="check_box" />
	</div>
	<div class="h-14 w-14 flex-none">
		<img class="h-5  object-contain" src="/images/speciali.png" alt="special-icon" />
	</div>
	<div class="h-14 w-80 flex-none">{propSender}</div>
	<div class="h-14  flex-none">{propSubject}</div>
</div>

<style></style>
