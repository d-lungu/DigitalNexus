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
    let cpus = []

    onMount(async () => {
        original = cpus = await fetchEndpointData(datasetEndpoints.cpu)
    })

    // function to change the CPU selection in local storage
    function selectCpu(name, price, tdp) {
        localStorage.setItem('cpuName', name)
        localStorage.setItem('cpuPrice', price)
        localStorage.setItem('cpuTdp', tdp.toFixed(2).toString())

        goBack('/pick-parts/')
    }
</script>

<div
    class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl"
    style="background:0;"
>
    <p class="text-2xl text-justify font-bold">Choose your CPU</p>

    <div class="container flex items-center justify-center">
        <input
            type="search"
            bind:value={searchString}
            on:input={() => {
                cpus = original.filter((x) =>
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
                <th>Core Count</th>
                <th>Core Clock</th>
                <th>Boost Clock</th>
                <th>TDP</th>
            </tr>
        </thead>
        <tbody>
            {#each cpus as cpu}
                {#if (sessionStorage.getItem('showUnkPriceItems') === 'false' && checkForNullPrice(cpu.price) !== 0) || sessionStorage.getItem('showUnkPriceItems') === 'true' || sessionStorage.getItem('showUnkPriceItems') === null}
                    <tr
                        on:click={() =>
                            selectCpu(
                                cpu.name,
                                checkForNullPrice(cpu.price),
                                cpu.tdp
                            )}
                        class="hover:bg-primary"
                    >
                        <td>{cpu.name}</td>
                        <td>$ {checkForNullPrice(cpu.price)}</td>
                        <td>{cpu.core_count}</td>
                        <td>{cpu.core_clock} GHz</td>
                        <td>{cpu.boost_clock} GHz</td>
                        <td>{cpu.tdp} W</td>
                    </tr>
                {/if}
            {:else}
                <div class="container flex flex-row">
                    <span class="loading loading-dots loading-xs"></span>
                </div>
            {/each}
        </tbody>
    </table>
</div>
