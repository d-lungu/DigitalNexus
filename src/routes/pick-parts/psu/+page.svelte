<script>
    import { onMount } from 'svelte';
    import { fetchEndpointData, goBack, checkForNullPrice, datasetEndpoints } from "$lib/configurationHelper.js";
    
    let psus = [];
    
    onMount(async () => {
        psus = await fetchEndpointData(datasetEndpoints.psu);
    });
    
    function selectPsu(name, price) {
        localStorage.setItem("psuName", name);
        localStorage.setItem("psuPrice", price);
    
        goBack("/pick-parts/");
    }
    </script>
    <div class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl" style="background:0;">
        <p class="text-2xl text-justify font-bold">Choose your Power Supply</p>
    
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
                <tr on:click={() => selectPsu(psu.name, checkForNullPrice(psu.price))} class="hover:bg-primary">
                  <td>{psu.name}</td>
                  <td>$ {checkForNullPrice(psu.price)}</td>
                  <td>{psu.type}</td>
                  <td>{psu.efficiency}</td>
                  <td>{psu.wattage} W</td>
                  <td>{psu.modular}</td>
                </tr>
              {:else}
              <tr>
                <td>Loading...</td>
              </tr>
            {/each}
            </tbody>
          </table>
    </div>