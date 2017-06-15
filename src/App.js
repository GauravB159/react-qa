import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-jsonschema-form';
import jsonschema from './schema/qa.schema';
import uischema from './schema/qa.uischema';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <Form schema={jsonschema}
          uiSchema={uischema}
          showErrorList={false}>
          <div>
            <button type="button" className="submit">✔</button>
            <button type="button" className="cancel">❌</button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Card;
