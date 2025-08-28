import React from "react";
export default class NoteSearch extends React.Component{
    constructor(props){
        super(props);

        this.state={
            search:'',
        }

        this.searchChangeHandler = this.searchChangeHandler.bind(this);
    }
    searchChangeHandler(event){
        const value = event.target.value;
        this.setState({ search: value });
        this.props.onChange(value);
    }
    
    
    render(){
        return (
            <input className="note-app__header-search" placeholder="Cari catatan ...." type="text" value={this.state.search} onChange={this.searchChangeHandler}/>
        )
    }
}