import {
  html,
  render,
  useState,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { Body } from "./Body.js";
import { getData } from "./Api.js";
import { Header } from "./Header.js";

// Parent component
function App() {
  const [data, setData] = useState([]);
    getData().then((d) => {
      console.log(d);
      setData(d);
    });

  // Uses header and body components
  return html`
      <${Header} sector="${data.saveData.currentSector}" oPoints="${data.saveData.organismPoints}"></${Header}>
      <${Body} sector="${data.saveData.currentSector}" organisms="${data.saveData.organisms}"></${Body}>
  `;
}

render(html` <${App}/> `, document.getElementById("app"));
