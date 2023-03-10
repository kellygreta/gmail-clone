<script>
	import '../app.postcss';
	import Sidebar from './Sidebar.svelte';
	import TopNavbar from './TopNavbar.svelte';
	import EmailForm from './EmailForm.svelte';

	let isOpen = true;
	let writeMail = false;
</script>

<EmailForm bind:writeMail />
<TopNavbar bind:isOpen />
<Sidebar bind:isOpen bind:writeMail />
<slot />
