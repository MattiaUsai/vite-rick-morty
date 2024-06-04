import { reactive } from "vue";
import list from "./rickandmorty.json";

export const store = reactive({
  APIurl: "https://rickandmortyapi.com/api/character",
  ApiCall: {},
});
