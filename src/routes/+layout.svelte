<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { NavChats } from '../lib/NavChats';
	import { Navs } from '../lib/NavGeneral.svelte';
	import { page } from '$app/state';

	let { children} = $props();
	$effect(() => {
		$inspect(page.url.pathname)
		$inspect(Navs.items)
		if(page.url.pathname === "/chats") {
			Navs.setItems = NavChats
		} else {
			Navs.reset()
		}
		$inspect(Navs.items)
	})
</script>

<div class="flex bg-gray-100 dark:bg-gray-900 font-sans">
	<Sidebar header="ALISA" footer="Beranda" content={Navs.items}></Sidebar>
	{@render children()}
</div>
