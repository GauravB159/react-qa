import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-jsonschema-form';
import jsonschema from './schema/qa.schema';
import uischema from './schema/qa.uischema';

class Card extends Component {
    constructor(props){
    super();
    if(props.editable === true){
      uischema.question["ui:disabled"] = false;
      uischema.answer["ui:disabled"] = false;
    }else{
      uischema.question["ui:disabled"] = true;
      uischema.answer["ui:disabled"] = true;
    }
    this.state = {
      editable: props.editable,
      formData:{
        "question":"",
        "answer":""
      },
      uischema:uischema,
    };
  }
  render() {
    const formData = {
        "question":"",
        "answer":"",
    };
    const onChange = ({formData}) => {
        console.log(formData);
        console.log(this.state);
        this.setState({formData:{
            "question":formData.question,
            "answer":formData.answer,
        }})
    };
    console.log(this.state);
    return (
      <div className="card">
        <Form schema={ jsonschema }
          uiSchema={ uischema }
          showErrorList={ false }
          formData={this.state.formData} 
          onChange={ ({formData}) => this.setState({formData}) }
          >
          <div className="form-btn">
            <button type="button" className="negative btn" onClick = { () => this.props.funcs.clearCard(this) }>CLEAR</button>
            <button type="button" className="postive btn" onClick = { () => this.props.funcs.saveCard(this,uischema) }>SAVE</button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Card;
