<script>
    import { onMount } from 'svelte';
    import { goBack, checkForNullPrice } from "$lib/configurationHelper.js";
    
    let cpuCoolers = [];
    
    onMount(async () => {
        const res = await fetch(`https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/cpu-cooler.json`);
        cpuCoolers = await res.json();
        cpuCoolers.length = 50; // reduce size to 50
    });
    
    function selectCpuCooler(name, price) {
        localStorage.setItem("cpuCoolerName", name);
        localStorage.setItem("cpuCoolerPrice", price);
    
        goBack("/pick-parts/");
    }

    function printCpuCoolerRpm(rpm) {
      if (rpm[0] !== null && rpm[1] !== null) {
        return rpm[0] + " - " + rpm[1] + " RPM";
      }
      return "";
    }

    </script>
    <div class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl" style="background:0;">
        <p class="text-2xl text-justify font-bold">Choose your CPU cooler</p>
    
        <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <!--<th>Fan Speed</th>-->
                <!--<th>Noise Level</th>-->
              </tr>
            </thead>
            <tbody>
              {#each cpuCoolers as cpuCooler}
                <tr on:click={() => selectCpuCooler(cpuCooler.name, checkForNullPrice(cpuCooler.price))} class="hover:bg-primary">
                  <td>{cpuCooler.name}</td>
                  <td>$ {checkForNullPrice(cpuCooler.price)}</td>
                  <!--<td>{printCpuCoolerRpm(cpuCooler.rpm)}</td>-->
                  <!--<td>{cpuCooler.noise_level}</td>-->
                </tr>
              {:else}
              <tr>
                <td>Loading...</td>
              </tr>
            {/each}
            </tbody>
          </table>
    </div>