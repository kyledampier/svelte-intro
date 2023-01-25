<script lang="ts">
    import type { Content } from "../../../types/Content";

    type DetailParams = {
        item: Content;
    };

    export let data: DetailParams;
</script>

<section>
    <div class="img-container">
        <img src={data.item.imgSrc} alt={data.item.imgAlt} />
    </div>
    <h1>{data.item.title}</h1>
    <p>{data.item.description}</p>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin: 1em;
    }
    .img-container {
        display: flex;
        justify-content: center;
    }

    img {
        width: 100%;
        max-width: 75vw;
    }

    h1, p {
        text-align: center;
    }
</style>