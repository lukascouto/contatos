import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Bar from './Bar'
import FormContato from './FormContato'
import ListaContatos from './ListaContatos'

class App extends Component {
  state = {
    contatos: [
      {
        "id": "0",
        "nome": "Lukas",
        "instagram": "@lookascouto"
      },
      {
        "id": "1",
        "nome": "Téo",
        "instagram": "@teo"
      },
      {
        "id": "2",
        "nome": "Maria",
        "instagram": "@maria"
      },
    ]
  }
  createContato = (contato) => {
    this.setState((currentState) => ({
      contatos: currentState.contatos.concat([contato])
    }))
  }
  removeContato = (contato) => {
    this.setState((currentState) => ({
      contatos: currentState.contatos.filter((c) => {
        return c.id !== contato.id
      })
    }))
  }
  render() {
    return (
      <div>
        <Bar />
        <div className='container'>
          <Route exact path='/' render={() => (
            <ListaContatos
              contatos={this.state.contatos}
              onDeleteContato={this.removeContato}
            />
          )} />
          <Route path='/create' render={({history}) => (
            <FormContato
              onCreateContato={(contato) => {
                this.createContato(contato)
                history.push('/')
              }}
            />
          )} />
        </div>
      </div>
    );
  }
}

export default App;
