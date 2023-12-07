<!-- mockup login page -->
<div class="container mx-auto flex items-center justify-center">
    <main class="my-10">
        <div class="card shrink-0 shadow-2xl bg-base-100">
            <div class="card-title">Login to your account</div>
            <form class="card-body">
                <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        class="input input-bordered"
                        required
                    />
                </div>
                <div class="form-control">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        class="input input-bordered"
                        required
                    />
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label class="label">
                        <!-- svelte-ignore a11y-invalid-attribute -->
                        <a href="#" class="label-text-alt link link-hover"
                            >Have you forgot your password?</a
                        >
                    </label>
                </div>
                <div class="form-control mt-6">
                    <button class="btn btn-primary">Login</button>
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a href="#">Sign-up</a>
                </div>
            </form>
        </div>
    </main>
</div>
