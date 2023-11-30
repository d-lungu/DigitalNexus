<!--<a href="./pick-parts/"><button class="btn">Build a PC</button></a>-->

<script>
  import MdiTruck from 'virtual:icons/mdi/truck';
  import MdiCreditCardOutline from 'virtual:icons/mdi/credit-card-outline';
  import MdiStar from 'virtual:icons/mdi/star';
  import MdiTag from 'virtual:icons/mdi/tag';
</script>
<div class="container mx-auto flex items-center justify-center">
  <main class="my-10">
    <!-- riga con le "features" del sito -->
    <div class="container mx-auto flex items-center justify-center">
        <div class="container flex flex-col gap-x-16 md:flex-row md:gap-y-16 items-center justify-center">
          <div class="card shadow-xl h-76 w-76">
            <figure>
              <MdiTruck class="h-16 w-16"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Insured Shipping</h2>
              <p>We rely on reliable partners, punctual and solid like GLS.</p>
            </div>
          </div>
          <div class="card shadow-xl h-76 w-76">
            <figure>
              <MdiCreditCardOutline class="h-16 w-16"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Secure Payments</h2>
              <p>Different payment methods for make your purchases simple</p>
            </div>
          </div>
          <div class="card shadow-xl h-64 w-76">
            <figure>
              <MdiStar class="h-16 w-16"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Satisfaction Guaranteed</h2>
              <p>Average rating of 4.8 out of over 55000 customers!</p>
            </div>
          </div>
          <div class="card shadow-xl h-76 w-76">
            <figure>
              <MdiTag class="h-16 w-16"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Unbeatable Prices</h2>
              <p>For years we have been able to offer the best prices on the Italian market!</p>
            </div>
          </div>
        </div>
    </div>

    <div class="divider"></div> 

    <div class="container mx-auto flex items-center justify-center">
      <main class="container flex flex-col items-center justify-center">
          <p class="font-bold">Build your own PC!</p>
          <p>We provide part selection, pricing, and compatibility guidance for do-it-yourself computer builders.</p>
          <button class="btn">Start your build</button>
      </main>
    </div>

    <div class="divider"></div> 

    <div id="find-us" class="container mx-auto flex items-center justify-center">
      <main class="container flex flex-col items-center justify-center">
          <p class="font-bold">Visit us</p>
          <p>We have more than 30 stores throughout Italy also open on weekends. Enter your address and find out which store is closest to you</p>
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
      <label class="label cursor-pointer">
        <input type="checkbox" checked="checked" class="checkbox" />
        <span class="label-text"> Accept the general conditions and the privacy policy</span> 
      </label>
      <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    </label>
  </main>
</div>
