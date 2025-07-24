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


<section class="h-screen w-full flex flex-col justify-center content-center gap-10">
  {@render heroTitle()}
  {@render cardistries()}
</section>

{#snippet heroTitle()}
<div class="flex flex-col text-center w-full">
  <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Selamat Datang di ALISA</h1>
  <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Jelajahi fitur-fitur yang tersedia untuk membantu anda.</p>
</div>
{/snippet}

{#snippet cardistries()}
  <div class="flex flex-row w-full justify-center p-4 gap-4">
    {#each cardItems as item }
        <Cards href={item.value} title={item.title} description={item.content} />
    {/each}
  </div>
{/snippet}