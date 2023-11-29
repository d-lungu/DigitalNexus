<script>
	import { page } from '$app/stores';
</script>
<div class="container mx-auto flex items-center justify-center flex-col">
    <p class="text-2xl text-justify font-bold">Error {$page.status}</p>
    <p>{$page.error.message}</p>
    <a href=".">Go to the homepage</a>
</div>