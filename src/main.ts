import App from './App.svelte';

// Necessary to preview the app in browser
if (window.ipc === undefined) {
  window.ipc = {
    on: (event: string, callback: (event: any, ...args: any[]) => void) => {},
    send: (event: string, ...args: any[]) => {}
  };
}

const app = new App({
  target: document.body
});

export default app;
