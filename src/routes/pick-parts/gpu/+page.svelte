<script>
    import { onMount } from 'svelte';
    import { goBack } from "$lib/configurationHelper.js";
    
    let gpus = [];
    
    onMount(async () => {
        const res = await fetch(`https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/video-card.json`);
        gpus = await res.json();
        gpus.length = 50; // reduce size to 50
    });
    
    function selectGpu(name, price) {
        localStorage.setItem("gpuName", name);
        localStorage.setItem("gpuPrice", price);
    
        goBack("/pick-parts/");
    }
    </script>
    <div class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl" style="background:0;">
        <p class="text-2xl text-justify font-bold">Choose your GPU</p>
    
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
                <tr on:click={() => selectGpu(gpu.name+" "+gpu.chipset, gpu.price)} class="hover:bg-primary">
                  <td>{gpu.name}</td>
                  <td>$ {gpu.price.toFixed(2)}</td>
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