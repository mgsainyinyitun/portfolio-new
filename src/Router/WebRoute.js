import { Route } from "react-router-dom";
import AboutMe from "../components/AboutMe/AboutMe";
import Home from "../components/home/Home";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/Resume";
import { ROUTE } from "./constant";

export const WebRoute = [
    <Route 
        key='1'
        path={ROUTE.HOME}
        exact
        component={(props) => <Home {...props}/>}
    />,
    <Route
        key='2'
        path={ROUTE.PROJECTS}
        exact
        component={(props)=> <Projects {...props} />}
    />,
    <Route
        key='3'
        path={ROUTE.ABOUT_ME}
        exact
        component={(props)=> <AboutMe {...props}/>}
    />,
    <Route
        key='4'
        path={ROUTE.RESUME}
        exact
        component={(props)=> <Resume/>}
    />,
    <Route
        key='4'
        path={ROUTE.BLOG}
        exact
        component={(props)=> <h1>BLOGS</h1>}
    />,
];