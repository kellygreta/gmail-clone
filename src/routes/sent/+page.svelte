<script>
	import EmailItem from '../EmailItem.svelte';

	function getSentEmailData() {
		let emails = window.localStorage.getItem('emails');

		if (emails === null) {
			emails = [];
		} else {
			emails = JSON.parse(emails);
		}

		return emails;
	}

	let emails = getSentEmailData();
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
	{#each emails as mail}
		<EmailItem propSender="TBD" , propSubject="{mail.subject}," propID={mail.id} />
	{/each}
</div>

<style></style>
