<script>
import titleComp from "./components/title.vue";
import searchComp from "./components/searchComp.vue";
import cardCharacterComp from "./components/cardCharacterComp.vue";
export default {
  data() {},
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
  <cardCharacterComp></cardCharacterComp>
</template>
