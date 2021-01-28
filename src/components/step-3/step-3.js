import React, { Component } from 'react'
import {withRouter} from "react-router-dom";
import Logo from "../../views/logo/logo";
import check from "../../img/checkmark.png";
import two from "../../img/twoOP.png";
import twoO from "../../img/twoO.png"
import three from "../../img/threeO.png";
import threeO from "../../img/threeOT.png"
import four from "../../img/fourT.png";
import "./stepThree.css"
import {ArrowBackIos, LockOpen} from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import astro2 from "../../img/astro2.png"
import EditIcon from '@material-ui/icons/Edit';
import Footer from "../../views/footer/footer";

class StepThree extends Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: this.props.location.state.phone,
            code: '',
            errorCode: false,
            step: '3',
            status: ''
        }
        this.validateCode = this.validateCode.bind(this)
        this.goToStepTwo = this.goToStepTwo.bind(this)
        this.resendCode = this.resendCode.bind(this)
        this.editPhoneNumber = this.editPhoneNumber.bind(this)
    }

    goToStepTwo(){
        this.props.history.push({
            pathname: '/subscribe/phone',
            state: {
                status: 'correct'
            }
        })
    }

    editPhoneNumber(){
        this.props.history.push({
            pathname: '/subscribe/phone',
            state: {
                status: 'edit',
            }
        })
    }

    resendCode(){
        //SYMBOLIC MESSAGE SENT
        console.log("Resending message ...")
        this.props.history.push({
            pathname: '/success',
            state: {
                status: 'resend',
                phone: this.state.phone
            }
        })
    }

    validateCode(){
        if (this.state.code.length !== 6){
            this.setState({
                errorCode: true
            })
        } else{
            this.props.history.push({
                pathname: '/success',
                state: {
                    phone: this.state.phone,
                    step: '3'
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
            <div className="st1bg example">
                <Logo/>

                {/*ORDER PICTURES OF 1-2-3-4 --- PROGRESS BAR*/}
                <ul className="progressNum">
                    <li className="one"> <img src={check}
                                              style={{width: 40, height: 40}}/> </li>
                    <li className="two"> <img src={check}
                                              style={{width: 40, height: 40, right: 100}}/> </li>
                    <li className="three"> <img src={three}
                                                style={{width: 40, height: 40}}/> </li>
                    <li className="four"> <img src={four}
                                               style={{width: 40, height: 40}}/> </li>
                </ul>
                <div className="progressbar">
                    <h3></h3>
                </div>

                {/*GO TO STEP #2 BUTTON*/}
                <div className="ab">
                    <button className="b12" onClick={this.goToStepTwo}>
                        <ArrowBackIos className="abs" fontSize="inherit"></ArrowBackIos>
                        Regresar
                    </button>
                </div>


                {/*DESCRIPTION OF 'INSTRUCTIONS' */}
                <img src={threeO} className="oneTwo" alt="Number One"/>
                <p className="s31">CÓDIGO DE <em> VERIFICACIÓN</em> </p>
                <div>
                    <p className="t22">Te enviamos un SMS al número: <br/> <em>
                        +52 {this.state.phone.substring(0, 2)} {this.state.phone.substring(2, 6)} {this.state.phone.substring(6, 10)}</em> <button className="b12"
                    onClick={this.editPhoneNumber}><EditIcon className="ei"/></button> <br/>
                    <h1>Ingresa el código de verificación: </h1>  </p>
                </div>

                {/*DIV WHERE THE VERIFICATION CODE WILL BE PLACED*/}
                <div className="d2">
                    <label className="t32">Código de verificación</label>
                    <br/>
                    <br/>
                    <TextField
                        required
                        className="txtbx1"
                        id="code"
                        name="code"
                        variant="outlined"
                        value={this.name}
                        error={this.state.errorCode}
                        onChange={this.handleChange}
                    />
                    <br/>
                    {
                        // HELPER MESSAGE IN CASE OF AN ERROR
                        this.state.errorCode === true ? <label className="em3">
                                El código es inválido</label> :
                            <none></none>
                    }
                </div>

                {/*RESEND CODE*/}
                <div>
                    <p className="t33">¿No recibiste el código?
                        <button className="b31" onClick={this.resendCode}> <strong> Reenviar código </strong></button></p>
                </div>

                {/*BUTTON TO MOVE ON TO CONFIRMATION AND THEN TO STEP 4 */}
                <button className="buttons3" onClick={this.validateCode} >
                    Validar Código
                </button>

                <img src={astro2} className="img2"/>

                <Footer/>

            </div>
        )
    }
}

export default withRouter (StepThree)
