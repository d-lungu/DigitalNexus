<script>
    import { onMount } from 'svelte';
    import { goBack } from "$lib/configurationHelper.js";
    
    let rams = [];
    
    onMount(async () => {
        const res = await fetch(`https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/memory.json`);
        rams = await res.json();
        rams.length = 50; // reduce size to 50
    });
    
    function selectRam(name, price) {
        localStorage.setItem("ramName", name);
        localStorage.setItem("ramPrice", price);
    
        goBack("/pick-parts/");
    }
    </script>
    <div class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl" style="background:0;">
        <p class="text-2xl text-justify font-bold">Choose your RAM</p>
    
        <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Type</th>
                <th>Speed</th>
                <th>Modules</th>
              </tr>
            </thead>
            <tbody>
              {#each rams as ram}
                <tr on:click={() => selectRam(ram.name, ram.price)} class="hover:bg-primary">
                  <td>{ram.name}</td>
                  <td>$ {ram.price.toFixed(2)}</td>
                  <td>DDR{ram.speed[0]}</td>
                  <td>{ram.speed[1]} MHz</td>
                  <td>{ram.modules[0]} x {ram.modules[1]} GB</td>
                </tr>
              {:else}
              <tr>
                <td>Loading...</td>
              </tr>
            {/each}
            </tbody>
          </table>
    </div>