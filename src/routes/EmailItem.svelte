<script>
	export let propSender;
	export let propSubject;
</script>

<div class="grid grid-cols-4 gap-4 border-b-2 border-gray-200 hover:shadow-xl">
	<div><img class="h-5  object-contain" src="/images/check_box.png" alt="check_box" /></div>
	<div><img class="h-5  object-contain" src="/images/speciali.png" alt="special-icon" /></div>
	<div>{propSender}</div>
	<div>{propSubject}</div>
</div>

<style></style>
