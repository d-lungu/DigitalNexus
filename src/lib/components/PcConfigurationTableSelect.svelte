<script>
    export let isSelectedVariable
    export let componentName
    export let url
    export let nameStorageVariableName
    export let priceStorageVariableName

    function getLocalStorage(key) {
        if (typeof window !== 'undefined' ? true : null) {
            return localStorage.getItem(key)
        }
        return null
    }
</script>

<div class="container flex flex-row text-center shadow">
    <div class="basis-1/4">{componentName}</div>
    <div class="basis-1/4">
        <a href={url}
            >{isSelectedVariable
                ? getLocalStorage(nameStorageVariableName)
                : 'Select'}</a
        >
    </div>
    <div class="basis-1/2">
        {isSelectedVariable
            ? '$' + getLocalStorage(priceStorageVariableName)
            : ''}
    </div>
</div>
