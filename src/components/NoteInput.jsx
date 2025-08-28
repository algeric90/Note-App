import React from "react";

export default class NoteInput extends React.Component{
    constructor(props){
        super(props);

        this.state={
            title: '',
            body: '',
        }

        this.titleHandler = this.titleHandler.bind(this);
        this.bodyHandler = this.bodyHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    titleHandler(event){
        this.setState(() => {
            return {
                title: event.target.value.slice(0,50),
            }
        });
    }
    bodyHandler(event){
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }
    submitHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({
            title: "",
            body: ""
        });
    }


    render (){
        return (
            <div className="note-input">
                <h2 className="note-input__title">Tambah Note</h2>
                <form className="note-input__body" onSubmit={this.submitHandler}>
                    {
                        50-this.state.title.length!==0 ? <p className="note-input__title-char-limit">Sisa karakter : {50-this.state.title.length}</p> 
                        : (<p className="note-input__title-char-limit">Judul telah mencapai batas karakter</p>)
                    }
                    <input type="text" placeholder="Masukkan judul" value={this.state.title} onChange={this.titleHandler}/>
                    <textarea rows="12" placeholder="Masukkan catatan" value={this.state.body} onChange={this.bodyHandler}/>
                    <button type="submit">Tambah</button>
                </form>
            </div>
        )
    }
}