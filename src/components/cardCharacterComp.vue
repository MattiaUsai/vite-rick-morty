<script>
export default {
  name: "cardCharacter",
  props: {
    name: String,
    image: String,
    status: String,
    species: String,
  },
};
</script>
<template>
  <div class="card">
    <img :src="image" alt="" />
    <h3>{{ name }}</h3>
    <p>{{ status }}</p>
    <p>{{ species }}</p>
  </div>
</template>
<style scoped lang="scss">
.card {
  text-align: center;
  padding: 20px;
  img {
    border-radius: 100%;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2),
      0 5px 10px 0 rgba(0, 0, 0, 0.19);
  }
  h3 {
    margin: 10px 0 40px 0;
  }
}
</style>
