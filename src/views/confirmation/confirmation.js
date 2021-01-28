import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import Logo from "../logo/logo";
import astro4 from "../../img/astro4.png";
import "./confirmation-style.css"
import Footer from "../../views/footer/footer";

class Confirmation extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        this.redirectMainPage = this.redirectMainPage.bind(this);
    }

    redirectMainPage(){
        this.props.history.push(`/`)
    }

    render() {
        return(
                <div className="st1bg">
                    <Logo/>

                    {/*DESCRIPTION OF 'INSTRUCTIONS' */}
                    <p className="cont"> TUS DATOS <br/> <em>HAN SIDO ENVIADOS <br/> CON ÉXITO </em> </p>
                    <div>
                        {/* --FALTA PEDIR EL CORREO-- */}
                        <p className="tc">En breve recibirás un correo de confirmación <br/>
                            por parte del equipo de AtomicLabs </p>

                        <p className="tct">Recuerda revisar tu bandeja de SPAM
                            <br/> ¡Esperamos verte pronto! </p>
                    </div>

                    {/*/!*ASTRONAUT PICTURE :D *!/*/}
                    <img src={astro4} alt="ASTRONAUT IN THE COMPUTER" className="img4"/>

                    <Footer/>

                </div>
        )
    }
}

export default withRouter (Confirmation)