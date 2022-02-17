import {
  html,
} from "https://unpkg.com/htm/preact/standalone.module.js";

export function SettingsMenu() {
    return html`
        <div class="float-left m-0 w-full xl:w-5/6 md:h-full bg-light-green flex">
            <div class="w-0 xl:w-1/4"></div>
            <div class="w-full xl:w-1/2">
                <div class="bg-dark-green p-5 mt-10 detail-inner">
                    <h1 class="text-center text-3xl mb-5">settings</h1>
                    <form action="#">
                        <input class="ml-3" type="checkbox" name="offline-progress"/>
                        <label class="mx-3" for="offline-progress"> Enable Offline Progression</label>

                        <div class="my-2"/>

                        <input class="ml-3" type="checkbox" name="cloud-saves"/>
                        <label class="mx-3" for="cloud-saves"> Enable Cloud Saves</label>

                        <div class="my-2"/>

                        <label class="ml-3" for="autosave"> Auto-Save Interval:</label>
                        <select class="ml-2" type="dropdown" name="autosave">
                            <option value="1">1 minute</option>
                            <option value="1">5 minutes</option>
                            <option value="1">10 minutes</option>
                            <option value="1">30 minutes</option>
                        </select>

                        <br/><br/>
                        <button class="text-l border-solid border-2 border-slate-900 rounded bg-light-blue-darken-hover p-2 m-2">
                            Save Settings
                        </button>
                    </form>
                </div>
            </div>
            <div class="w-0 xl:w-1/4"></div>
        </div>
    `;
}
