
// Styles
import './css/fonts.css';
import './css/default.css';

// React
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

// App Data
import { getData } from './services/Api.js';
import * as Env from './services/Environments';
import Parse from 'parse';

// App Components
import { LoadingScreen } from './components/ui/LoadingScreen';
import { Menu } from './components/menu/Menu';
import { ContentView } from './components/ContentView';

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
    const [data, setData] = useState();
    const routes = [
        ["/sector", "Sector"],
        ["/shrooms", "Shroom Shop"],
        ["/prestige", "Prestige"],
        ["/enviro", "Enviro Shop"],
        ["/settings", "Settings"]
    ];

    // only gets save data at first render
    useEffect(() => {
        getData().then((d) => {
            setData(d);
        });
    }, []);

    if(data) {
        return (
            <div className="h-screen main">
                <BrowserRouter>
                    <Menu options={routes}/>
                    <ContentView data={data} />
                </BrowserRouter>
            </div>
        );
    } else {
        return (
            <LoadingScreen/>
        )
    }
}

export default App;