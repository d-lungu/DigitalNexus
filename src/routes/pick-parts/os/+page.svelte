<script>
    import { onMount } from 'svelte';
    import { fetchEndpointData, goBack, checkForNullPrice, datasetEndpoints } from "$lib/configurationHelper.js";
    
    let oss = [];
    
    onMount(async () => {
        oss = await fetchEndpointData(datasetEndpoints.os);
    });
    
    function selectOs(name, price) {
        localStorage.setItem("osName", name);
        localStorage.setItem("osPrice", price);
    
        goBack("/pick-parts/");
    }

    </script>
    <div class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl" style="background:0;">
        <p class="text-2xl text-justify font-bold">Choose your Operating System</p>
    
        <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Max Memory</th>
              </tr>
            </thead>
            <tbody>
              {#each oss as os}
                <tr on:click={() => selectOs(os.name, checkForNullPrice(os.price))} class="hover:bg-primary">
                  <td>{os.name}</td>
                  <td>$ {checkForNullPrice(os.price)}</td>
                  <td>{os.mode}</td>
                  <td>{os.max_memory} GB</td>
                </tr>
              {:else}
              <tr>
                <td>Loading...</td>
              </tr>
            {/each}
            </tbody>
          </table>
    </div>