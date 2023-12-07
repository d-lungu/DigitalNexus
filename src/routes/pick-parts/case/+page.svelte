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
    let cases = []

    onMount(async () => {
        original = cases = await fetchEndpointData(datasetEndpoints.case)
    })

    function selectCase(name, price) {
        localStorage.setItem('caseName', name)
        localStorage.setItem('casePrice', price)

        goBack('/pick-parts/')
    }
</script>

<div
    class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl"
    style="background:0;"
>
    <p class="text-2xl text-justify font-bold">Choose your Case</p>

    <div class="container flex items-center justify-center">
        <input
            type="search"
            bind:value={searchString}
            on:input={() => {
                cases = original.filter((x) =>
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
                <th>Color</th>
                <th>Side Panel</th>
                <th>Volume</th>
            </tr>
        </thead>
        <tbody>
            {#each cases as _case}
                <tr
                    on:click={() =>
                        selectCase(_case.name, checkForNullPrice(_case.price))}
                    class="hover:bg-primary"
                >
                    <td>{_case.name}</td>
                    <td>$ {checkForNullPrice(_case.price)}</td>
                    <td>{_case.type}</td>
                    <td>{_case.color}</td>
                    <td>{_case.side_panel}</td>
                    <td>{_case.external_volume} L</td>
                </tr>
            {:else}
                <div class="container flex flex-row">
                    <span class="loading loading-dots loading-xs"></span>
                </div>
            {/each}
        </tbody>
    </table>
</div>
