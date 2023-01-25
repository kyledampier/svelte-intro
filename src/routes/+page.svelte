<script lang="ts">
    import Card from "../components/Card.svelte";
    import { content } from "../data/content";
</script>

<h1>Welcome to SvelteKit</h1>

<section>
    {#each content as item, i}
        <Card content={item} href={`/details/${i}`} />
    {/each}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 1em;
        margin: 1em;
    }

    h1 {
        font-size: 2em;
        font-weight: 700;
        text-align: center;
    }
</style>