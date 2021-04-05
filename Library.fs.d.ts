import { Readable } from "svelte/store";

export function makeStore(): [Readable<{
    Name: string,
}>, /* SvelteStore.IDispatcher`1 */ any];