<script lang="ts">
	import refresh_token from "$store/refresh_token";
	import { Auth } from "$lib/auth";

	$: auth = new Auth($refresh_token)
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Festival</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbar"
			aria-controls="navbar"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>

		<div class="collapse navbar-collapse" id="navbar">
			<ul class="navbar-nav ms-auto">
				<li class="nav-item">
					<a class="nav-link active" href="/"> Home </a>
				</li>
				{#if !auth.isLoggedIn()}
					<li class="nav-item">
						<a class="nav-link active" href="/login"> Login </a>
					</li>
				{/if}
				{#if auth.hasRoles()}
					<li class="nav-item">
						<a class="nav-link active" href="/order"> Order </a>
					</li>
				{/if}
				{#if auth.isAdmin()}
					<li class="nav-item">
						<a class="nav-link active" href="/users"> Users </a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" href="/products"> Products </a>
					</li>
				{/if}
				{#if auth.isLoggedIn()}
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="/"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							{auth.getUsername()}
						</a>
						<ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdown">
							<li><a class="dropdown-item" href="/">Profile</a></li>
							<li><hr class="dropdown-divider" /></li>
							<li><a class="dropdown-item" href="/">Logout</a></li>
						</ul>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</nav>
