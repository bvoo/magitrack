<script>
  export let card;
</script>

<div class="card">
  <!-- <span>{card.name}</span> -->
  <img src={card.imageUrl} alt={card.name} />
</div>

<style lang="scss">
  .card {
    position: relative;
    width: 220px;
    height: 300px;

    img {
      position: relative;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;
    }
  }
</style>
