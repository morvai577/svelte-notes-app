/* eslint-disable import/no-named-as-default */
import './app.postcss';
import App from './App.svelte';

const app = new App({
	target: document.getElementById('app'),
});

export default app;
