<script>
    import { browser } from '$app/environment'
    import MdiTrash from 'virtual:icons/mdi/trash'
    import {
        goBack,
        roundToTwoDigits,
        addItemToCart,
    } from '$lib/configurationHelper.js'
    import PcConfigurationTableSelect from '$lib/components/PcConfigurationTableSelect.svelte'

    if (browser === null) {
        browser = typeof window !== 'undefined' ? true : null
    }

    // checks if the script is running on the client, and if it is, tries to obtain a certain local storage value
    function getLocalStorage(key) {
        if (browser) {
            return localStorage.getItem(key)
        }
        return null
    }

    // if script is running on the client and the user accepts the dialog, the local storage will be cleared
    function startNew() {
        if (
            browser &&
            confirm('Are you sure you want to start a new configuration?')
        ) {
            var tmpCartItems = localStorage.getItem('cartItems')
            localStorage.clear()
            if (tmpCartItems !== null && tmpCartItems !== 'null') {
                localStorage.setItem('cartItems', tmpCartItems)
            }
            location.reload()
        }
    }

    var totalCost = 0
    var estimatedWattage = 0

    var isCpuSelected = false
    var isCpuSelected = getLocalStorage('cpuName') !== null
    if (isCpuSelected) {
        totalCost += parseFloat(getLocalStorage('cpuPrice'))
    }

    var isCaseSelected = false
    var isCaseSelected = getLocalStorage('caseName') !== null
    if (isCaseSelected) {
        totalCost += parseFloat(getLocalStorage('casePrice'))
    }

    var isCpuCoolerSelected = false
    var isCpuCoolerSelected = getLocalStorage('cpuCoolerName') !== null
    if (isCpuCoolerSelected) {
        totalCost += parseFloat(getLocalStorage('cpuCoolerPrice'))
    }

    var isGpuSelected = false
    var isGpuSelected = getLocalStorage('gpuName') !== null
    if (isGpuSelected) {
        totalCost += parseFloat(getLocalStorage('gpuPrice'))
    }

    var isMoboSelected = false
    var isMoboSelected = getLocalStorage('moboName') !== null
    if (isMoboSelected) {
        totalCost += parseFloat(getLocalStorage('moboPrice'))
    }

    var isOsSelected = false
    var isOsSelected = getLocalStorage('osName') !== null
    if (isOsSelected) {
        totalCost += parseFloat(getLocalStorage('osPrice'))
    }

    var isPsuSelected = false
    var isPsuSelected = getLocalStorage('psuName') !== null
    if (isPsuSelected) {
        totalCost += parseFloat(getLocalStorage('psuPrice'))
    }

    var isRamSelected = false
    var isRamSelected = getLocalStorage('ramName') !== null
    if (isRamSelected) {
        totalCost += parseFloat(getLocalStorage('ramPrice'))
    }

    var isStorageSelected = false
    var isStorageSelected = getLocalStorage('storageName') !== null
    if (isStorageSelected) {
        totalCost += parseFloat(getLocalStorage('storagePrice'))
    }

    function addAllItemsToCart() {
        if (browser && getLocalStorage('cartItems') !== null) {
            if (
                !confirm(
                    'You already have items in your shopping cart. You will delete your old card contents if you proceed. Are you sure?'
                )
            ) {
                return
            }
        }
        localStorage.removeItem('cartItems')
        if (isCpuSelected)
            addItemToCart(
                getLocalStorage('cpuName'),
                getLocalStorage('cpuPrice')
            )
        if (isCaseSelected)
            addItemToCart(
                getLocalStorage('caseName'),
                getLocalStorage('casePrice')
            )
        if (isCpuCoolerSelected)
            addItemToCart(
                getLocalStorage('cpuCoolerName'),
                getLocalStorage('cpuCoolerPrice')
            )
        if (isGpuSelected)
            addItemToCart(
                getLocalStorage('gpuName'),
                getLocalStorage('gpuPrice')
            )
        if (isMoboSelected)
            addItemToCart(
                getLocalStorage('moboName'),
                getLocalStorage('moboPrice')
            )
        if (isOsSelected)
            addItemToCart(getLocalStorage('osName'), getLocalStorage('osPrice'))
        if (isPsuSelected)
            addItemToCart(
                getLocalStorage('psuName'),
                getLocalStorage('psuPrice')
            )
        if (isRamSelected)
            addItemToCart(
                getLocalStorage('ramName'),
                getLocalStorage('ramPrice')
            )
        if (isStorageSelected)
            addItemToCart(
                getLocalStorage('storageName'),
                getLocalStorage('storagePrice')
            )

        goBack('/cart')
    }

    $: showUnkPriceItems =
        sessionStorage.getItem('showUnkPriceItems') === 'true'
    $: {
        sessionStorage.setItem('showUnkPriceItems', showUnkPriceItems)
    }
</script>

<div
    class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl"
>
    <!-- Title -->
    <div
        class="container flex flex-row m-auto items-center justify-center gap-x-4"
    >
        <p class="text-2xl text-justify font-bold">Choose your parts</p>
        <div class="tooltip" data-tip="Start new...">
            <button class="btn" on:click={startNew}><MdiTrash /></button>
        </div>
    </div>
    <!--<p class="text-xl text-justify">Estimated Wattage: {estimatedWattage} W</p>-->
    <label>
        <input type="checkbox" bind:checked={showUnkPriceItems} />
        Show items with unknown price
    </label>

    <!-- Table header -->
    <div class="container flex flex-row text-center shadow font-bold">
        <div class="basis-1/4">Component</div>
        <div class="basis-1/4">Selection</div>
        <div class="basis-1/2">Price</div>
    </div>

    <!-- CPU Selection -->
    <PcConfigurationTableSelect
        isSelectedVariable={isCpuSelected}
        componentName="CPU"
        url="./pick-parts/cpu/"
        nameStorageVariableName="cpuName"
        priceStorageVariableName="cpuPrice"
    />

    <!-- CPU Cooler Selection -->
    <PcConfigurationTableSelect
        isSelectedVariable={isCpuCoolerSelected}
        componentName="CPU Cooler"
        url="./pick-parts/cpu-cooler/"
        nameStorageVariableName="cpuCoolerName"
        priceStorageVariableName="cpuCoolerPrice"
    />

    <!-- Mobo Selection -->
    <PcConfigurationTableSelect
        isSelectedVariable={isMoboSelected}
        componentName="Motherboard"
        url="./pick-parts/mobo/"
        nameStorageVariableName="moboName"
        priceStorageVariableName="moboPrice"
    />

    <!-- GPU Selection -->
    <PcConfigurationTableSelect
        isSelectedVariable={isGpuSelected}
        componentName="GPU"
        url="./pick-parts/gpu/"
        nameStorageVariableName="gpuName"
        priceStorageVariableName="gpuPrice"
    />

    <!-- RAM Selection -->
    <PcConfigurationTableSelect
        isSelectedVariable={isRamSelected}
        componentName="RAM"
        url="./pick-parts/ram/"
        nameStorageVariableName="ramName"
        priceStorageVariableName="ramPrice"
    />

    <!-- Case Selection -->
    <PcConfigurationTableSelect
        isSelectedVariable={isCaseSelected}
        componentName="Case"
        url="./pick-parts/case/"
        nameStorageVariableName="caseName"
        priceStorageVariableName="casePrice"
    />

    <!-- Storage Selection -->
    <PcConfigurationTableSelect
        isSelectedVariable={isStorageSelected}
        componentName="Storage"
        url="./pick-parts/storage/"
        nameStorageVariableName="storageName"
        priceStorageVariableName="storagePrice"
    />

    <!-- PSU Selection -->
    <PcConfigurationTableSelect
        isSelectedVariable={isPsuSelected}
        componentName="Power Supply"
        url="./pick-parts/psu/"
        nameStorageVariableName="psuName"
        priceStorageVariableName="psuPrice"
    />

    <!-- OS Selection -->
    <PcConfigurationTableSelect
        isSelectedVariable={isOsSelected}
        componentName="Operating System"
        url="./pick-parts/os/"
        nameStorageVariableName="osName"
        priceStorageVariableName="osPrice"
    />

    <!-- Results -->
    <div class="container flex flex-row text-center shadow">
        <div class="basis-1/2"></div>
        <div class="basis-1/2">Total: ${roundToTwoDigits(totalCost)}</div>
    </div>

    <!-- bottom buttons -->
    <div class="container flex flex-row text-center shadow">
        <div class="basis-1/2 py-8">
            <a href="/chart"><button class="btn"> Price Chart</button></a>
        </div>
        <div class="basis-1/2 py-8">
            <button class="btn" on:click={addAllItemsToCart}>Add to cart</button
            >
        </div>
    </div>
</div>
