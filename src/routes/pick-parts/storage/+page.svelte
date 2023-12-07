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
            {:else}
                <tr>
                    <td>Loading...</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
