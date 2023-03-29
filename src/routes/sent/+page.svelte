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
	//console.log(searchMailSent);

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

	// Oldest first
	function sortEmailsOldest() {
		emails.sort((a, b) => a.time.localeCompare(b.time));
		emails = emails;
		window.localStorage.setItem('emails', JSON.stringify(emails));
	}

	// Newest first
	function sortEmailsNewest() {
		emails.sort((a, b) => -a.time.localeCompare(b.time));
		emails = emails;
		window.localStorage.setItem('emails', JSON.stringify(emails));
	}

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

	const swapElements = (array, index1, index2) => {
		let temp = array[index1];
		console.log('temp', temp);
		array[index1] = array[index2];
		console.log('array[index2]', array[index2]);
		array[index2] = temp;
	};

	function handleDrop(e, propIndex) {
		//e.stopPropagation(); // stops the browser from redirecting.

		//console.log('e.detail', e.detail);
		swapElements(emails, e.detail.originalEvent.dataTransfer.getData('index'), propIndex);

		emails = emails;
		console.log('emails', emails);
		window.localStorage.setItem('emails', JSON.stringify(emails));

		return false;
	}
</script>

<div class="z-1 absolute left-48 top-24 w-4/5 space-x-5 rounded-md">
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
		<div class="h-fit w-14 flex-initial space-x-80">
			<button
				class="flex items-center rounded-lg bg-blue-200 py-2 px-4 hover:shadow-xl"
				on:click={() => {
					sortEmailsNewest();
				}}
			>
				<p>Newest</p>
			</button>
		</div>
		<div class="h-fit w-14 flex-initial ">
			<button
				class="flex items-center rounded-lg bg-blue-200 py-2 px-4 hover:shadow-xl"
				on:click={() => {
					sortEmailsOldest();
				}}
			>
				<p>Oldest</p>
			</button>
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
		{#each emails as mail, i}
			<EmailItem
				on:special={() => updateSpecial(mail.id)}
				on:delete={() => deleteEmail(mail.id)}
				on:handleDrop={(event) => handleDrop(event, i)}
				propSender={mail.sender}
				propSubject={mail.subject}
				propSpecial={mail.special}
				propID={mail.id}
				propData={mail.time}
				propDrag={mail.drag}
				propIndex={i}
			/>
		{/each}
	{/if}
</div>

<style></style>
