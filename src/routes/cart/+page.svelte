<script>
    import MdiTrash from 'virtual:icons/mdi/trash';
    import {goBack} from '$lib/configurationHelper.js';

    var tmpCartItems = localStorage.getItem("cartItems");
    var cartItems = [];
    if (tmpCartItems !== null) {
        cartItems = JSON.parse(tmpCartItems);
    }

    function startNew() {
    if (browser && confirm("Are you sure you want to start to empty your shopping cart?")) {
        localStorage.removeItem("cartItems");
        goBack("/pick-parts/");
    }
}
</script>

<div class="container flex flex-col mx-auto px-2 items-center justify-center gap-y-2 shadow-xl" style="background:0;">
    {#if cartItems.length > 0}
    <div class="container flex flex-row m-auto items-center justify-center gap-x-4">
        <p class="text-2xl text-justify font-bold">Your shopping cart</p>
        <div class="tooltip" data-tip="Start new...">
            <button class="btn" on:click={startNew}><MdiTrash /></button>
        </div>
    </div>
    <table class="table">
        <thead>
          <tr>
            <th>Item name</th>
            <th>Item price</th>
          </tr>
        </thead>
        <tbody>
          {#each cartItems as item}
            <tr class="hover:bg-primary">
              <td>{item[0]}</td>
              <td>$ {item[1]}</td>
            </tr>
          {:else}
          <tr>
            <td>Loading...</td>
          </tr>
        {/each}
        </tbody>
      </table>
    {:else}
        <p class="text-2xl text-justify font-bold">Your shopping cart is empty!</p>
    {/if}
</div>