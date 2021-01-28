import React, { Component } from 'react'
import './main-styles.css'
import main1 from "../../img/main1.png"
import dropdown from "../../img/more_dropdownArrow.png"
import {withRouter} from "react-router-dom";
import Logo from "../logo/logo";
import background from "../../img/main_background.jpg"
import dots from "../../img/dots.png"

class MainView extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        this.suscribe = this.suscribe.bind(this)
    }

    //FUNCTION CREATED TO REDIRECT TO STEP ONE OF SUBSCRIPTION FORM
    suscribe(){
        this.props.history.push(`/subscribe/name`)
    }

    render() {
        return(
            <div className="main">
                <div>
                    <Logo/>
                    <div className="m">
                        <img src={background} alt="Astronaut" className="background"/>
                        <img src={main1} alt="Astronaut" className="main1"/>
                        <p className="mainTitle">Desarrolla todo<br/>
                            <h1>tu POTENCIAL</h1><br/>
                            <h2>dentro del equipo</h2><br/>
                            <h3>  ATOMIC</h3><h4>LABS</h4></p>
                        <button className="button" onClick={this.suscribe}>
                            ¡Quiero ser parte!
                        </button>

                        <img src={dropdown} alt="dropdown more info" className="dropdown"/>
                        <p className="moreInfoText">Quiero saber más</p>
                    </div>

                    <div className="m">
                        <img src={dots} alt="Astronaut" className="background"/>

                        <p className="p1">SOMOS EL BRAZO DERECHO
                            <br/><em>DE LA TECNOLOGÍA</em>
                        </p>
                        <table className="table">
                            <tr>
                                <td>
                                    <div className="box1" >
                                        <img src={main1}/>
                                    </div>
                                </td>
                                <td>
                                    <div className="box2">
                                        HI
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="box3" >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <div >
                                {/*<img src={info1} className="i1"/>*/}
                                {/*<div className="b1">*/}
                                {/*    INNOVACION*/}
                                {/*    <br/>*/}
                                {/*    UI/UX*/}
                                {/*    <br/>*/}
                                {/*    Innovacion*/}
                                {/*</div>*/}
                        </div>
                    </div>

                    <div>
                        <img src={dots} alt="Astronaut" className="background"/>

                    </div>

                    <div>
                        <img src={dots} alt="Astronaut" className="background"/>
HIIIIII
                    </div>


                </div>
            </div>
        )
    }
}

export default withRouter (MainView)