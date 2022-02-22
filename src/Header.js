import {
    html
  } from "https://unpkg.com/htm/preact/standalone.module.js";

  export function Header({ sector, oPoints, children }) {
      return html`
        <header>
            <h1>Current Sector: ${sector}</h1>
            <h2>Organism Points: ${oPoints}</h2>
        </header>
    `;
  }