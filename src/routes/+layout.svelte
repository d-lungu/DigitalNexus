<script>
import '../app.css';


import MdiMagnify from 'virtual:icons/mdi/magnify';
import MdiCart from 'virtual:icons/mdi/cart';
import MdiAccountCircle from 'virtual:icons/mdi/account-circle';

let urlPcBuilding = "/pick-parts";
let urlFindUs = "/#find-us";
let urlAboutUs = "/about-us";
let urlCart = "/cart";
let urlLogin = "/login";

</script>

<div class="navbar"> <!-- aggiungere "sticky top-0" per ancorarla al top della pagina-->
	<!-- per mobile -->
  <div class="navbar-start">
    <div class="dropdown">
			<!-- hambuer menu -->
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul  class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				<li><a href={urlPcBuilding}>Build a PC</a></li>
        <li><a href={urlFindUs}>Find the nearest shop</a></li>
				<li><a href={urlAboutUs}>About us</a></li>
      </ul>
    </div>

		<!-- sia per PC che per mobile-->
    <a class="btn btn-ghost text-xl" href=".">DigitalNexus.</a> <!-- logo o solo testo?-->
  </div>
	
	<!-- per PC -->
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
			<li><a href={urlPcBuilding}>Configuration</a></li>
			<li><a href={urlFindUs}>Find the nearest shop</a></li>
			<li><a href={urlAboutUs}>About us</a></li>
    </ul>
  </div>
  <div class="navbar-end">
		<ul class="menu menu-horizontal px-1">
      <li><a href="."><MdiMagnify/></a></li> <!-- TODO: aggiungere link per Cerca -->
      <li><a href="{urlCart}"><MdiCart/></a></li>
			<li><a href="{urlLogin}"><MdiAccountCircle/></a></li>
    </ul>
  </div>
  
</div>

<slot />