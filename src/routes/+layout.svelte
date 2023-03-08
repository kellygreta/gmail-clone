<script>
	import '../app.postcss';
	import Sidebar from './Sidebar.svelte';
	import TopNavbar from './TopNavbar.svelte';
	import EmailForm from './EmailForm.svelte';
</script>

<TopNavbar />
<Sidebar />
<EmailForm />
<slot />
