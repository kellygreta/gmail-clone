<script>
	import EmailItem from '../EmailItem.svelte';

	export let email;

	function updateSpecial() {
		if (email) {
			email.special = !email.special;
		}

		emails = emails;
		window.localStorage.setItem('emails', JSON.stringify(emails));
	}

	function deleteEmail() {
		const index = emails.indexOf(email);
		emails.splice(index, 1);

		emails = emails;
		window.localStorage.setItem('emails', JSON.stringify(emails));
	}
</script>

<div class="h-6 w-0.5 bg-gray-600" />
<div class="z-1 absolute left-72 top-24 w-full rounded-md">
	<div class="flex border-b-2 border-gray-200">
		<a href="/">
			<div class="h-14 w-14 flex-none">
				<img class="h-5  object-contain" src="/images/arrow_back.png" alt="arrow_back" />
			</div>
		</a>
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
		propSender={mail.sender}
		propSubject={mail.subject}
		propSpecial={mail.special}
		propBody={mail.body}
	/>
</div>

<style></style>
