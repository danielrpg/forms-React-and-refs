import './App.css';
import { Component } from 'react';
import { Input, Button, Form } from 'semantic-ui-react'


class App extends Component {
  constructor(props) {
    super(props)

    this.state ={
      name:'',
      last_name: 'Fernandez',
      cellphone: ''
    }
  }

  submitData (e) {
    e.preventDefault() // neutraliza el evento de submit del formulario
    console.log(this.state)
    const address = this.inputAddress.value  // Refs
    console.log(address)
    this.inputAddress.focus();
    console.log(this.inputAddress);
  }


  render() {
        return (
          <div className="App">
            <Form>
              <Form.Field>
                <label>User Name</label>
                <Input 
                  id='name'
                  name='userName'
                  placeholder='Enter your name'
                  value={this.state.name}
                  onChange={(e) => this.setState({name : e.target.value})}
                />
              </Form.Field>
              <Form.Field>
                <label> Last Name </label>
                <Input 
                  id='lastName'
                  name='lastName'
                  placeholder='Enter your Last Name'
                  value={this.state.last_name}
                  onChange={(e) => this.setState({last_name : e.target.value})}
                /> 
              </Form.Field>
              <Form.Field>
                <label> Address </label>
                <input 
                  id='address'
                  name='address'
                  placeholder='Enter your Address'
                  ref={inputElement => this.inputAddress = inputElement}
                /> 
              </Form.Field> 
              <Form.Field>
                <label> Cellphone</label>
                <Input 
                  id='cellphone'
                  name='cellphone'
                  placeholder='Enter your Last cellphone'
                  value={this.state.cellphone}
                  onChange={(e) => this.setState({cellphone : e.target.value})}
                /> 
              </Form.Field>   
                <br />
                <Button primary type="submit" onClick={(e) => this.submitData(e)}>
                  Enviar
                </Button>
              </Form>
          </div>
        )
    }
}

export default App;
