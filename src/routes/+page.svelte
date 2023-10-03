<script>
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import Button from './Button.svelte';

	function logout() {
		goto('/auth/logout');
	}

	onMount(() => {
		console.log($page.data);
	})
</script>

<svelte:head>
	<title>Home {$page.data.user?.login || ''}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			SvelteKit GitHub Authentication
		</span>
	</h1>

	<h2>
		{$page.data.user?.login ? 'you\'re logged !' : 'click to sign in with Github'}
	</h2>

	{#if !$page.data.user?.login}
		<Button />		
	{:else}
		<div>
			<h1>Hello {$page.data.user?.login}!</h1>
			<button on:click|preventDefault={logout}>Log out</button>
		</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
</style>
