import React, { Component } from 'react'
import {withRouter} from "react-router-dom";
import "./stepOne.css"
import Logo from "../../views/logo/logo";
import one from "../../img/oneO.png"
import two from "../../img/twoT.png"
import three from "../../img/threeT.png"
import four from "../../img/fourT.png"
import astro1 from "../../img/astro1.png"
import LockIcon from '@material-ui/icons/Lock';
import TextField from "@material-ui/core/TextField";
import Footer from "../../views/footer/footer";

class StepOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            lastName: '',
            errorName: false,
            errorLastName: false,
            status: ''
        }
        this.validateData = this.validateData.bind(this)
    }

    validateData(){
        if (this.state.name.length < 5 && this.state.lastName.length === 0){
            this.setState({
                errorName: true,
                errorLastName:true
            })
        } else if ( this.state.name.length < 5){
            this.setState({
                errorName: true
            })
        } else if ( this.state.lastName.length === 0){
            this.setState({
                errorLastName: true
            })
        } else {
            this.props.history.push({
                pathname: '/subscribe/phone',
                state: {
                    status: 'correct'
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
                    <li className="one"> <img src={one}
                                              style={{width: 40, height: 40}}/> </li>
                    <li className="two"> <img src={two}
                                              style={{width: 40, height: 40, right: 100}}/> </li>
                    <li className="three"> <img src={three}
                                                style={{width: 40, height: 40}}/> </li>
                    <li className="four"> <img src={four}
                                               style={{width: 40, height: 40}}/> </li>
                </ul>
                <div className="progressbar">
                    <h1></h1>
                </div>

                {/*DESCRIPTION OF 'INSTRUCTIONS' */}
                <img src={one} className="oneTwo" alt="Number One"/>
                <p className="t1"> TE QUEREMOS <em>CONOCER</em> </p>
                <div>
                    <p className="t2">Queremos saber que eres tú, por favor ingresa los siguientes datos: </p>
                </div>

                {/*DIV WHERE THE NAME AND LAST NAME WILL BE PLACED*/}
                <div className="d2">
                    <label className="t3">Nombre (s) </label>
                    <br/>
                    <br/>
                    <TextField
                        required
                        className="txtbx1"
                        variant="outlined"
                        id="name"
                        name="name"
                        value={this.name}
                        error={this.state.errorName}
                        InputProps={{
                            endAdornment:<LockIcon color="action"/>,
                        }}
                        onChange={this.handleChange}
                    />
                    <br/>
                    {
                        // HELPER MESSAGE IN CASE OF AN ERROR
                        this.state.errorName === true ? <label className="em">
                                El nombre deberá tener mínimo 5 carácteres</label> :
                            <none></none>
                    }
                    <br/>
                    <br/>
                    <label className="t3">Appelidos</label>
                    <br/>
                    <br/>
                    <TextField
                        required
                        className="txtbx1"
                        id="lastName"
                        name="lastName"
                        variant="outlined"
                        value={this.name}
                        InputProps={{
                            endAdornment:<LockIcon color="action"/>,
                        }}
                        onChange={this.handleChange}
                    />
                    <br/>
                    {
                        // HELPER MESSAGE IN CASE OF AN ERROR
                        this.state.errorLastName === true ? <label className="em">
                                El apellido no puede ir vacio</label> :
                            <none></none>
                    }
                </div>

                {/*BUTTON TO MOVE ON TO STEP 2*/}
                <button className="buttons1" onClick={this.validateData}>
                    ENVIAR
                </button>

                {/*ASTRONAUT PICTURE :D */}
                <img src={astro1} alt="ASTRONAUT EATING NODDLES" className="img1"/>

                <Footer/>
            </div>
        )
    }
}

export default withRouter (StepOne)
