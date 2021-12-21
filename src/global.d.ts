/// <reference types="svelte" />

interface Window {
  ipc: {
    on: (event: string, callback: (event: any, ...args: any[]) => void) => void;
    send: (event: string, ...args: any[]) => void;
  };
}
