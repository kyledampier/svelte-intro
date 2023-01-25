<script>
    export let count = 0;
</script>

<button
    on:click={() => { count += 1; }} >
    Count: <b>{count}</b>
</button>

<style>
    button {
        background: #aaa;
        border: 0px;
        padding: 1em;
        font-size: 1.5em;
        border-radius: 0.5em;
    }
</style>