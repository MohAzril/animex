import React from "react";
import {Route,Switch} from "react-router-dom";

// import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Blog from "../pages/Blog";
import Profile from "../pages/Profile";
import Category from '../pages/Category';
import Romance from '../pages/romance';
import Isi from '../pages/page1';
// import Isi2 from '../pages/page2';
// import Isi3 from '../pages/page3';

const MainRoute = () => {
    return (
        <Switch>
            {/* <Route exact path="/" component={Category}></Route> */}
            <Route exact path="/signin" component={SignIn}></Route>
            <Route exact path="/profile" component={Isi}></Route>
            <Route exact path="/" component={Blog}></Route>
            {/* <Route exact path="/news" component={Blog}></Route> */}
            <Route exact path="/adventure" component={Blog}></Route>
            <Route exact path="/romance" component={Blog}></Route>            
            <Route exact path="/drama" component={Blog}></Route>            
            <Route exact path="/fantasy" component={Blog}></Route>
            <Route exact path="/comedy" component={Blog}></Route>
        </Switch>
    );
}
export default MainRoute;
