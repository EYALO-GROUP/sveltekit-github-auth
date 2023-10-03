<script lang="ts">
	import { goto } from "$app/navigation";

	function loginWithGithub() {
		goto('/auth/login');
	}
</script>

<div class="counter">
	<div class="counter-viewport">
		<button on:click|preventDefault={loginWithGithub} aria-label="Decrease the counter by one">
			Login with Github
		</button>
	</div>
</div>

<style>
	.counter button {
		padding-left: 7px;
		padding-right: 7px;
		padding-top: 3px;
		padding-bottom: 3px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 25px;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 1.5rem;
	}

	.counter button:hover {
		background-color: var(--color-bg-1);
		cursor: pointer;
	}

</style>
