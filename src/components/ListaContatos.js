import React, { Component } from 'react'
import AddButton from './AddButton'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Delete from '@material-ui/icons/Delete'

class ListaContatos extends Component {
  render() {
    return(
      <div>
        <h1>Meus Contatos</h1>
        <Link to='/create'>
          <AddButton />
        </Link>
        <List>
          {this.props.contatos.map(contato => (
            <ListItem style={{paddingLeft: '0'}}>
              <Avatar>
                <AccountCircle />
              </Avatar>
              <ListItemText primary={contato.nome} secondary={contato.instagram} />
              <Delete
                onClick={() => this.props.onDeleteContato(contato)}
                style={{color: '#bdbdbd'}}
                >Excluir
              </Delete>
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

export default ListaContatos
