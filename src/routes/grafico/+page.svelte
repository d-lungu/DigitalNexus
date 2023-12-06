

<div class="container mx-auto">
    <div class="text-5xl text-center py-8">
        Your Price Chart
    </div>
    <div class="text-center">
        If you are here it means that you have just built the PC of your dreams and that it works perfectly. <br>
         Below you can find the generalized graph of prices as a function of the total cost, <br>
         allowing you to observe which component is the most expensive and if you want to manage the price distribution better.
    </div>

      
      <div class="container mx-auto px-56 py-8">
        <canvas id="chart"></canvas>
      </div>
    <canvas id="chart"></canvas>

    <div class="text-center py-4">
        <a href="/pick-parts"><button class="btn">Return to configuration</button></a>
    </div>


      
    
</div>
            
<script>
import { browser } from "$app/environment";
import MdiTrash from 'virtual:icons/mdi/trash';
import {goBack, roundToTwoDigits, addItemToCart} from '$lib/configurationHelper.js';
import Chart from 'chart.js/auto';
import { onMount } from 'svelte';

function getLocalStorage(key) {
  if (browser) {
      return localStorage.getItem(key);
  }
  return null;
}

var totalCost = 0;
var estimatedWattage = 0;

var isCpuSelected = false;
var isCpuSelected = getLocalStorage("cpuName") !== null;
if (isCpuSelected) {
    totalCost += parseFloat(getLocalStorage("cpuPrice"));
}

var isCaseSelected = false;
var isCaseSelected = getLocalStorage("caseName") !== null;
if (isCaseSelected) {
    totalCost += parseFloat(getLocalStorage("casePrice"));
}

var isCpuCoolerSelected = false;
var isCpuCoolerSelected = getLocalStorage("cpuCoolerName") !== null;
if (isCpuCoolerSelected) {
    totalCost += parseFloat(getLocalStorage("cpuCoolerPrice"));
}

var isGpuSelected = false;
var isGpuSelected = getLocalStorage("gpuName") !== null;
if (isGpuSelected) {
    totalCost += parseFloat(getLocalStorage("gpuPrice"));
}

var isMoboSelected = false;
var isMoboSelected = getLocalStorage("moboName") !== null;
if (isMoboSelected) {
    totalCost += parseFloat(getLocalStorage("moboPrice"));
}

var isOsSelected = false;
var isOsSelected = getLocalStorage("osName") !== null
if (isOsSelected) {
    totalCost += parseFloat(getLocalStorage("osPrice"));
}

var isPsuSelected = false;
var isPsuSelected = getLocalStorage("psuName") !== null;
if (isPsuSelected) {
    totalCost += parseFloat(getLocalStorage("psuPrice"));
}

var isRamSelected = false;
var isRamSelected = getLocalStorage("ramName") !== null;
if (isRamSelected) {
    totalCost += parseFloat(getLocalStorage("ramPrice"));
}

var isStorageSelected = false;
var isStorageSelected = getLocalStorage("storageName") !== null;
if (isStorageSelected) {
    totalCost += parseFloat(getLocalStorage("storagePrice"));
}

var componentNames = ["CPU", "Case", "CPU Cooler", "GPU", "mobo", "OS", "PSU", "RAM", "Storage"];
var chartData = componentNames.map(name => {
    if (name === "CPU Cooler") {
        var price = parseFloat(getLocalStorage(`cpuCoolerPrice`)) || 0;
    }
    else{
    var price = parseFloat(getLocalStorage(`${name.toLowerCase()}Price`)) || 0;}
    totalCost += price;
    return price;
  });

  var maxPrice = Math.max(...chartData);

    

    onMount(()  => {
        const ctx = document.getElementById('chart');
        const chart = new Chart(ctx, {
            //Type of the chart
            type: 'bar', 
            data: {
                //labels on x-axis
                labels: componentNames, 
                datasets: [{
                    //The label for the dataset which appears in the legend and tooltips.
                    label: 'Price',
                    //data for the line
                    data: chartData,
                    //styling of the chart
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    //make sure Y-axis starts at 0
                    y: {
                        beginAtZero: true,
                        max: maxPrice * 1.05
                    }
                },
            }
        });
    });

</script>

