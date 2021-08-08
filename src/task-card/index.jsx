import React from 'react'
import './style.css'
import {DeleteOutlineTwoTone} from '@material-ui/icons';
import {Adjust} from '@material-ui/icons';

function TaskCard(){
    return (
        <div>
            <div className="task-container">
            <Adjust className="checkcircle-icon"/>
            <h3 className="title">creacion del CI/CD para el frontal</h3>
            <p>#23 created on 30/07/2021 8:34:54</p>
            <DeleteOutlineTwoTone className="deleteoutline-icon"/>
            </div>
        </div>

    )

}


export default TaskCard;