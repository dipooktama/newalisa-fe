<script lang="ts">
  import { Collapsible } from "bits-ui";
	import { ChevronsLeft, ChevronsRight, LifeBuoy } from "lucide-svelte";
	import type { Snippet } from "svelte";

  export type NavLinks = {
	link: string;
	text: string;
  }

  export type Props = {
    open?: boolean;
    header: string;
    content: NavLinks[];
	main: Snippet;
    footer: string;
  };

  // Use the $props rune to make the `open` state a bindable prop
  // and to accept custom snippets for the sidebar sections.
  let {
    open = $bindable(true),
    header,
    content,
	main: mainProp,
    footer,
  }: Props = $props();
</script>

<div class="flex bg-gray-100 dark:bg-gray-900 font-sans">
	<Collapsible.Root
	  bind:open
	  class="h-screen bg-white dark:bg-gray-800 border-r dark:border-gray-700 shadow-md transition-all duration-300 ease-in-out {open ? 'w-64' : 'w-20'}"
	>
	  <div class="flex h-full flex-col justify-between overflow-hidden">
		<div class="flex flex-col align-top">
			<div class="flex items-center justify-center h-16 border-b dark:border-gray-700">
				<span
				class="whitespace-nowrap text-xl font-bold text-gray-800 dark:text-gray-200 transition-opacity duration-200 {open ? 'opacity-100' : 'opacity-0'}"
				>
				{header}
				</span>
			</div>
		
			<nav class="mt-4 px-2">
			{#each content as item }
				<a
				href={item.link}
				class="group flex items-center rounded-md px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
				>
					<LifeBuoy class="h-6 w-6 shrink-0" />
					<span
						class="ml-4 whitespace-nowrap transition-opacity duration-200 {open ? 'opacity-100' : 'opacity-0'}"
					>
						{item.text}
					</span>
				</a>
			{/each}
			</nav>
		</div>
	
		<div class="px-2 pb-4">
			<a
			href="/"
			class="group flex items-center rounded-md px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
			>
				<LifeBuoy class="h-6 w-6 shrink-0" />
				<span class="ml-4 whitespace-nowrap transition-opacity duration-200 {open ? 'opacity-100' : 'opacity-0'}">
					{footer}
				</span>
			</a>
			
			<Collapsible.Trigger class="group mt-2 flex w-full items-center rounded-md px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
			{#if open}
				<ChevronsLeft class="h-6 w-6 shrink-0" />
			{:else}
				<ChevronsRight class="h-6 w-6 shrink-0" />
			{/if}
				<span class="ml-4 whitespace-nowrap transition-opacity duration-200 {open ? 'opacity-100' : 'opacity-0'}">
					Collapse
				</span>
			</Collapsible.Trigger>
		</div>
	  </div>
	</Collapsible.Root>
	
	{@render mainProp()}
</div>