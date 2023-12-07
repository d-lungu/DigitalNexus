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
    let psus = []

    onMount(async () => {
        original = psus = await fetchEndpointData(datasetEndpoints.psu)
    })

    function selectPsu(name, price) {
        localStorage.setItem('psuName', name)
        localStorage.setItem('psuPrice', price)

        goBack('/pick-parts/')
    }
</script>

<div
    class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl"
    style="background:0;"
>
    <p class="text-2xl text-justify font-bold">Choose your Power Supply</p>

    <div class="container flex items-center justify-center">
        <input
            type="search"
            bind:value={searchString}
            on:input={() => {
                psus = original.filter((x) =>
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
                <th>Efficiency</th>
                <th>Wattage</th>
                <th>Modular</th>
            </tr>
        </thead>
        <tbody>
            {#each psus as psu}
                <tr
                    on:click={() =>
                        selectPsu(psu.name, checkForNullPrice(psu.price))}
                    class="hover:bg-primary"
                >
                    <td>{psu.name}</td>
                    <td>$ {checkForNullPrice(psu.price)}</td>
                    <td>{psu.type}</td>
                    <td>{psu.efficiency}</td>
                    <td>{psu.wattage} W</td>
                    <td>{psu.modular}</td>
                </tr>
            {:else}
                <div class="container flex flex-row">
                    <span class="loading loading-dots loading-xs"></span>
                </div>
            {/each}
        </tbody>
    </table>
</div>
