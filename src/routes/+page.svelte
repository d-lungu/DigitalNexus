<script>
  import MdiTruck from 'virtual:icons/mdi/truck';
  import MdiCreditCardOutline from 'virtual:icons/mdi/credit-card-outline';
  import MdiStar from 'virtual:icons/mdi/star';
  import MdiTag from 'virtual:icons/mdi/tag';
  import placeholder_map from '$lib/assets/placeholder_map.png'; // TODO: fare una vera mappa
</script>
<div class="container mx-auto flex items-center justify-center">
  <main class="my-8">
    <!-- riga con le "features" del sito -->
    <div class="container mx-auto flex items-center justify-center">
        <div class="container flex flex-col gap-x-8 md:flex-row md:gap-y-16 items-center justify-center">
          <div class="card card-side shadow-l h-64 w-96 p-8">
            <figure>
              <MdiTruck class="h-24 w-24"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Insured Shipping</h2>
              <p>We rely on reliable partners, punctual and solid like GLS.</p>
            </div>
          </div>
          <div class="card card-side shadow-l h-64 w-96 p-8">
            <figure>
              <MdiCreditCardOutline class="h-24 w-24"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Secure Payments</h2>
              <p>Different payment methods for make your purchases simple</p>
            </div>
          </div>
          <div class="card card-side shadow-l h-64 w-96 p-8">
            <figure>
              <MdiStar class="h-24 w-24"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Guaranteed Satisfaction</h2>
              <p>Average rating of 4.8 out of over 55000 customers!</p>
            </div>
          </div>
          <div class="card card-side shadow-l h-64 w-96 p-8">
            <figure>
              <MdiTag class="h-24 w-24"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Unbeatable Prices</h2>
              <p>For years we have been able to offer the best prices on the Italian market!</p>
            </div>
          </div>
        </div>
    </div>

    <div class="divider"></div> 

    <div class="container flex flex-col items-center justify-center gap-y-2">
      <div class="font-bold ">It's shopping time!</div>
      <div class="container mx-auto flex items-center justify-center gap-x-2">
        <a href="/pick-parts/cpu"><button class="btn">CPUs</button></a>
        <a href="/pick-parts/cpu-cooler"><button class="btn">CPU Coolers</button></a>
        <a href="/pick-parts/gpu"><button class="btn">GPUs</button></a>
        <a href="/pick-parts/mobo"><button class="btn">Motherboards</button></a>
        <a href="/pick-parts/ram"><button class="btn">RAM</button></a>
        <a href="/pick-parts/case"><button class="btn">Cases</button></a>
        <a href="/pick-parts/storage"><button class="btn">Storage</button></a>
        <a href="/pick-parts/psu"><button class="btn">Power Supply</button></a>
        <a href="/pick-parts/os"><button class="btn">Operating Systems</button></a>
      </div>
    </div>

    <div class="divider"></div> 

    <div class="container mx-auto flex items-center justify-center">
      <main class="container flex flex-col items-center justify-center">
          <p class="font-bold">Build your own PC!</p>
          <p>We provide part selection, pricing, and compatibility guidance for do-it-yourself computer builders.</p>
          <a href="/pick-parts"><button class="btn">Start your build</button></a>
      </main>
    </div>

    <div class="divider"></div> 

    <div id="find-us" class="container mx-auto flex items-center justify-center">
      <main class="container flex flex-col items-center justify-center">
          <p class="font-bold">Visit us</p>
          <p>We have more than 30 stores throughout Italy also open on weekends. Enter your address and find out which store is closest to you</p>
          <img src={placeholder_map} alt="map" />
      </main>
    </div>

    <div class="divider"></div> 

    <label class="form-control container mx-auto flex flex-col items-center justify-center">
      <div class="font-bold">
        Subscribe to the newsletter
      </div>
      <div>
        Receive a preview of many amazing offers on IT ed electronics! Enter your email here.
      </div>
      <label class="label cursor-pointer gap-x-2">
        <input type="checkbox" checked="checked" class="checkbox" />
        <span class="label-text">Accept the general conditions and the privacy policy</span> 
      </label>
      <div class="flex justify-center gap-x-2">
        <input type="text" placeholder="Type here your email..." class="input input-bordered w-full max-w-xs" />
        <button class="btn">Subscribe</button>
      </div>
    </label>
  </main>
</div>
