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
    let gpus = []

    onMount(async () => {
        original = gpus = await fetchEndpointData(datasetEndpoints.gpu)
    })

    function selectGpu(name, price) {
        localStorage.setItem('gpuName', name)
        localStorage.setItem('gpuPrice', price)

        goBack('/pick-parts/')
    }
</script>

<div
    class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl"
    style="background:0;"
>
    <p class="text-2xl text-justify font-bold">Choose your GPU</p>

    <div class="container flex items-center justify-center">
        <input
            type="search"
            bind:value={searchString}
            on:input={() => {
                gpus = original.filter((x) =>
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
                <th>Chipset</th>
                <th>Memory</th>
                <th>Core Clock</th>
                <th>Boost Clock</th>
                <th>Color</th>
                <th>Length</th>
            </tr>
        </thead>
        <tbody>
            {#each gpus as gpu}
                <tr
                    on:click={() =>
                        selectGpu(
                            gpu.name + ' ' + gpu.chipset,
                            checkForNullPrice(gpu.price)
                        )}
                    class="hover:bg-primary"
                >
                    <td>{gpu.name}</td>
                    <td>$ {checkForNullPrice(gpu.price)}</td>
                    <td>{gpu.chipset}</td>
                    <td>{gpu.memory} GB</td>
                    <td>{gpu.core_clock} MHz</td>
                    <td>{gpu.boost_clock} MHz</td>
                    <td>{gpu.color}</td>
                    <td>{gpu.length} mm</td>
                </tr>
            {:else}
                <tr>
                    <td>Loading...</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
