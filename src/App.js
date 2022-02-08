import {
  html,
  render,
} from "https://unpkg.com/htm/preact/standalone.module.js";

function App() {
  return html`
      An example Preact starter without webpack.
  `;
}

render(html` <${App}/> `, document.getElementById("app"));
