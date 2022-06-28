import { defineComponent } from "vue";
import axios from "axios";
import { getItems } from "../services/services";

const Biblioteca = defineComponent({
  data() {
    return {
      items: [],
    };
  },
  created() {
    getItems().then((res) => (this.items = res.data));
  },
  methods: {
    getItems() {
      axios
        .get(
          "https://my-json-server.typicode.com/litofilho/carlos_filho_at_vue/db"
        )
        .then((res) => console.log(res.data));
    },
  },
  render() {
    return (
      <table>
        <thead>
          <th>Título</th>
          <th>Autor</th>
          <th>Ano</th>
          <th>Edição</th>
          <th>Tipo</th>
        </thead>
        <tbody>
          {this.items.length > 0 &&
            this.items.map((item) => (
              <tr>
                <th>{item.title}</th>
                <th>{item.author}</th>
                <th>{item.year}</th>
                <th>{item.edition}</th>
                <th>{item.type}</th>
              </tr>
            ))}
        </tbody>
      </table>
    );
  },
});

export default Biblioteca;
