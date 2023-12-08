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
    let storages = []

    onMount(async () => {
        original = storages = await fetchEndpointData(datasetEndpoints.storage)
    })

    function selectStorage(name, price) {
        localStorage.setItem('storageName', name)
        localStorage.setItem('storagePrice', price)

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
                storages = original.filter((x) =>
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
                <th>Capacity</th>
                <th>Type</th>
                <th>Form Factor</th>
                <th>Interface</th>
            </tr>
        </thead>
        <tbody>
            {#each storages as storage}
                {#if (sessionStorage.getItem('showUnkPriceItems') === 'false' && checkForNullPrice(storage.price) !== 0) || sessionStorage.getItem('showUnkPriceItems') === 'true' || sessionStorage.getItem('showUnkPriceItems') === null}
                    <tr
                        on:click={() =>
                            selectStorage(
                                storage.name,
                                checkForNullPrice(storage.price)
                            )}
                        class="hover:bg-primary"
                    >
                        <td>{storage.name}</td>
                        <td>{checkForNullPrice(storage.price)}</td>
                        <td>{storage.capacity} MB</td>
                        <td>{storage.type}</td>
                        <td>{storage.form_factor}</td>
                        <td>{storage.interface}</td>
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
