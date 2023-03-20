<script>
	import EmailItem from '../EmailItem.svelte';
	import { browser } from '$app/environment';
	import { setContext } from 'svelte';
	import { onMount } from 'svelte';
	//TODO ricerca contenuto email
	import searchMail from '../topNavbar.svelte';

	let searchBar = false;

	import { getContext } from 'svelte';
	let searchMailSent = getContext('searchMailSent');

	onMount(function () {});

	console.log(searchMailSent);

	function getSentEmailData() {
		let emails = browser ? window.localStorage.getItem('emails') : null;

		if (emails === null) {
			emails = [];
		} else {
			emails = JSON.parse(emails);
		}

		return emails;
	}

	let emails = getSentEmailData();

	setContext('emails', emails);

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
	{#if searchMailSent != null && searchMailSent.lenght > 1}
		{#each searchMailSent as mail}
			<EmailItem
				on:special={() => updateSpecial(mail.id)}
				on:delete={() => deleteEmail(mail.id)}
				propSender={mail.sender}
				propSubject={mail.subject}
				propSpecial={mail.special}
			/>
		{/each}
	{:else}
		{#each emails as mail}
			<EmailItem
				on:special={() => updateSpecial(mail.id)}
				on:delete={() => deleteEmail(mail.id)}
				propSender={mail.sender}
				propSubject={mail.subject}
				propSpecial={mail.special}
				propID={mail.id}
			/>
		{/each}
	{/if}
</div>

<style></style>
