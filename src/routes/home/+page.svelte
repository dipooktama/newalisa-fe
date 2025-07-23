<script lang="ts">
    import Accordion, { type AccordionItem } from "$lib/components/Accordion.svelte";
    const defaultItems: AccordionItem[] = [
    {
      value: "item-1",
      title: "What is Bits UI?",
      content:
        "Bits UI is a headless component library for Svelte, providing unstyled, accessible building blocks for creating your own custom-styled component library.",
    },
    {
      value: "item-2",
      title: "How do I style the components?",
      content:
        "You can style the components using standard class props with frameworks like Tailwind CSS, or by targeting the data-* attributes that each component part has.",
    },
    {
      value: "item-3",
      title: "Is it accessible?",
      content:
        "Yes. Accessibility is a primary focus. Bits UI components follow WAI-ARIA design patterns, ensuring they are accessible to all users, including those using screen readers.",
    },
  ];
</script>

<section class="h-64 w-full">
  <Accordion items={defaultItems} />
</section>