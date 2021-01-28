import React, { Component } from 'react'
import linkedin from '../../img/linkedin.png'
import twitter from '../../img/twitter.png'
import {Link, withRouter} from "react-router-dom"
import "./footer-style.css"
import DialogTitle from "@material-ui/core/DialogTitle";
import exclamationPoint from "../../img/exclamationPoint.png";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";

class Footer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.redirectMainPage = this.redirectMainPage.bind(this);
    }

    redirectMainPage(){
        this.props.history.push(`/`)
    }

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

    render() {
        return(
            <div className="f1">
                    <div className="f2">
                        <p className="txtF1">© 2020 AtomicLabs. Todos los derechos reservados.
                            <em onClick={this.handleOpen}>Aviso de privacidad</em>
                            <a href="https://www.linkedin.com/company/atomic-mexico/" target="_blank">
                                <img src={linkedin} className="imgL"/>
                            </a>
                            <a href="https://twitter.com/atomicmexico" target="_blank">
                                <img src={twitter} className="imgT"/>
                            </a>
                        </p>
                    </div>

                    {/*PRIVACY POLICY DIALOG*/}
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

        )
    }
}

export default withRouter (Footer)