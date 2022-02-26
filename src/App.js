import './static/css/default.css';
import { Menu } from './components/menu/Menu';
import { ContentView } from './components/ContentView.js';
import { useEffect, useState } from 'react';
import { getData } from './services/Api.js';
import * as Env from "./environments";
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
    const [data, setData] = useState();
    const [view, setView] = useState('sector');
    function handleMenuSelect(selection) {
        if(view !== setView) {
            setView(selection);
        }
    }

    // only gets save data at first render
    useEffect(() => {
        getData().then((d) => {
            setData(d);
        });
    }, []);

    if(!data) {
        return (<div>Loading...</div>);
    }

    return (
        <div className="h-screen">
                <Menu onMenuSelect={handleMenuSelect} options={data.menuOptions}/>
                <ContentView data={data} view={view}/>
        </div>
    );
}

export default App;