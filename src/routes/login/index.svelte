<script lang="ts">
	import { goto } from '$app/navigation'

	import { login } from "$lib/auth"


	let user = {
		"username": "",
		"password": ""
	}
	let error = ""

	async function submit() {
		let r = await login(user.username, user.password)
		if (r.error) {
			error = r.message
			user.username = ""
			user.password = ""
		}
		else {
			goto("/")
		}
	}
</script>


<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="container align-items-center mt-3">
	{#if error}
		<div class="alert alert-danger">{error}</div>
	{/if}
	<form on:submit|preventDefault="{submit}">
		<div class="form-group mb-3">
			<label for="UsernameInput">Username</label>
			<input
				type="text"
				class="form-control"
				id="UsernameInput"
				placeholder="Input your username"
				name="Username"
				bind:value="{user.username}"
			/>
		</div>
		<div class="form-group mb-3">
			<label for="PasswordInput">Password</label>
			<input
				type="password"
				class="form-control"
				id="PasswordInput"
				placeholder="Input your password"
				name="Password"
				bind:value="{user.password}"
			/>
		</div>
		<button class="btn btn-primary">Login</button>
	</form>
</div>
