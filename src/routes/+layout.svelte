<script>
	import '../app.postcss';
	import Sidebar from './Sidebar.svelte';
	import TopNavbar from './TopNavbar.svelte';
	import EmailForm from './EmailForm.svelte';
	import EmailInbox from './EmailInbox.svelte';

	let isOpen = true;
	let writeMail = false;

	/** @type {import('./$types').PageData["mail"]} */
	export let data;
</script>

<TopNavbar bind:isOpen />
<Sidebar bind:isOpen bind:writeMail />
<EmailInbox />
<EmailForm bind:writeMail />
<slot />
