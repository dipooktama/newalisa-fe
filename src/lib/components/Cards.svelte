<script lang="ts">
	import { Button, AspectRatio } from 'bits-ui';
	import type { Snippet } from 'svelte';

	// Define the props for the card component.
	// We accept snippets for each section to allow for maximum flexibility.
	type Props = {
		href?: string;
		header?: Snippet;
		content?: Snippet;
		footer?: Snippet;
		// Props for the default snippets
		imageUrl?: string;
		logoUrl?: string;
		title?: string;
		description?: string;
		aspectRatio?: number;
	};

	let {
		href,
		header,
		content,
		footer,
		imageUrl,
		logoUrl,
		title,
		description,
		aspectRatio = 16 / 9
	}: Props = $props();
</script>

<!-- 
  The root element is now a `Button.Root` from bits-ui.
  It will render as an `<a>` tag if `href` is provided, otherwise a `<button>`.
  The `block` class is removed and styling is adjusted for a button/link root.
-->
<Button.Root
	{href}
	class="w-64 group block text-left overflow-hidden rounded-lg border 
    bg-white shadow-sm transition-all duration-200 hover:shadow-md 
    dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-lg dark:hover:shadow-gray-700/50"
>
	<!-- Header Section (for Image/Logo) -->
	<div class="relative">
		{#if header}
			{@render header()}
		{:else}
			{@render defaultHeader()}
		{/if}
	</div>

	<!-- Content Section (for Title/Description) -->
	<div class="p-4 sm:p-6">
		{#if content}
			{@render content()}
		{:else}
			{@render defaultContent()}
		{/if}
	</div>

	<!-- Optional Footer Section -->
	{#if footer}
		<div class="px-4 pb-4 sm:px-6 sm:pb-6">
			{@render footer()}
		</div>
	{/if}
</Button.Root>

<!-- Default snippet for the header (media) section -->
{#snippet defaultHeader()}
	<!-- Use AspectRatio.Root to maintain a consistent aspect ratio for the media -->
    {#if imageUrl}
        {@render cardImagery()}
    {:else if logoUrl}
        {@render logoPlacing()}
    {/if}
{/snippet}

<!-- Default snippet for the content section -->
{#snippet defaultContent()}
	{#if title}
		<h3 class="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
	{/if}
	{#if description}
		<p class="mt-2 text-sm text-gray-500 dark:text-gray-400">{description}</p>
	{/if}
{/snippet}

{#snippet cardImagery()}
    <AspectRatio.Root ratio={aspectRatio}>
        <img
            src={imageUrl}
            alt={title ?? 'Card image'}
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
    </AspectRatio.Root>
{/snippet}

{#snippet logoPlacing()}
    <AspectRatio.Root ratio={aspectRatio}>
        <div class="flex h-full w-full items-center justify-center bg-gray-100 dark:bg-gray-700">
            <img
                src={logoUrl}
                alt={title ?? 'Card logo'}
                class="h-12 w-12 object-contain"
            />
        </div>
    </AspectRatio.Root>
{/snippet}