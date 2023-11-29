<script>

import { browser } from "$app/environment";
import MdiTrash from 'virtual:icons/mdi/trash';

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
    totalCost += parseFloat(getLocalStorage("cpuPrice"));
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
var isOsSelected = getLocalStorage("osName") !== null;

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

function startNew() {
    if (browser) {
        if (confirm("Are you sure you want to start new?")) {
            localStorage.clear();
            location.reload();
        }
    }
}

</script>

<div class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl">
    <!-- Title -->
    <div class="container flex flex-row m-auto items-center justify-center gap-x-4">
        <p class="text-2xl text-justify font-bold">Choose your parts</p>
        <div class="tooltip" data-tip="Start new...">
            <button class="btn" on:click={startNew}><MdiTrash /></button>
        </div>
    </div>
    <!--<p class="text-xl text-justify">Estimated Wattage: {estimatedWattage} W</p>-->

    <!-- Table header -->
    <div class="container flex flex-row text-center shadow font-bold">
        <div class="basis-1/4">Component</div>
        <div class="basis-1/4">Selection</div>
        <div class="basis-1/2">Price</div>
    </div>

    <!-- CPU Selection -->
    <div class="container flex flex-row text-center shadow">
        <div class="basis-1/4">CPU</div>
        <div class="basis-1/4">
            <a href="./pick-parts/cpu/">{isCpuSelected ? getLocalStorage("cpuName") : "Select"}</a>
        </div>
        <div class="basis-1/2">{isCpuSelected ? "$" + getLocalStorage("cpuPrice") : ""}</div>
    </div>

    <!-- CPU Cooler Selection -->
    <div class="container flex flex-row text-center shadow">
        <div class="basis-1/4">CPU Cooler</div>
        <div class="basis-1/4">
            <a href="./pick-parts/cpu-cooler/">{isCpuCoolerSelected ? getLocalStorage("cpuCoolerName") : "Select"}</a>
        </div>
        <div class="basis-1/2">{isCpuCoolerSelected ? "$" + getLocalStorage("cpuCoolerPrice") : ""}</div>
    </div>

    <!-- Mobo Selection -->
    <div class="container flex flex-row text-center shadow">
        <div class="basis-1/4">Motherboard</div>
        <div class="basis-1/4">
            <a href="./pick-parts/mobo/">{isMoboSelected ? getLocalStorage("moboName") : "Select"}</a>
        </div>
        <div class="basis-1/2">{isMoboSelected ? "$" + getLocalStorage("moboPrice") : ""}</div>
    </div>

    <!-- GPU Selection -->
    <div class="container flex flex-row text-center shadow">
        <div class="basis-1/4">GPU</div>
        <div class="basis-1/4">
            <a href="./pick-parts/gpu/">{isGpuSelected ? getLocalStorage("gpuName") : "Select"}</a>
        </div>
        <div class="basis-1/2">{isGpuSelected ? "$" + getLocalStorage("gpuPrice") : ""}</div>
    </div>

    <!-- RAM Selection -->
    <div class="container flex flex-row text-center shadow">
        <div class="basis-1/4">RAM</div>
        <div class="basis-1/4">
            <a href="./pick-parts/ram/">{isRamSelected ? getLocalStorage("ramName") : "Select"}</a>
        </div>
        <div class="basis-1/2">{isRamSelected ? "$" + getLocalStorage("ramPrice") : ""}</div>
    </div>

    <!-- Case Selection -->
    <div class="container flex flex-row text-center shadow">
        <div class="basis-1/4">Case</div>
        <div class="basis-1/4">
            <a href="./pick-parts/case/">{isCaseSelected ? getLocalStorage("caseName") : "Select"}</a>
        </div>
        <div class="basis-1/2">{isCaseSelected ? "$" + getLocalStorage("casePrice") : ""}</div>
    </div>

    <!-- Storage Selection -->
    <div class="container flex flex-row text-center shadow">
        <div class="basis-1/4">Storage</div>
        <div class="basis-1/4">
            <a href="./pick-parts/storage/">{isStorageSelected ? getLocalStorage("storageName") : "Select"}</a>
        </div>
        <div class="basis-1/2">{isStorageSelected ? "$" + getLocalStorage("storagePrice") : ""}</div>
    </div>

    <!-- PSU Selection -->
    <div class="container flex flex-row text-center shadow">
        <div class="basis-1/4">Power Supply</div>
        <div class="basis-1/4">
            <a href="./pick-parts/psu/">{isPsuSelected ? getLocalStorage("psuName") : "Select"}</a>
        </div>
        <div class="basis-1/2">{isPsuSelected ? "$" + getLocalStorage("psuPrice") : ""}</div>
    </div>

    <!-- OS Selection -->
    <div class="container flex flex-row text-center shadow">
        <div class="basis-1/4">Operating System</div>
        <div class="basis-1/4">
            <a href="./pick-parts/os/">{isOsSelected ? getLocalStorage("osName") : "Select"}</a>
        </div>
        <div class="basis-1/2">{isOsSelected ? "$" + getLocalStorage("osPrice") : ""}</div>
    </div>

    <!-- Results -->
    <div class="container flex flex-row text-center shadow">
        <div class="basis-1/2"></div>
        <div class="basis-1/2">Total: ${parseFloat(totalCost)}</div>
    </div>

    <div class="container flex flex-row text-center shadow">
        <div class="basis-1/2"></div>
        <div class="basis-1/2"><button class="btn">Add to cart</div>
    </div>
    
</div>