import React from "react";
import '../styles/style.css'
import List from "./NotesList";
import NoteInput from "./NoteInput";
import NoteSearch from "./NoteSearch";
import {getInitialData } from '../utils/index';

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: getInitialData(),
            search: '',
        }
        this.deleteHandler = this.deleteHandler.bind(this);
        this.addHandler= this.addHandler.bind(this);
        this.archiveHandler= this.archiveHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    deleteHandler(id){
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }
    archiveHandler(id) {
        const updatedNotes = this.state.notes.map(note =>
            note.id === id ? { ...note, archived: true } : note
        );

        this.setState({ notes: updatedNotes });
    }
    addHandler({title,body}){
        this.setState((pervState) =>{
            return {
                notes: [
                    ...pervState.notes,
                    {
                        id: `data-${+new Date()}`,
                        title,
                        body,
                        createdAt: new Date().toISOString(),
                        archived: false,
                    }
                ]
            }
        })
    }
    searchHandler(searchedQuery){
        this.setState(() => {
            return {
                search : searchedQuery.trim().toLowerCase()
            }
        });
    }

    render(){
        const Notes =  this.state.notes.filter(note => note.archived === false);
        const Archived =  this.state.notes.filter(note => note.archived === true);
        const Searched =    this.state.search ? (this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()))): null;
                            


        return (
            <>
                <div className="note-app__header">
                    <div className="note-app__header-navbrand">
                        <img src="/img/logo.png" alt="navbrand-logo"  width="32" height="32"/>
                        <h1>Note Apps</h1>
                    </div>
                    <NoteSearch onChange={this.searchHandler}/>
                </div>
                <div className="note-app__body">
                    <NoteInput  addNote={this.addHandler}/>
                    <h2>Notes</h2>
                    {
                        Searched !==null ? 
                        Searched.length !==0 ?(<List notes={Searched.filter((note)=>note.archived===false)} onDelete={this.deleteHandler} onArchive={this.archiveHandler}/> ): (<p className="notes-list__empty-message">Tidak Ada Catatan</p>) :
                        Notes.length !==0 ? <List notes={Notes} onDelete={this.deleteHandler} onArchive={this.archiveHandler}/> : <p className="notes-list__empty-message">Tidak Ada Catatan</p>
                    }
                    <h2>Archived</h2>
                    {
                        Searched !==null ? 
                        Searched.length !==0 ?(<List notes={Searched.filter((note)=>note.archived===true)} onDelete={this.deleteHandler} onArchive={this.archiveHandler}/> ): (<p className="notes-list__empty-message">Tidak Ada Catatan</p>) :
                        Archived.length !==0 ? <List notes={Archived} onDelete={this.deleteHandler} onArchive={this.archiveHandler}/> : <p className="notes-list__empty-message">Tidak Ada Catatan</p>
                    }
                </div>
            </>
        )
    }
}

// add search custom layout
