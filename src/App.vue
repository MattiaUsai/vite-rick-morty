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
  <titleComp></titleComp>
  <searchComp></searchComp>
  <div class="container">
    <div class="row">
      <cardCharacterComp
        class="cardCharacterComp"
        v-for="character in characterList"
        >{{ character.name }}</cardCharacterComp
      >
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  width: 1100px;
  margin: 0 auto;
  .row {
    padding: 30px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .cardCharacterComp {
      width: calc(100% / 4 - 20px);
      padding: 5px;
      margin: 5px;
    }
  }
}
</style>
