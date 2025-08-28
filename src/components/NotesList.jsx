import React from "react";
import Item from "./NoteItem";

export default function List({notes, onDelete, onArchive}){
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    <Item 
                    key={note.id} 
                    id={note.id}
                    onDelete={onDelete}
                    onArchive={onArchive}
                    archived={note.archived} {...note}/>
                ))
            }
        </div>
    )
}