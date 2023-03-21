<script>
	import EmailItem from './EmailItem.svelte';
	import { browser } from '$app/environment';

	export let data;
	const { email } = data;
	//console.log(email);

	function getSentEmailData() {
		let emails = browser ? window.localStorage.getItem('emails') : null;

		if (emails === null) {
			emails = [];
		} else {
			emails = JSON.parse(emails);
		}

		return emails;
	}

	function getAPIEmailData() {
		let emailsAPI = browser ? window.localStorage.getItem('emailsAPI') : null;

		if (emailsAPI === null) {
			emailsAPI = [];
		} else {
			emailsAPI = JSON.parse(emailsAPI);
		}

		return emailsAPI;
	}

	let emails = getSentEmailData();
	let emailsAPI = getAPIEmailData();

	function updateSpecial() {
		if (email.sender == 'gvigano@efebia.com') {
			console.log('click on update special sent');
			const toUpdate = emails.find((toDelete) => toDelete.id == email.id);
			console.log('toUpdate', toUpdate);
			console.log('toUpdate.special prima', toUpdate.special);
			toUpdate.special = !toUpdate.special;
			console.log('toUpdate.special dopo', toUpdate.special);
			emails = emails;
			window.localStorage.setItem('emails', JSON.stringify(emails));
			console.log(emails);
		} else {
			console.log('click on update special API');
			const toUpdate = emailsAPI.find((toDelete) => toDelete.id == email.id);
			console.log('toUpdate', toUpdate);
			console.log('toUpdate.special prima', toUpdate.special);
			toUpdate.special = !toUpdate.special;
			console.log('toUpdate.special dopo', toUpdate.special);
			emailsAPI = emailsAPI;
			window.localStorage.setItem('emailsAPI', JSON.stringify(emailsAPI));
			console.log(emailsAPI);
		}
	}

	function deleteEmail() {
		if (email.sender == 'gvigano@efebia.com') {
			const index = emails.findIndex((toDelete) => toDelete.id == email.id);
			emails.splice(index, 1);
			emails = emails;
			window.localStorage.setItem('emails', JSON.stringify(emails));
		} else {
			console.log('sono qui API');
			const index = emailsAPI.findIndex((toDelete) => toDelete.id == email.id);
			console.log('index', index);
			emailsAPI.splice(index, 1);
			emailsAPI = emailsAPI;
			window.localStorage.setItem('emailsAPI', JSON.stringify(emailsAPI));
		}
	}
</script>

<div class="h-6 w-0.5 bg-gray-600" />
<div class="z-1 absolute left-48 top-24 w-full rounded-md">
	<div class="flex border-b-2 border-gray-200">
		{#if email.id >= 300}
			<a href="/sent">
				<div class="h-14 w-14 flex-none">
					<img class="h-5  object-contain" src="/images/arrow_back.png" alt="arrow_back" />
				</div>
			</a>
		{:else}
			<a href="/">
				<div class="h-14 w-14 flex-none">
					<img class="h-5  object-contain" src="/images/arrow_back.png" alt="arrow_back" />
				</div>
			</a>
		{/if}
		<div class="h-14 w-14 flex-initial">
			<img class="h-5  object-contain" src="/images/archive.png" alt="archive-icon" />
		</div>
		<div class="h-14 w-14 flex-initial">
			<img class="h-5  object-contain" src="/images/report.png" alt="report-icon" />
		</div>
		<!-- TODO eliminare email -->
		<div
			class="h-14 w-14 flex-initial"
			on:click={() => {
				deleteEmail();
			}}
		>
			<img class="h-5  object-contain" src="/images/delete.png" alt="delte-icon" />
		</div>
		<div class="h-14 w-14 flex-initial">
			<div class="h-6 w-0.5 bg-gray-300" />
		</div>
		<div class="h-14 w-14 flex-initial">
			<img class="h-5  object-contain" src="/images/mail.png" alt="mail-icon" />
		</div>
		<div class="h-14 w-14 flex-initial">
			<img class="h-5  object-contain" src="/images/posticipati.png" alt="posticipati-icon" />
		</div>
		<div class="h-14 w-14 flex-initial">
			<img class="h-5  object-contain" src="/images/check.png" alt="check-icon" />
		</div>
		<div class="h-14 w-14 flex-initial">
			<div class="h-6 w-0.5 bg-gray-300 " />
		</div>
		<div class="h-14 w-14 flex-initial">
			<img class="h-5  object-contain" src="/images/input.png" alt="input-icon" />
		</div>
		<div class="h-14 w-14 flex-initial">
			<img class="h-5  object-contain" src="/images/importanti.png" alt="importanti-icon" />
		</div>
		<div class="h-14 w-14 flex-initial">
			<img class="h-5  object-contain" src="/images/more_vert.png" alt="more_vert-icon" />
		</div>
	</div>

	<EmailItem
		on:special={() => updateSpecial()}
		propSender={email.sender}
		propSubject={email.subject}
		propSpecial={email.special}
		propBody={email.body}
		propRecipiant={email.recipiant}
	/>
</div>

<style></style>
