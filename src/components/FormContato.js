import React, { Component } from 'react'
import { generateUID } from '../utils/helpers'
import TextField from '@material-ui/core/TextField'
import SaveButton from './SaveButton'

class FormContato extends Component {
  state = {
    nome: '',
    instagram: '',
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const { nome, instagram } = this.state

    this.props.onCreateContato({
      nome,
      instagram,
      id: generateUID()
    })

    this.setState({
      nome: '',
      instagram: ''
    })

    //console.log('Novo contato: ', {nome, instagram})
  }
  render() {
    const { nome, instagram } = this.state
    return (
      <div>
        <h1>Novo Contato</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='text-field'>
            <TextField
              name="nome"
              value={nome}
              onChange={this.handleChange}
              placeholder="Nome"
              fullWidth
            />
          </div>
          <div className='text-field'>
            <TextField
              name="instagram"
              value={instagram}
              onChange={this.handleChange}
              placeholder="Instagram"
              fullWidth
            />
          </div>
          <SaveButton />
        </form>
      </div>
    )
  }
}

export default FormContato
