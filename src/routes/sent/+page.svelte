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

	function updateSpecial(id) {
		const email = emails.find((email) => email.id == id);
		if (email) {
			email.special = !email.special;
		}

		emails = emails;
		window.localStorage.setItem('emails', JSON.stringify(emails));
	}

	function deleteEmail(id) {
		const email = emails.find((email) => email.id == id);
		const index = emails.indexOf(email);
		emails.splice(index, 1);

		emails = emails;
		window.localStorage.setItem('emails', JSON.stringify(emails));
	}

	// onclick='window.location.href="albumTracks.html?url=${album.id}"
	export async function openSpecific(id) {
		//passa al componente specific -> dispatch? export mail?
		console.log('openSpecific');
		console.log('id', id);
		window.location.href = `/specific/${mail.id}`;
	}
</script>

<div class="z-1 absolute left-48 top-24 w-4/5 rounded-md">
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
		<EmailItem
			on:special={() => updateSpecial(mail.id)}
			on:delete={() => deleteEmail(mail.id)}
			on:specific={() => openSpecific(mail.id)}
			propSender={mail.sender}
			propSubject={mail.subject}
			propSpecial={mail.special}
		/>
	{/each}
</div>

<style></style>
