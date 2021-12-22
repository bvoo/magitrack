<script>
import QuickSearchBar from "./QuickSearchBar.svelte";

const onPick = e => selectedOption = e.detail;

import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

export const optionClicked = page => dispatch('change', page);

const options = [
    {label: "Search", type: "search"},
    {label: "Home", type: "home"},
    {label: "Wishlist", type: "wishlist"},
    {label: "Collection", type: "collection"},
];

let selectedOption;
</script>
<QuickSearchBar {options} on:pick={onPick} keys={['label']} on:pick={() => optionClicked({ type: selectedOption.type, value: 'switch' })}/>