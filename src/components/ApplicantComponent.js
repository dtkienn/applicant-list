import React, { useState } from "react"
import '../styles/user.css'
import Button from '@atlaskit/button'
export class ApplicantComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    test = () => {
        console.log(this.props.applicant);
    }
    render() {
        return(
            <>
                <div className="user-container">
                    <div className="user-info-container">
                        <img
                            src={this.props.image}
                            alt="">
                        </img>
                        <div className="user-fullname text-normal">
                            {`${this.props.title}. ${this.props.firstName} ${this.props.lastName}`}
                        </div>
                        <div className="user-age text-small">
                            Age: {`${this.props.age}`}
                        </div>
                        <Button appearance='primary' onClick={this.props.getNewUser}>New User</Button>
                        <Button appearance='link' onClick={() => this.props.addSavedList(`${this.props.firstName} ${this.props.lastName}`)}>Save this applicant</Button>
                    </div>
                </div>
            </>
        )
    }
}

export default ApplicantComponent;