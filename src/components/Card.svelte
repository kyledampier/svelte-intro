<script lang="ts">
    import type { Content } from "../types/Content";
    import { goto } from "$app/navigation";
    export let content: Content;
    export let href: string;

    function onClick() {
        goto(href);
    }
</script>

<div class="card" on:click={onClick} on:keypress={onClick}>
    <img src={content.imgSrc} alt={content.imgAlt} />
    <div class="card-details">
        <h2>{content.title}</h2>
        <p>{content.description}</p>
    </div>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        padding: 0em;
        border: 1px solid #aaa;
        border-radius: 0.5em;
        overflow: hidden;
        transition: box-shadow 0.2s ease-in-out;
    }

    .card:hover {
        box-shadow: 0 0 0.5em #aaa;
    }

    .card-details {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        padding: 1em;
    }

    img {
        width: 100%;
        height: 25vh;
        object-fit: cover;
    }

    h2 {
        font-size: 1.5em;
        font-weight: 700;
        margin-bottom: 0.5em;
    }

    p {
        font-size: 1em;
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 0.5em;
    }
</style>
