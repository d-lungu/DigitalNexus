<script>
    import { onMount } from 'svelte';
    import { goBack } from "$lib/configurationHelper.js";
    
    let storages = [];
    
    onMount(async () => {
        const res = await fetch(`https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/internal-hard-drive.json`);
        storages = await res.json();
        storages.length = 50; // reduce size to 50
    });
    
    function selectStorage(name, price) {
        localStorage.setItem("storageName", name);
        localStorage.setItem("storagePrice", price);
    
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
                <th>Capacity</th>
                <th>Type</th>
                <th>Form Factor</th>
                <th>Interface</th>
              </tr>
            </thead>
            <tbody>
              {#each storages as storage}
                <tr on:click={() => selectStorage(storage.name, storage.price)} class="hover:bg-primary">
                  <td>{storage.name}</td>
                  <td>{storage.price}</td>
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