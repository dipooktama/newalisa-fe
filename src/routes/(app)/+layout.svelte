<script lang="ts">
	import '../../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { NavChats } from '$lib/NavChats';
	import { Navs } from '$lib/NavGeneral.svelte';
	import { page } from '$app/state';
	import { error } from '@sveltejs/kit';

	let { children, data } = $props();

	const {ssoPayload, errorCode, errorMessage} = data;

	$effect(() => {
		// $inspect(page.url.pathname)
		// $inspect(Navs.items)
		if(page.url.pathname === "/chats") {
			Navs.setItems = NavChats
		} else {
			Navs.reset()
		}
		// $inspect(Navs.items)
	})
</script>

{#if errorCode}
	{@render errorLooks1()}
{:else if ssoPayload !== null}
	<div class="flex bg-gray-100 dark:bg-gray-900 font-sans">
		{#if page.url.pathname !== "/"}
			<Sidebar header="ALISA" footer="Beranda" content={Navs.items}></Sidebar>
		{/if}
		{@render children()}
	</div>
{:else}
	{@render errorLooks2()}
{/if}


{#snippet errorLooks1()}
	<section class="h-screen w-full flex flex-col justify-center">
		<h2 class="text-2xl text-center">Error {errorCode}</h2>
		<p class="text-xl text-center">{errorMessage}</p>
	</section>
{/snippet}

{#snippet errorLooks2()}
	<section class="h-screen w-full flex flex-col justify-center">
		<p class="text-2xl text-center">unknown error {errorCode} {errorMessage}</p>
	</section>
{/snippet}
