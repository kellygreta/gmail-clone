<script>
	//TODO dividere la pagina in compnenti
	//(navbar laterale, barra di ricerca, tabella delle email in arrivo, nuova email)

	import '../app.postcss';
	import Sidebar from './Sidebar.svelte';
	import TopNavbar from './TopNavbar.svelte';
	import EmailForm from './EmailForm.svelte';

	let isOpen = true;
	let writeMail = false;
</script>

<TopNavbar bind:isOpen />
<Sidebar bind:isOpen bind:writeMail />
<EmailForm bind:writeMail />
<slot />
