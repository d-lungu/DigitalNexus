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
    let cpuCoolers = []

    onMount(async () => {
        original = cpuCoolers = await fetchEndpointData(
            datasetEndpoints.cpucooler
        )
    })

    function selectCpuCooler(name, price) {
        localStorage.setItem('cpuCoolerName', name)
        localStorage.setItem('cpuCoolerPrice', price)

        goBack('/pick-parts/')
    }

    function printCpuCoolerRpm(rpm) {
        if (rpm[0] !== null && rpm[1] !== null) {
            return rpm[0] + ' - ' + rpm[1] + ' RPM'
        }
        return ''
    }
</script>

<div
    class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl"
    style="background:0;"
>
    <p class="text-2xl text-justify font-bold">Choose your CPU cooler</p>

    <div class="container flex items-center justify-center">
        <input
            type="search"
            bind:value={searchString}
            on:input={() => {
                cpuCoolers = original.filter((x) =>
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
                <!--<th>Fan Speed</th>-->
                <!--<th>Noise Level</th>-->
            </tr>
        </thead>
        <tbody>
            {#each cpuCoolers as cpuCooler}
                <tr
                    on:click={() =>
                        selectCpuCooler(
                            cpuCooler.name,
                            checkForNullPrice(cpuCooler.price)
                        )}
                    class="hover:bg-primary"
                >
                    <td>{cpuCooler.name}</td>
                    <td>$ {checkForNullPrice(cpuCooler.price)}</td>
                    <!--<td>{printCpuCoolerRpm(cpuCooler.rpm)}</td>-->
                    <!--<td>{cpuCooler.noise_level}</td>-->
                </tr>
            {:else}
                <div class="container flex flex-row">
                    <span class="loading loading-dots loading-xs"></span>
                </div>
            {/each}
        </tbody>
    </table>
</div>
