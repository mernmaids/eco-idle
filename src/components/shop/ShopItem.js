import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

export function ShopItem({itemdata}) {
    return html`
        <div class="w-full bg-dark-green p-5 detail-inner">
            <h2 class="text-center text-2xl mb-3">${itemdata.name}</h2>
            <p>${itemdata.description}</p>
            <br/>
            <p><i>${itemdata.effect.value} to ${itemdata.effect.stat}</i></p>
            <br/>
            <div class="text-center">
                <button class="bg-light-blue-darken-hover p-3 border-2 border-black rounded">Buy (${itemdata.cost} points)</button>
            </div>
        </div>
    `;
}