<script lang="ts">
    import Cards from "$lib/components/Cards.svelte";
    const cardItems = [
    {
      value: "/chats",
      title: "Obrolan",
      content:
        "Berdiskusi dengan ALISA.",
    },
    {
      value: "/chats",
      title: "Rancangan Mata Kuliah",
      content:
        "Membuat rancangan mata kuliah dengan ALISA.",
    },
    {
      value: "/chats",
      title: "Konten Mata Kuliah",
      content:
        "Membuat rancangan konten perkuliahan berbasis permainan atau video.",
    },
  ];
</script>


<section class="h-screen w-full">
    <div class="flex flex-row justify-center mt-auto p-4 gap-4">
        {#each cardItems as item }
            <Cards href={item.value} title={item.title} description={item.content} />
        {/each}
    </div>
</section>