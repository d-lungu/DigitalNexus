<!--<a href="./pick-parts/"><button class="btn">Build a PC</button></a>-->

<script>
  import local_shipping from "$lib/assets/local_shipping.svg";
  import payments from "$lib/assets/payments.svg";
  import star from "$lib/assets/star.svg";
  import sell from "$lib/assets/sell.svg";

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
          <div class="card shadow-xl h-96 w-96">
            <figure>
              <MdiTruck class="h-36 w-36"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Insured Shipping</h2>
              <p>We rely on reliable partners, punctual and solid like GLS.</p>
            </div>
          </div>
          <div class="card shadow-xl h-96 w-96">
            <figure>
              <MdiCreditCardOutline class="h-36 w-36"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Secure Payments</h2>
              <p>Different payment methods for make your purchases simple</p>
            </div>
          </div>
          <div class="card shadow-xl h-96 w-96">
            <figure>
              <MdiStar class="h-36 w-36"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Satisfaction Guaranteed</h2>
              <p>Average rating of 4.8 out of over 55000 customers!</p>
            </div>
          </div>
          <div class="card shadow-xl h-96 w-96">
            <figure>
              <MdiTag class="h-36 w-36"/>
            </figure>
            <div class="card-body">
              <h2 class="card-title">Unbeatable Prices</h2>
              <p>For years we have been able to offer the best prices on the Italian market!</p>
            </div>
          </div>
        </div>
    </div>
  </main>
</div>
