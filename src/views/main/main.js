import React, { Component } from 'react'
import './main-styles.css'
import main1 from "../../img/main1.png"
import dropdown from "../../img/more_dropdownArrow.png"
import {withRouter} from "react-router-dom";
import Logo from "../logo/logo";
import background from "../../img/main_background.jpg"
import dots from "../../img/dots.png"
import info1 from "../../img/info1.png"
import info2 from "../../img/info2.png"
import info3 from "../../img/info3.png"
import hr from "../../img/rh.png"
import astro5 from "../../img/astro5.png"
import astro6 from "../../img/astro6.png"
import astro7 from "../../img/astro7.png"
import check from "../../img/check.png"
import {TrendingFlat} from "@material-ui/icons";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import Footer from "../footer/footer";

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
            <div className="main example">
                <div>
                    <Logo/>

                    {/*PART 1*/}
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

                    {/*PART 2*/}
                    <div className="m">
                        <img src={dots} alt="Astronaut" className="background"/>

                        <p className="p1">SOMOS EL BRAZO DERECHO
                            <br/><em>DE LA TECNOLOGÍA</em>
                        </p>
                        <table className="table">
                            <tr>
                                <td>
                                    {/*CARD WITH  THE "EXPLORA" SUBTITLE*/}
                                    <div className="box1" >
                                        <img src={info1} className="image"/>
                                        <div className="os2">
                                            <div className="orangeStripes1"></div>
                                            <div className="orangeStripes2"></div>
                                            <div className="orangeStripes3"></div>
                                        </div>
                                        <p className="txtInfo"> EXPLORA </p>
                                        <p style={ { position: 'relative', right: 120, bottom: 55 }}> ●  </p>
                                        <p className="txtList" style={{ bottom: 95}}>
                                            Innovación y <strong> creación tecnológica </strong>
                                        </p>

                                        <p style={ { position: 'relative', right: 120, bottom: 95 }}> ●  </p>
                                        <p className="txtList" style={{ bottom: 135}}>
                                            <strong> UI/UX </strong>
                                        </p>

                                        <p style={ { position: 'relative', right: 120, bottom: 135 }}> ●  </p>
                                        <p className="txtList" style={{ bottom: 175}}>
                                            <strong> Innovación </strong>
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    {/*CARD WITH  THE "IMAGINA" SUBTITLE*/}
                                    <div className="box2">
                                        <img src={info2} className="image"/>
                                        <div className="whiteStripes1"></div>
                                        <div className="whiteStripes2"></div>
                                        <div className="whiteStripes3"></div>

                                        <p className="txtInfo2"> IMAGINA </p>

                                        <svg height="100" width="100" style={{position: 'relative', bottom: 90, right: 120}}>
                                            <circle cx="50" cy="50" r="5" stroke="white" stroke-width="3" fill="white"/>
                                        </svg>
                                        <p className="txtList2" style={{ bottom: 176}}>
                                            <strong> Estrategia </strong> Digital
                                        </p>

                                        <svg height="100" width="100" style={{position: 'relative', bottom: 210, right: 120}}>
                                            <circle cx="50" cy="50" r="5" stroke="white" stroke-width="3" fill="white"/>
                                        </svg>
                                        <p className="txtList2" style={{ bottom: 296}}>
                                            Big Data & <strong> Analysis </strong>
                                        </p>

                                        <svg height="100" width="100" style={{position: 'relative', bottom: 330, right: 120}}>
                                            <circle cx="50" cy="50" r="5" stroke="white" stroke-width="3" fill="white"/>
                                        </svg>
                                        <p className="txtList2" style={{ bottom: 416}}>
                                            <strong> Consultoría </strong> Tecnológica
                                        </p>

                                        <svg height="100" width="100" style={{position: 'relative', bottom: 450, right: 120}}>
                                            <circle cx="50" cy="50" r="5" stroke="white" stroke-width="3" fill="white"/>
                                        </svg>
                                        <p className="txtList2" style={{ bottom: 536}}>
                                            <strong> Reducción </strong> de costos TI
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    {/*CARD WITH  THE "CONQUISTA" SUBTITLE*/}
                                    <div>
                                        <div className="box3" >
                                            <img src={info3} className="image"/>
                                            <div className="os">
                                                <div className="orangeStripes1"></div>
                                                <div className="orangeStripes2"></div>
                                                <div className="orangeStripes3"></div>
                                            </div>
                                            <p className="txtInfo"> CONQUISTA </p>

                                            <p style={ { position: 'relative', right: 100, bottom: 55 }}> ●  </p>
                                            <p className="txtList3" style={{ bottom: 95}}>
                                                Desarrollo tecnológico <strong> <br/> a la medida </strong>
                                            </p>

                                            <p style={ { position: 'relative', right: 100, bottom: 95 }}> ●  </p>
                                            <p className="txtList3" style={{ bottom: 135}}>
                                                <strong> Ciberseguridad </strong>
                                            </p>

                                            <p style={ { position: 'relative', right: 100, bottom: 135 }}> ●  </p>
                                            <p className="txtList3" style={{ bottom: 175}}>
                                                <strong> Servicios de la Nube </strong>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>

                    {/*PART 3*/}
                    <div className="m">
                        <img src={dots} alt="Astronaut" className="background"/>
                        <p className="p1">¡TE ENCANTARÁ
                            <br/><em>TRABAJAR CON NOSOTROS!</em>
                        </p>

                        <img src={hr} className="imgHR"/>

                        <div className="process">
                            <p className="steps" style={{top: 39}}>
                                Contratación <br/> remota
                            </p>
                            <TrendingFlat style={{ fontSize: 50, color: "#fa4e09", position: "relative",
                                left:315, bottom: 35
                            }}/>

                            <p className="steps" style={{bottom: 114, left: 350}}>
                                Entrevista con <br/> el área de RH
                            </p>

                            <TrendingFlat style={{ fontSize: 50, color: "#fa4e09", position: "relative",
                                left:670, bottom: 188
                            }}/>

                            <p className="steps" style={{bottom: 267, left: 685}}>
                                Prueba <br/> práctica
                            </p>

                            <TrendingFlat style={{ fontSize: 50, color: "#fa4e09", position: "relative",
                                left:985, bottom: 341
                            }}/>

                            <p className="steps" style={{bottom: 420, left: 1000}}>

                                Entrevista <br/> técnica
                            </p>
                        </div>

                        <button className="button2" onClick={this.suscribe}>
                            ¡Quiero ser parte!
                        </button>

                    </div>

                    {/*PART 4*/}
                    <div className="m2">
                        <img src={dots} alt="Astronaut" className="background"/>

                        <p className="p1">¿POR QUÉ <em> ATOMIC?</em>
                        </p>
                        {/*<img src={dots} alt="Astronaut" className="background4"/>*/}

                        <img src={dots} alt="Astronaut" className="background2"/>

                        <table className="table2">
                            <tr>
                                <td>
                                    <div className="box4"><img src={astro5} className="imgA5"/></div>
                                </td>
                                <td>
                                    <div className="box4"><img src={astro6} className="imgA5" /></div>
                                </td>
                                <td>
                                    <div className="box4"><img src={astro7} className="imgA5" /></div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="box5">
                                        <img src={check} className="imgA6"/>
                                        <p className="txtb5"> Usamos las tecnologías <br/> más modernas
                                        </p>
                                        <img src={check} className="imgA6" style={{bottom:30}}/>
                                        <p className="txtb5" style={{bottom:90}}>Innovamos y creamos <br/> proyectos retadores
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <div className="box5">
                                        <img src={check} className="imgA6"/>
                                        <p className="txtb5"> ¡Trabajamos en equipo <br/> rumbo al éxito!
                                        </p>
                                        <img src={check} className="imgA6" style={{bottom:30}}/>
                                        <p className="txtb5" style={{bottom:90}}>No tenemos código de <br/> vestimenta
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <div className="box5">
                                        <img src={check} className="imgA6"/>
                                        <p className="txtb5">Realizamos actividades <br/> para tu bienestar
                                        </p>
                                        <img src={check} className="imgA6" style={{bottom:30}}/>
                                        <p className="txtb5" style={{bottom:90}}> ¡Tenemos un parque <br/> frente a la oficina
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </table>


                        <div className="table3">
                            <TableContainer style={{overflowX: "hidden"}} component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow >
                                            <TableCell style={{borderBottom: "transparent"}}></TableCell>
                                            <TableCell style={{borderBottom: "transparent"}}></TableCell>
                                            <TableCell style={{borderBottom: "transparent"}}></TableCell>
                                            <TableCell style={{borderBottom: "transparent", background: "#e9f1f5"}}> </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{width: 10,borderBottom: "transparent"}}></TableCell>

                                            <TableCell style={{width: 650, fontSize: 20, borderBottom: "transparent",
                                            fontWeight: 900, borderRight: "thin solid #e3e5e6"}}>CARACTERÍSTICAS</TableCell>
                                            <TableCell align="center" style={{width: 500, fontSize: 20,
                                                borderBottom: "transparent", fontWeight: 900, borderRight: "thin solid #e3e5e6"}}>OTROS</TableCell>
                                            <TableCell align="center"
                                                       style={{width: 500, fontSize: 30, borderBottom: "transparent",
                                                           fontWeight: 900, borderTop: "thick solid #e9f1f5",
                                                           background: "#e9f1f5"}}>ATOMIC </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell style={{width: 10,borderBottom: "transparent"}}></TableCell>

                                            <TableCell style={{borderRight: "thin solid #e3e5e6"}}>Equipo inclusivo, honesto y auténtico</TableCell>
                                            <TableCell style={{borderRight: "thin solid #e3e5e6"}}> <img src={check} className="imgC"/> </TableCell>
                                            <TableCell style={{background: "#e9f1f5"}}> <img src={check} className="imgC"/> </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell style={{width: 10,borderBottom: "transparent"}}></TableCell>

                                            <TableCell style={{borderRight: "thin solid #e3e5e6"}}>Puntualidad es nuestro segundo nombre</TableCell>
                                            <TableCell style={{borderRight: "thin solid #e3e5e6"}}> <img src={check} className="imgC"/> </TableCell>
                                            <TableCell style={{background: "#e9f1f5"}}> <img src={check} className="imgC"/> </TableCell>
                                        </TableRow>
                                    </TableBody>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell style={{width: 10,borderBottom: "transparent"}}></TableCell>

                                            <TableCell style={{borderRight: "thin solid #e3e5e6"}}>Siempre innovamos en nuestros productos</TableCell>
                                            <TableCell style={{borderRight: "thin solid #e3e5e6"}}>   <img src={check} className="imgC"/>  </TableCell>
                                            <TableCell style={{background: "#e9f1f5"}}> <img src={check} className="imgC"/> </TableCell>
                                        </TableRow>
                                    </TableBody>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell style={{width: 10,borderBottom: "transparent"}}></TableCell>

                                            <TableCell style={{borderRight: "thin solid #e3e5e6"}}>Te ayudamos a crecer
                                            e implementar nuevos conocimientos</TableCell>
                                            <TableCell style={{borderRight: "thin solid #e3e5e6"}}>   </TableCell>
                                            <TableCell style={{background: "#e9f1f5"}}> <img src={check} className="imgC"/> </TableCell>
                                        </TableRow>
                                    </TableBody>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell style={{width: 10,borderBottom: "transparent"}}></TableCell>

                                            <TableCell style={{borderRight: "thin solid #e3e5e6"}}>
                                                Nos preocupamos por tu bienestar</TableCell>
                                            <TableCell style={{borderRight: "thin solid #e3e5e6"}}>  </TableCell>
                                            <TableCell style={{background: "#e9f1f5"}}> <img src={check} className="imgC"/> </TableCell>
                                        </TableRow>
                                    </TableBody>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell style={{width: 10,borderBottom: "transparent"}}></TableCell>

                                            <TableCell style={{borderRight: "thin solid #e3e5e6"}}>
                                                El respeto es una parte fundamental</TableCell>
                                            <TableCell style={{borderRight: "thin solid #e3e5e6"}}></TableCell>
                                            <TableCell style={{background: "#e9f1f5"}}> <img src={check} className="imgC"/> </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </div>

                        <button className="button3" onClick={this.suscribe}>
                            ¡Quiero ser parte!
                        </button>

                    </div>

                    <Footer/>
                </div>
            </div>
        )
    }
}

export default withRouter (MainView)