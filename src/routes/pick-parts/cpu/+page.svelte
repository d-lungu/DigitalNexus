<script>
import { onMount } from 'svelte';
import { goto } from '$app/navigation';

function goBack(defaultRoute = '/home') {
  const ref = document.referrer;
  goto(ref.length > 0 ? ref : defaultRoute)
}

let cpus = [];

onMount(async () => {
	const res = await fetch(`https://raw.githubusercontent.com/docyx/pc-part-dataset/main/data/json/cpu.json`);
	cpus = await res.json();
	cpus.length = 50; // reduce size to 50
});

// function to change the CPU selection in local storage
function selectCpu(name, price, tdp) {
	localStorage.setItem("cpuName", name);
	localStorage.setItem("cpuPrice", price);
	localStorage.setItem("cpuTdp", tdp.toFixed(2).toString());

	goBack("/pick-parts/");
}
</script>
<div class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl" style="background:0;">
	<p class="text-2xl text-justify font-bold">Choose your CPU</p>

	<table class="table">
		<thead>
		  <tr>
			<th>Name</th>
			<th>Price</th>
			<th>Core Count</th>
			<th>Core Clock</th>
			<th>Boost Clock</th>
			<th>TDP</th>
		  </tr>
		</thead>
		<tbody>
		  {#each cpus as cpu}
			<tr on:click={() => selectCpu(cpu.name, cpu.price, cpu.tdp)} class="hover:bg-primary">
			  <td>{cpu.name}</td>
			  <td>{"$" + cpu.price.toFixed(2)}</td>
			  <td>{cpu.core_count}</td>
			  <td>{cpu.core_clock + " GHz"}</td>
			  <td>{cpu.boost_clock + " GHz"}</td>
			  <td>{cpu.tdp + " W"}</td>
			</tr>
		  {:else}
		  <tr>
			<td>Loading...</td>
		  </tr>
		{/each}
		</tbody>
	  </table>
</div>