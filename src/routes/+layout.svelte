<script>
	import '../app.css';
  import search from "$lib/assets/search.svg";
  import shopping_cart from "$lib/assets/shopping_cart.svg";
  import account_circle from "$lib/assets/account_circle.svg";
</script>

<div class="navbar"> <!-- aggiungere "sticky top-0" per ancorarla al top della pagina-->
	<!-- per mobile -->
  <div class="navbar-start">
    <div class="dropdown">
			<!-- hambuer menu -->
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/shop">Shop</a></li>
				<li><a href=".">Configuration</a></li> <!-- TODO: aggiungere link per Configuration -->
				<li><a href=".">Where we are</a></li> <!-- TODO: aggiungere link per Where we are -->
      </ul>
    </div>

		<!-- sia per PC che per mobile-->
    <a class="btn btn-ghost text-xl" href=".">DigitalNexus.</a> <!-- logo o solo testo?-->
  </div>
	
	<!-- per PC -->
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/shop">Shop</a></li>
			<li><a href=".">Configuration</a></li> <!-- TODO: aggiungere link per Configuration -->
			<li><a href=".">Where we are</a></li> <!-- TODO: aggiungere link per Where we are -->
    </ul>
  </div>
  <div class="navbar-end">
		<ul class="menu menu-horizontal px-1">
      <li><a href="."><img src={search} /></a></li> <!-- TODO: aggiungere link e immagine per Cerca -->
      <li><a href="."><img src={shopping_cart} /></a></li> <!-- TODO: aggiungere link e immagine per Carrello -->
			<li><a href="."><img src={account_circle}/></a></li> <!-- TODO: aggiungere link e immagine per Account -->
    </ul>
  </div>
</div>



<slot />