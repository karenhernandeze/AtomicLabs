import React, { Component } from 'react'
import logo from '../../img/atomiclabs_logo.jpg'
import {withRouter} from "react-router-dom"

class Logo extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        this.redirectMainPage = this.redirectMainPage.bind(this);
    }

    redirectMainPage(){
        this.props.history.push(`/`)
        // this.props.history.push(`/main`);
    }

    render() {
        return(
            <div>
                <img src={logo} alt="ATOMIC LABS LOGO" className="logo" onClick={this.redirectMainPage}/>
            </div>
        )
    }
}

export default withRouter (Logo)