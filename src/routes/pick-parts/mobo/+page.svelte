<script>
    import { onMount } from 'svelte';
    import { goBack, checkForNullPrice, datasetEndpoints } from "$lib/configurationHelper.js";
    
    let mobos = [];
    
    onMount(async () => {
        const res = await fetch(datasetEndpoints.mobo);
        mobos = await res.json();
        mobos.length = 50; // reduce size to 50
    });
    
    function selectMobo(name, price) {
        localStorage.setItem("moboName", name);
        localStorage.setItem("moboPrice", price);
    
        goBack("/pick-parts/");
    }
    </script>
    <div class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl" style="background:0;">
        <p class="text-2xl text-justify font-bold">Choose your Motherboard</p>
    
        <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Socket</th>
                <th>Form Factor</th>
                <th>Max Memory</th>
                <th>Memory Slots</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {#each mobos as mobo}
                <tr on:click={() => selectMobo(mobo.name, checkForNullPrice(mobo.price))} class="hover:bg-primary">
                  <td>{mobo.name}</td>
                  <td>$ {checkForNullPrice(mobo.price)}</td>
                  <td>{mobo.socket}</td>
                  <td>{mobo.form_factor}</td>
                  <td>{mobo.max_memory} GB</td>
                  <td>{mobo.memory_slots}</td>
                  <td>{mobo.color}</td>
                </tr>
              {:else}
              <tr>
                <td>Loading...</td>
              </tr>
            {/each}
            </tbody>
          </table>
    </div>