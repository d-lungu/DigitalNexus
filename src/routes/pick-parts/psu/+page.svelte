<script>
    import { onMount } from 'svelte';
    import { goBack } from "$lib/configurationHelper.js";
    
    let psus = [];
    
    onMount(async () => {
        const res = await fetch(`https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/power-supply.json`);
        psus = await res.json();
        psus.length = 50; // reduce size to 50
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
                <tr on:click={() => selectPsu(psu.name, psu.price)} class="hover:bg-primary">
                  <td>{psu.name}</td>
                  <td>$ {psu.price}</td>
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