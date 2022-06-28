import axios from "axios";

export const getItems = () =>
  axios.get(
    "https://my-json-server.typicode.com/litofilho/carlos_filho_at_vue/items"
  );
export const getTypes = () =>
  axios.get(
    "https://my-json-server.typicode.com/litofilho/carlos_filho_at_vue/types"
  );
export const getItemById = (id) =>
  axios.get(
    `https://my-json-server.typicode.com/litofilho/carlos_filho_at_vue/items/${id}`
  );
export const createItem = (item) =>
  axios.put(
    "https://my-json-server.typicode.com/litofilho/carlos_filho_at_vue/items",
    item
  );
export const editItem = (item) =>
  axios.post(
    "https://my-json-server.typicode.com/litofilho/carlos_filho_at_vue/items",
    item
  );
export const deletItem = (id) =>
  axios.delete(
    `https://my-json-server.typicode.com/litofilho/carlos_filho_at_vue/items/${id}`
  );
