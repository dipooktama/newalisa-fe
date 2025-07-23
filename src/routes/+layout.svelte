<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { NavChats } from './chats/NavChats';
	import { NavGeneral } from './NavGeneral';
	import { page } from '$app/state';

	console.log(page.url.pathname)
	console.log(page.url.pathname === "/chats")
	let currentPage = $state(page.url.pathname)
	let aok = $derived(currentPage === "/chats" ? NavChats : NavGeneral)
	$inspect(currentPage)
	$inspect(aok)

	let { children} = $props();
</script>

<Sidebar header="ALISA" footer="Beranda" content={aok} main={children}></Sidebar>
