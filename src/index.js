import React from 'react';
import ReactDOM from 'react-dom';
import Card from './App';
import './index.css';

class New extends React.Component{
    render(){
        return(
            <Card funcs = {this.props.funcs} editable = {true} />
        );
    }
}

class List extends React.Component{
    render(){
        return(
            <div>

            </div>
        );
    }
}
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            cards:[],
            alength:0,
        }
        
    }
    funcs = {
        clearCard( card ){
            card.setState({
                formData:{
                    "question":"",
                    "answer":""
                }
            });
        },
        deleteCard(){
            console.log("Hello");
        },
        editCard(){
            console.log("Hello");
        },
        saveCard( card ){
            console.log(card.state.formData);
            let uischema = card.state.uischema;
            uischema.question["ui:disabled"] = true;
            uischema.answer["ui:disabled"] = true;
            card.setState({
                editable:false,
                uischema:uischema 
            });
        }
    }
    render(){
        return(
            <div>
                <New funcs = { this.funcs } index = "new"/>
                <List funcs = { this.funcs } index = {this.state.alength}/>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));
