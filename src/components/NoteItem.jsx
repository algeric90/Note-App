import React from "react";
import ItemBody from "./NoteItemBody";
import ItemAction from "./NoteItemAction";

export default function Item({id,title,body,createdAt,onArchive, onDelete}){
    return(
        <div className="note-item">
            <ItemBody title={title} body={body} createdAt={createdAt}/>
            <ItemAction id={id} onDelete={onDelete} onArchive={onArchive}/>
        </div>
    )
}