<script>
	//TODO Le mail possono essere ordinabili per data, dalla più recente a quella più vecchia e viceversa
	/** @type {import('./$types').PageData} */
	export let data;
	import { browser } from '$app/environment';
	import { setContext } from 'svelte';
	import EmailItem from './EmailItem.svelte';

	function getAPIEmailData() {
		let emailsAPI = browser ? window.localStorage.getItem('emailsAPI') : null;

		if (emailsAPI === null) {
			emailsAPI = [];
		} else {
			emailsAPI = JSON.parse(emailsAPI);
		}

		if (emailsAPI.length == 0) {
			data.infos.forEach((info) => {
				let email = {
					sender: info.user.email,
					recipient: 'gvigano@efebia.com',
					subject: info.title,
					body: info.body,
					special: false,
					deleted: false,
					id: info.idm
				};
				emailsAPI.push(email);
				if (browser) {
					window.localStorage.setItem('emailsAPI', JSON.stringify(emailsAPI));
				}
			});
		}

		return emailsAPI;
	}

	let emailsAPI = getAPIEmailData();
	setContext('emailsAPI', emailsAPI);

	function updateSpecial(id) {
		const email = emailsAPI.find((email) => email.id == id);
		if (email) {
			email.special = !email.special;
		}

		emailsAPI = emailsAPI;
		window.localStorage.setItem('emailsAPI', JSON.stringify(emailsAPI));
	}

	function deleteEmail(id) {
		const email = emailsAPI.find((email) => email.id == id);
		const index = emailsAPI.indexOf(email);
		emailsAPI.splice(index, 1);

		emailsAPI = emailsAPI;
		window.localStorage.setItem('emailsAPI', JSON.stringify(emailsAPI));
	}
</script>

<div class="z-1 absolute left-48 top-24 w-full rounded-md">
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

	<!-- {#each data.infos as info}
		{#if !info.deleted}
			<EmailItem
				propSender="{info.user.email},"
				propSubject="{info.title},"
				propSpecial="{info.special},"
				propID={info.idm}
			/>
		{/if}
	{/each} -->

	{#each emailsAPI as mail}
		<EmailItem
			on:special={() => updateSpecial(mail.id)}
			on:delete={() => deleteEmail(mail.id)}
			propSender={mail.sender}
			propSubject={mail.subject}
			propSpecial={mail.special}
			propID={mail.id}
		/>
	{/each}
</div>

<style></style>
