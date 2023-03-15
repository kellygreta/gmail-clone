<script>
	export let propSender;
	export let propSubject;
	export let propSpecial;
	export let propID;
	//export let data;

	function updateSpecial(id) {
		let emails = window.localStorage.getItem('emails');

		if (emails === null) {
			emails = [];
		} else {
			emails = JSON.parse(emails);
		}

		const email = emails.find((email) => email.id == id);
		if (email) {
			email.special = !email.special;
		}

		window.localStorage.setItem('emails', JSON.stringify(emails));
	}

	function deleteEmail(id) {
		let emails = window.localStorage.getItem('emails');

		if (emails === null) {
			emails = [];
		} else {
			emails = JSON.parse(emails);
		}

		let index = 0;
		emails.forEach((email) => {
			if (email.id == id) {
				emails.splice(index, 1);
			}
			index++;
		});

		window.localStorage.setItem('emails', JSON.stringify(emails));
	}
</script>

<div class=" flex border-b-2 border-gray-200 hover:shadow-xl">
	<div class="h-14 w-14 flex-none">
		<img class="h-5  object-contain" src="/images/check_box.png" alt="check_box" />
	</div>
	<div class="h-14 w-14 flex-none" on:click={() => updateSpecial(propID)}>
		{#if propSpecial}
			<img class="h-5  object-contain" src="/images/special.png" alt="special-icon" />
		{:else}
			<img class="h-5  object-contain" src="/images/notSpecial.png" alt="notSpecial-icon" />
		{/if}
	</div>
	<div class="h-14 w-80 flex-none">{propSender}</div>
	<div class="h-14 w-2/5 flex-none">{propSubject}</div>
	<div class=" h-14 w-14 flex-none bg-slate-600" on:click={() => deleteEmail(propID)}>
		<img class="h-5  object-contain" src="/images/delete.png" alt="delete-icon" />
	</div>
</div>

<style>
</style>
