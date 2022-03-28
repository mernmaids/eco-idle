import { ContentBox } from "../ui/ContentBox.js";
import { useHistory } from "react-router-dom";
import { logOutUser } from "../../services/AuthService.js"

export function SettingsMenu() {
    const history = useHistory();

    // TODO: fix issue with autosave; sometimes returns to settings, even when attempting to go back to login
    const logoutHandler = (e) => {
        logOutUser().then((r) => {
            alert("Logged out!");
            history.push("/login");
        })
    };


    return (
        <ContentBox>
            <h1 className="text-center text-5xl mb-5">settings</h1>
            <form action="#">
                <input className="ml-3" type="checkbox" name="offline-progress"/>
                <label className="mx-3" htmlFor="offline-progress"> Enable Offline Progression</label>

                <div className="my-2"/>

                <input className="ml-3" type="checkbox" name="cloud-saves"/>
                <label className="mx-3" htmlFor="cloud-saves"> Enable Cloud Saves</label>

                <div className="my-2"/>

                <label className="ml-3" htmlFor="autosave"> Auto-Save Interval:</label>
                <select className="ml-2" type="dropdown" name="autosave">
                    <option value="1">1 minute</option>
                    <option value="1">5 minutes</option>
                    <option value="1">10 minutes</option>
                    <option value="1">30 minutes</option>
                </select>

                <br/><br/>
                <button className="text-l border-solid border-2 border-slate-900 rounded bg-light-blue-darken-hover p-2 m-2">
                    Save Settings
                </button>
                <button className="text-l border-solid border-2 border-slate-900 rounded bg-light-blue-darken-hover p-2 m-2" onClick={logoutHandler}>
                    Logout
                </button>
            </form>
        </ContentBox>
    );
}
