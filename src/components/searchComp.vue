<script>
export default {
  name: "search",
};
</script>
<template>
  <div class="searchBar">
    <input type="text" placeholder="search character" />
    <select name="selectStatus" id="">
      <option value="">Select Status</option>
      <option value="">Alive</option>
      <option value="">Unknow</option>
      <option value="">Dead</option>
    </select>
    <button class="search">Search</button>
    <button class="reset">Reset</button>
  </div>
</template>
<style scoped lang="scss">
@use "../scss/partials/variables.scss" as *;

.searchBar {
  margin-top: 20px;
  input {
    @include buttonStyle;
  }
  select {
    @include buttonStyle;
  }
  button {
    @include buttonStyle;
    &.reset {
      background-color: rgb(212, 194, 0);
    }
    &.search {
      background-color: rgb(0, 74, 212);
      color: white;
    }
  }
}
</style>
