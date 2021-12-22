<script>
  import * as scryfall from 'scryfall';
  import Scale from 'svelte-material-icons/Scale.svelte';
  import Card from '../components/Card.svelte';

  let searchValue = '';
  let card = {};
  const c = {
    name: 'based',
    imageUrl:
      'https://images-ext-2.discordapp.net/external/wqqZ-PDcqJPCyimxzC9f-oYWORcK1pkNQNIUgv5DO-0/%3F1635451745/https/c1.scryfall.com/file/scryfall-cards/png/front/7/a/7ae6380e-b1b6-4a5a-a8d9-7cdf8eab3557.png?width=484&height=676'
  };
  let cards = [c, c, c, c, c, c, c, c, c, c, c];

  async function onClick() {
    let res = await searchCard(searchValue).then(card => {
      console.log('card: ', card);
      return card;
    });
    return res;
  }

  /**
   * @typedef {Object} Card
   * @property {string} name
   * @property {string} imageUrl
   */

  /**
   * Map a card response to a card object
   * @param {Object} response The card response
   * @returns {Card} The card object
   */
  function mapCard(response) {
    return {
      name: response.name,
      imageUrl: response.image_uris.png
    };
  }

  async function searchCard(cardName) {
    try {
      let data = await scryfall.autocomplete(cardName);
      console.log('search:', data);

      for (let i = 0; i < data.length; i++) {
        const search = await getCardByName(data[i]);
        console.log('AWAWAWAA: ', search);
        cards.push(mapCard(search));
        await new Promise(resolve => setTimeout(resolve, 200));
      }

      cards = cards;
    } catch (err) {
      console.log('search error:', err);
    }
  }

  async function getCardByName(cardName) {
    try {
      return await scryfall.getCardByName(cardName, { fuzzy: true });
    } catch (err) {
      console.log('get error:', err); // undefined sadge
      return {};
    }
  }
</script>

<section class="flex-column">
  <h1>Search</h1>
  <span>{searchValue}</span>
  <div class="flex-row search">
    <input
      bind:value={searchValue}
      type="search"
      id="search"
      placeholder="Carrion Feeder"
    />
    <button on:click={onClick}>
      <Scale size="1em" />
    </button>
  </div>

  <div class="scroller">
    <div class="card-grid">
      {#each cards as card}
        <Card {card} />
      {/each}
    </div>
  </div>

  <div class="spacer" />
</section>

<style lang="scss">
  section,
  section > div {
    margin: auto;
    width: 80%;
    height: 100%;
  }

  .spacer {
    height: 100px;
  }
  .card-grid {
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(220px, 1fr)
    );
    grid-gap: 20px;
    grid-auto-rows: auto;

    place-items: center;
  }
  .search {
    flex-grow: 0;
    height: fit-content;
  }
</style>
