<script>
    import { onMount, onDestroy } from 'svelte'
    import { browser } from '$app/environment'
    import StoresDataset from '$lib/assets/store_locations.json'

    let mapElement
    let map
    let storesData = StoresDataset.luoghi

    onMount(async () => {
        if (browser) {
            const leaflet = await import('leaflet')

            map = leaflet.map(mapElement).setView([41.9028, 12.4964], 5)

            leaflet
                .tileLayer(
                    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    {
                        attribution:
                            '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    }
                )
                .addTo(map)

            for (var i = 0; i < storesData.length; i++) {
                const coordinate = storesData[i].coordinate
                const name = storesData[i].nome
                leaflet
                    .marker([coordinate.latitudine, coordinate.longitudine])
                    .addTo(map)
                    .bindPopup(name)
            }
        }
    })

    onDestroy(async () => {
        if (map) {
            console.log('Unloading Leaflet map.')
            map.remove()
        }
    })
</script>

<main>
    <div bind:this={mapElement} style="height: 300px;width: 450px;"></div>
</main>

<style>
    @import 'leaflet/dist/leaflet.css';
</style>
