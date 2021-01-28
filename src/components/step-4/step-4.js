import React, { Component } from 'react'
import {withRouter} from "react-router-dom";
import Logo from "../../views/logo/logo";
import check from "../../img/checkmark.png";
import four from "../../img/fourO.png";
import {ArrowBackIos, Lock, LockIcon} from "@material-ui/icons";
import fourO from "../../img/fourOT.png";
import astro3 from "../../img/astro3.png";
import "./stepFour.css"
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import exclamationPoint from "../../img/exclamationPoint.png"
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Footer from "../../views/footer/footer";


class StepFour extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            check: false,
            step: '4',
            phone: this.props.location.state.phone
        }
        this.goToStepThree = this.goToStepThree.bind(this)
        this.finishSubscription = this.finishSubscription.bind(this)
    }

    goToStepThree(){
        this.props.history.push({
            pathname: '/subscribe/verification',
            state: {
                phone: this.state.phone
            }
        })
    }

    //SET STATE OF DIALOG TO FALSE
    handleClose = event => {
        this.setState({
            ...this.state,
            open: false,
        });
    };

    handleOpen = event => {
        this.setState({
            ...this.state,
            open: true,
        });
    };

    handleChangeCheck = event => {
        if (this.state.check === true ){
            console.log(this.state)
            this.setState({
                ...this.state,
                check: false
            })
        } else if (this.state.check === false){
            console.log(this.state)
            this.setState(({
                ...this.state,
                check: true
            }))
        }
    }

    finishSubscription(){
        this.props.history.push(`/confirmation`)
    }

    render() {
        const GreenCheckbox = withStyles({
            root: {
                color: "#fa4e09",
                '&$checked': {
                    color: "#fa4e09",
                },
            },
            checked: {},
        })((props) => <Checkbox color="default" {...props} />);

        return (
            <div className="st1bg">
                <Logo/>

                {/*ORDER PICTURES OF 1-2-3-4 --- PROGRESS BAR*/}
                <ul className="progressNum">
                    <li className="one"> <img src={check}
                                              style={{width: 40, height: 40}}/> </li>
                    <li className="two"> <img src={check}
                                              style={{width: 40, height: 40, right: 100}}/> </li>
                    <li className="three"> <img src={check}
                                                style={{width: 40, height: 40}}/> </li>
                    <li className="four"> <img src={four}
                                               style={{width: 40, height: 40}}/> </li>
                </ul>
                <div className="progressbar">
                    <h4></h4>
                </div>

                {/*GO TO STEP #3 BUTTON*/}
                <div className="ab">
                    <button className="b12" onClick={this.goToStepThree}>
                        <ArrowBackIos className="abs" fontSize="inherit"></ArrowBackIos>
                        Regresar
                    </button>
                </div>

                {/*DESCRIPTION OF 'INSTRUCTIONS' */}
                <img src={fourO} className="oneTwo" alt="Number One"/>
                <p className="s41">TÉRMINOS Y <em>CONDICIONES</em> </p>
                <div>
                    <p className="t22">Por favor revisa nuestros términos y condiciones para este servicio: <br/></p>
                </div>

                <div>
                    <button className="bd4" onClick={this.handleOpen}>
                        Consulta Términos y Condiciones
                    </button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="draggable-dialog-title"
                        fullWidth={true}
                        maxWidth="sm"
                    >
                        <DialogTitle>
                            <img src={exclamationPoint} className="asa"/>
                        </DialogTitle>
                        <DialogContent className="dC1">
                            <Typography className="dialogT">
                                <strong>
                                    Términos y Condiciones
                                </strong>
                            </Typography>
                            <br/>
                            <Typography className="dialog">
                                Para llevar a cabo las finalidades descritas en el presente Aviso de Privacidad,
                                utilizaremos datos personales de identificación, contacto y laborales.
                                <br/>
                                <br/>
                                Los datos personales que AtomicLabs recaba de usted, serán utilizados para las
                                siguientes finalidades que son necesarias para ofrecer nuestros servicios:
                                <br/>
                                <br/>
                                ● AtomicLabs requiere utilizar sus datos personales para incluirlo en la
                                base de datos que utilizamos para prestar los servicios de reclutamiento,
                                selección de personal, administración de nomina y prestación de servicios.
                                AtomicLabs utilizara sus datos personales para evaluar si es posible colocarlos
                                en las vacantes de empleo de la compañía o de los clientes de AtomicLabs y para
                                conocer sus aptitudes, antecedentes y referencias laborales. En este sentido,
                                AtomicLabs utilizara sus datos personales para ponerse en contacto con usted en
                                relación a las vacantes para las cuales podría ser candidato.
                                <br/>
                                <br/>
                            </Typography>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="chckA">
                    <FormControlLabel
                        control={<GreenCheckbox checked={this.state.check} onChange={this.handleChangeCheck} name="checkedA" />}
                    />
                    <label className="chckAText"> Acepto los Términos y Condiciones. </label>
                </div>

                {/*BUTTON TO MOVE ON TO CONFIRMATION AND THEN TO STEP 4 */}
                {
                    this.state.check === false ?
                        <>
                            <button className="buttons4 op">
                                Enviar
                                <Lock className="bi3"/>
                            </button>
                        </>:
                        <>
                            <button className="buttons4" onClick={this.finishSubscription}>
                                Enviar
                                <Lock className="bi3"/>
                            </button>
                        </>
                }


                <img src={astro3} className="img3"/>

                <Footer/>

            </div>
        )
    }
}

export default withRouter (StepFour)
