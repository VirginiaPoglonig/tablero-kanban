import React from "react";

import {CheckCircleOutline, DeleteOutlineTwoTone, RadioButtonCheckedTwoTone} from "@material-ui/icons"
import "./style.css"


class Card extends React.Component {
    render() {
        return (
            <div className="card_container">
                {this.props.status === "done" ? (
                    <CheckCircleOutline className= "check_circle">{this.props.satatus}</CheckCircleOutline>
                ) : (
                    <RadioButtonCheckedTwoTone className="radio_button">{this.props.status}</RadioButtonCheckedTwoTone>
                )}
                
                <div className="title_container">
                    <h4 className="card_title">{this.props.title}</h4>
                    <p className="card_sub_title">#{this.props.id} created on {this.props.date}</p>
                </div>
                <button className="delete_button"><DeleteOutlineTwoTone /></button>
                
            </div>
        )
    }
}

export default Card;