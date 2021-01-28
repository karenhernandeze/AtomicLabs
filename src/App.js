import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import StepOne from "./components/step-1/step-1";
import MainView from "./views/main/main";
import StepTwo from "./components/step-2/step-2";
import Success from "./views/success/success";
import StepThree from "./components/step-3/step-3";
import StepFour from "./components/step-4/step-4";
import Confirmation from "./views/confirmation/confirmation";
import Footer from "./views/footer/footer";

const App = () => {
    return (
        <Router>
            <Switch>
                <div className="main fill-height-95 example">

                    <Route exact path="/" to="/main" component={MainView} />
                    <Route exact path="/main" component={MainView} />

                    {/*GO TO STEP 1 OF THE SUBSCRIPTION*/}
                    <Route exact path="/subscribe/name" component={StepOne} />

                    {/*GO TO STEP 2 OF THE SUBSCRIPTION*/}
                    <Route exact path="/subscribe/phone" component={StepTwo} />

                    {/*SUCCESS VIEW*/}
                    <Route exact path="/success" component={Success} />

                    {/*GO TO STEP 3 OF THE SUBSCRIPTION*/}
                    <Route exact path="/subscribe/verification" component={StepThree} />

                    {/*GO TO STEP 4 OF THE SUBSCRIPTION*/}
                    <Route exact path="/subscribe/tyc" component={StepFour} />


                    {/*CONFIRMATION VIEW*/}
                    <Route exact path="/confirmation" component={Confirmation} />
                    {/*CONFIRMATION VIEW*/}

                </div>
            </Switch>
        </Router>
    );
};

export default App;