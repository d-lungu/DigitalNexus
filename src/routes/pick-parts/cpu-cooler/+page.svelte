<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    
    function goBack(defaultRoute = '/home') {
      const ref = document.referrer;
      goto(ref.length > 0 ? ref : defaultRoute)
    }
    
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
    </script>
    <div class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl" style="background:0;">
        <p class="text-2xl text-justify font-bold">Choose your CPU cooler</p>
    
        <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Fan Speed</th>
                <th>Noise Level</th>
              </tr>
            </thead>
            <tbody>
              {#each cpuCoolers as cpuCooler}
                <tr on:click={() => selectCpuCooler(cpuCooler.name, cpuCooler.price)} class="hover:bg-primary">
                  <td>{cpuCooler.name}</td>
                  <td>{"$" + cpuCooler.price}</td>
                  <td>{cpuCooler.rpm !== null ? cpuCooler.rpm[0] + " - " + cpuCooler.rpm[1] + " RPM" : ""}</td>
                  <td>{cpuCooler.noise_level}</td>
                </tr>
              {:else}
              <tr>
                <td>Loading...</td>
              </tr>
            {/each}
            </tbody>
          </table>
    </div>