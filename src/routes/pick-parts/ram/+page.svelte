<script>
    import { onMount } from 'svelte'
    import {
        fetchEndpointData,
        goBack,
        checkForNullPrice,
        datasetEndpoints,
    } from '$lib/configurationHelper.js'

    let original = []
    let searchString = ''
    let rams = []

    onMount(async () => {
        original = rams = await fetchEndpointData(datasetEndpoints.ram)
    })

    function selectRam(name, price) {
        localStorage.setItem('ramName', name)
        localStorage.setItem('ramPrice', price)

        goBack('/pick-parts/')
    }
</script>

<div
    class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl"
    style="background:0;"
>
    <p class="text-2xl text-justify font-bold">Choose your RAM</p>

    <div class="container flex items-center justify-center">
        <input
            type="search"
            bind:value={searchString}
            on:input={() => {
                rams = original.filter((x) =>
                    x.name.toLowerCase().includes(searchString.toLowerCase())
                )
            }}
            placeholder="Search..."
        />
    </div>

    <table class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Type</th>
                <th>Speed</th>
                <th>Modules</th>
            </tr>
        </thead>
        <tbody>
            {#each rams as ram}
                <tr
                    on:click={() =>
                        selectRam(ram.name, checkForNullPrice(ram.price))}
                    class="hover:bg-primary"
                >
                    <td>{ram.name}</td>
                    <td>$ {checkForNullPrice(ram.price)}</td>
                    <td>DDR{ram.speed[0]}</td>
                    <td>{ram.speed[1]} MHz</td>
                    <td>{ram.modules[0]} x {ram.modules[1]} GB</td>
                </tr>
            {:else}
                <tr>
                    <td>Loading...</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
