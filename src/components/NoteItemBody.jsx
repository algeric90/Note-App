import React from "react";
import {showFormattedDate} from '../utils/index'


export default function ItemBody({title,body,createdAt}){
    return (

            <div className="note-item__content">
                <p className="note-item__title">{title}</p>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p> 
            </div>
       
    )
}