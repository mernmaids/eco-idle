
import Login from "./Login";
import Register from "./Register";

import { Route, Redirect } from 'react-router-dom';
import { ContentBox } from "../ui/ContentBox";

// Landing page for authentication functions.
export default function Landing() {
    return (
        <>
        <div className="xl:w-1/12 float-left">&nbsp;</div>
        <div className="bg-light-green h-screen main">
            <ContentBox>
                <h1 className="text-center text-5xl">eco idle</h1>
                <Route exact path="/auth/login">
                    <Login/>
                </Route>
                <Route exact path="/auth/register">
                    <Register/>
                </Route>
                <Route path="/">
                    <Redirect to="/auth/login"/>
                </Route>
                <Route path="/auth">
                    <Redirect to="/auth/login"/>
                </Route>
                <Route path="/login">
                    <Redirect to="/auth/login"/>
                </Route>
                <Route path="/register">
                    <Redirect to="/auth/register"/>
                </Route>
            </ContentBox>
        </div>
        </>
    );
}