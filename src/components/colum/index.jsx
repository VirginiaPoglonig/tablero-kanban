import "./style.css"
import Card from "../card"
import React, { useState } from "react";



function Column(props) {
    const [show, setShow] = useState(true);
    return (
        <div className="column_container">
            <div className="column_header">
                <p className="header_number">{props.numberOfCards}</p>
                <p className="column_title">{props.columnName}</p>
                <button className="add_button_column" onClick={() => setShow((s) => !s)}>+</button>
                {props.clearall ? <button className="clearall_button" >Clear All</button> : ''}

            </div>
            <div className="input_header_container" style={{ display: show ? "block" : "none" }} >
                <textarea className="input_text" type="text" required></textarea>
                <div className="button-container">
                    <button className="add_button button">Add</button>
                    <button className="cancel_button button">Cancel</button>
                </div>

            </div>
            <Card title="Creación del CI/CD para el frontal" status={props.status} id="23" date="20/05/20"></Card>
            <Card title="Creación del CI/CD para el frontal 123451234123" status={props.status} id="23" date="20/05/20"></Card>
            <Card title="hola :)" status={props.status} id="23" date="20/05/20"></Card>
            <Card title="TEST TEST TEST TEST TEST" status={props.status} id="23" date="20/05/20"></Card>
            <Card title="TEST TEST TEST TEST TEST" status={props.status} id="23" date="20/05/20"></Card>
            <Card title="TEST TEST TEST TEST TEST" status={props.status} id="23" date="20/05/20"></Card>
            <Card title="TEST TEST TEST TEST TEST" status={props.status} id="23" date="20/05/20"></Card>





        </div>

    )
}
export default Column