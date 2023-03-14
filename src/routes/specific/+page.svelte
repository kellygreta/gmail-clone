<script>
	export let data;
	//$: console.log('data', data);
	//oltre el data si passa l'id (?)

	import EmailItem from '../EmailItem.svelte';
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
		<div class="h-14 w-14 flex-initial">
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
	<!-- OGGETTO + stampa + open new window -->
	<!-- SENDER + speciali + freccia + more_vert -->
	<!-- BODY -->
	<!-- rispondi + inoltra -->
	<!-- <EmailItem propSender="{info.user.email}," propSubject="{info.title}," propID={info.idm} /> -->
</div>

<style></style>
