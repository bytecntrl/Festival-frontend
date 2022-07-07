<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="container align-items-center mt-3">
	<form>
		<div class="form-group mb-3">
			<label for="UsernameInput">Username</label>
			<input
				type="text"
				class="form-control"
				id="UsernameInput"
				placeholder="Input your username"
				name="Username"
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
			/>
		</div>
		<button class="btn btn-primary">Login</button>
	</form>
</div>
