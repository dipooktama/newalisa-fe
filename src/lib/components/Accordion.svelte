<script lang="ts">
  // Import the Accordion component from bits-ui
  import { Accordion } from "bits-ui";
  import { ChevronDown } from "lucide-svelte";

  export type AccordionItem = {
    value: string,
    title: string,
    content: string
  }

  let {items}: {items: AccordionItem[]} = $props();
</script>

<div class="flex justify-center p-4 font-sans">
  <Accordion.Root
    class="bg-white dark:bg-gray-800 w-full max-w-lg rounded-lg border dark:border-gray-700 shadow-sm"
    type="single"
  >
    {#each items as item}
      <Accordion.Item value={item.value} class="border-b last:border-b-0 dark:border-gray-700">
        <Accordion.Header class="w-full">
          <Accordion.Trigger
            class="group flex w-full items-center justify-between p-4 text-left text-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {item.title}
            <ChevronDown
              class="h-5 w-5 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180"
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content
          class="overflow-hidden text-base transition-all duration-300 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        >
          <div class="px-4 pb-4 pt-0 text-gray-600 dark:text-gray-400">
            {item.content}
          </div>
        </Accordion.Content>
      </Accordion.Item>
    {/each}
  </Accordion.Root>
</div>