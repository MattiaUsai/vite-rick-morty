import { reactive } from "vue";

export const store = reactive({
  APIurl: "https://rickandmortyapi.com/api/character",
  ApiCall: {},
  listCharacter: [],
});
