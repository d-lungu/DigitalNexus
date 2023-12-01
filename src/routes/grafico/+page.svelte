

<div class="container mx-auto">
    <div class="text-5xl text-center py-8">
        Your Price Chart
    </div>
    <div class="text-center">
        If you are here it means that you have just built the PC of your dreams and that it works perfectly. <br>
         Below you can find the generalized graph of prices as a function of the total cost, <br>
         allowing you to observe which component is the most expensive and if you want to manage the price distribution better.
    </div>

      
      
    <canvas id="chart"></canvas>


      
    
</div>

<script>
    import Chart from 'chart.js/auto';

    import { onMount } from 'svelte';

    onMount(()  => {
        const ctx = document.getElementById('chart');
        const chart = new Chart(ctx, {
            //Type of the chart
            type: 'line', 
            data: {
                //labels on x-axis
                labels: [], 
                datasets: [{
                    //The label for the dataset which appears in the legend and tooltips.
                    label: 'Price',
                    //data for the line
                    data: [],
                    //styling of the chart
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    //make sure Y-axis starts at 0
                    y: {
                        beginAtZero: true
                    }
                },
            }
        });
    });

</script>

