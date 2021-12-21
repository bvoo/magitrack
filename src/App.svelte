<script>
    import Searchbar from './components/Searchbar.svelte';
    import Search from './pages/Search.svelte';
    import Home from './pages/Home.svelte';
    import Wishlist from './pages/Wishlist.svelte';
    import Collection from './pages/Collection.svelte';

    let activePage = null;
    let activeView = 'home';

    function handleChange(e) {
        const { type, value } = e.detail;
        activeView = type;
        activePage = value;
        console.log("AWA: ", activeView, activePage);
    }
</script>

<Searchbar on:change={handleChange}/>

{#if activeView === 'search'}
    <Search />
{:else if activeView === 'home'}
    <Home />
{:else if activeView === 'wishlist'}
    <Wishlist />
{:else if activeView === 'collection'}
    <Collection />
{/if}

<!-- svelte-ignore css-unused-selector -->
<style lang="scss">

</style>
