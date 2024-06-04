<script>
import titleComp from "./components/title.vue";
import searchComp from "./components/searchComp.vue";
import cardCharacterComp from "./components/cardCharacterComp.vue";
import list from "./rickandmorty.json";
export default {
  data() {
    return {
      characterList: list.results,
    };
  },

  components: {
    titleComp,
    searchComp,
    cardCharacterComp,
  },
};
</script>

<template>
  <header>
    <titleComp></titleComp>
    <searchComp></searchComp>
  </header>

  <div class="container">
    <div class="row">
      <cardCharacterComp
        class="cardCharacterComp"
        v-for="character in characterList"
        :name="character.name"
        :image="character.image"
        :status="character.status"
        :species="character.species"
      >
      </cardCharacterComp>
    </div>
  </div>
</template>
<style scoped lang="scss">
header {
  text-align: center;
}
titleComp {
  margin: 20px;
}
.container {
  width: 1100px;
  margin: 0 auto;
  .row {
    padding: 30px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .cardCharacterComp {
      width: calc(100% / 4 - 10px);

      margin: 5px;
    }
  }
}
</style>
