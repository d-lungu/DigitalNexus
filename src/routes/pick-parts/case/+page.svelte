<script>
    import { onMount } from 'svelte';
    import { goBack, checkForNullPrice } from "$lib/configurationHelper.js";
    
    let cases = [];
    
    onMount(async () => {
        const res = await fetch(`https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/case.json`);
        cases = await res.json();
        cases.length = 50; // reduce size to 50
    });
    
    function selectCase(name, price) {
        localStorage.setItem("caseName", name);
        localStorage.setItem("casePrice", price);
    
        goBack("/pick-parts/");
    }
    </script>
    <div class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl" style="background:0;">
        <p class="text-2xl text-justify font-bold">Choose your Case</p>
    
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
                <tr on:click={() => selectCase(_case.name, checkForNullPrice(_case.price))} class="hover:bg-primary">
                  <td>{_case.name}</td>
                  <td>$ {checkForNullPrice(_case.price)}</td>
                  <td>{_case.type}</td>
                  <td>{_case.color}</td>
                  <td>{_case.side_panel}</td>
                  <td>{_case.external_volume} L</td>
                </tr>
              {:else}
              <tr>
                <td>Loading...</td>
              </tr>
            {/each}
            </tbody>
          </table>
    </div>