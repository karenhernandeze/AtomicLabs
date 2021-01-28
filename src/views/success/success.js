import React, { Component } from 'react'
import checkmark from '../../img/checkmarkT.png'
import "./success-style.css"
import logo from "../../img/atomiclabs_logo.jpg"
class Success extends Component {

    constructor(props) {
        super(props)
        this.state = {
            step: this.props.location.state.step,
            phone: this.props.location.state.phone,
            status: this.props.location.state.status
        }
        this.success = this.success.bind(this);
    }

    componentDidMount() {
        console.log(this.state)
        if (this.state.step === "2"){
            setTimeout(() => {
                this.props.history.push({
                    pathname: '/subscribe/verification',
                    state: {
                        phone: this.state.phone
                    }
                });
            }, 2000);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.step === "2"){
            setTimeout(() => {
                this.props.history.push({
                    pathname: '/subscribe/verification',
                    state: {
                        phone: this.state.phone
                    }
                });
            }, 2000);
        }
    }

    success(){
        if ( this.state.step === '3' ){
            this.props.history.push({
                pathname: '/subscribe/tyc',
                state: {
                    phone: this.state.phone
                }
            });
        }
    }

    render() {
        return(
            <div className="backgroundpol">
                {
                    this.state.status === "resend" ? <img src={logo} className="chm"/> :
                        <button className="buttonS" onClick={this.success}><img src={checkmark} alt="BACKGROUND DOTS" className="chm"/>
                        </button>
                }
                {
                    this.state.step === "2" ?
                        <label className="ps2">Te hemos enviado el código al <br/>
                        número que nos proporcionaste
                        </label> :
                        (this.state.status === 'resend') ?
                        <>
                            {
                                setTimeout(() => {
                                    this.setState({
                                        status: 'send',
                                        step: '2'
                                    })
                                }, 2000)
                            }
                        <label className="ps2">Te estamos reenviando el código...
                        </label>
                        </> :
                            <label className="ps2">Hemos validado el código</label>
                }
            </div>
        )
    }
}

export default Success