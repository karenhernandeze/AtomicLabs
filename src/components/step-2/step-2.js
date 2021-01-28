import React, { Component } from 'react'
import {withRouter} from "react-router-dom";
import Logo from "../../views/logo/logo";
import check from "../../img/checkmark.png";
import two from "../../img/twoOP.png";
import twoO from "../../img/twoO.png"
import three from "../../img/threeT.png";
import four from "../../img/fourT.png";
import "./stepTwo.css"
import {ArrowBackIos} from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import astro2 from "../../img/astro2.png"
import Footer from "../../views/footer/footer";

class StepTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone:'',
            errorPhone: false,
            step: '2',
            status: this.props.location.state.status
        }
        this.validatePhone = this.validatePhone.bind(this)
        this.goToStepOne = this.goToStepOne.bind(this)
    }

    componentDidMount() {
        console.log(this.props)
        console.log(this.state)
    }

    goToStepOne(){
        this.props.history.push(`/subscribe/name`)
    }

    validatePhone(){
        if (this.state.phone.length !== 10){
            this.setState({
                errorPhone: true
            })
        } else {
            this.props.history.push({
                pathname: '/success',
                state: {
                    step: '2',
                    phone: this.state.phone
                }
            })
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    render() {
        return (
            <div className="st1bg">
                <Logo/>

                {/*ORDER PICTURES OF 1-2-3-4 --- PROGRESS BAR*/}
                <ul className="progressNum">
                    <li className="one"> <img src={check}
                                              style={{width: 40, height: 40}}/> </li>
                    <li className="two"> <img src={two}
                                              style={{width: 40, height: 40, right: 100}}/> </li>
                    <li className="three"> <img src={three}
                                                style={{width: 40, height: 40}}/> </li>
                    <li className="four"> <img src={four}
                                               style={{width: 40, height: 40}}/> </li>
                </ul>
                <div className="progressbar">
                    <h2></h2>
                </div>

                {/*GO TO STEP #1 BUTTON*/}
                <div className="ab">
                    <button className="b12" onClick={this.goToStepOne}>
                        <ArrowBackIos className="abs" fontSize="inherit"></ArrowBackIos>
                        Regresar
                    </button>
                </div>


                {/*DESCRIPTION OF 'INSTRUCTIONS' */}
                <img src={twoO} className="oneTwo" alt="Number One"/>

                {/*CHECK IF THE PHONE NUMBER HAS TO BE EDITED FROM STEP 3 */}
                {
                    this.state.status === 'edit' ?
                        <p className="s21"> EDITA TU<h1>CELULAR</h1> </p> :
                        <p className="s21"> VALIDA TU<em>CELULAR</em> </p>
                }

                <div>
                    <p className="t22">Necesitamos validar tu número para continuar <br/> <em>Ingresa tu número a 10 dígitos y te enviaremos un código SMS. </em> </p>
                </div>

                {/*DIV WHERE THE PHONE WILL BE PLACED*/}
                <div className="d2">
                    <label className="t32">Número de Celular</label>
                    <br/>
                    <br/>
                    <TextField
                        required
                        className="txtbx1"
                        id="phone"
                        name="phone"
                        variant="outlined"
                        value={this.name}
                        error={this.state.errorPhone}
                        onChange={this.handleChange}
                    />
                    <br/>
                    {
                        // HELPER MESSAGE IN CASE OF AN ERROR
                        this.state.errorPhone === true ? <label className="em">
                                El celular debe ser de 10 dígitos</label> :
                            <none></none>
                    }
                </div>

                {/*BUTTON TO MOVE ON TO CONFIRMATION ADN THEN TO STEP 3 */}
                <button className="buttons2" onClick={this.validatePhone} >
                    CONTINUAR
                </button>

                <img src={astro2} className="img2"/>

                <Footer/>
            </div>
        )
    }
}

export default withRouter (StepTwo)
