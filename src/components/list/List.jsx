import React, { Component } from 'react';
import { getList } from '../../services/getList.js'

export default class List extends Component {
state = {
  characters: []
}
componentDidMount(){
  getList()
    .then(name => this.setState({ characters: name }));

}
 
  render() {
  const { characters } = this.state;
  const nameList = characters.map(character => (
    <li key={character}>
      <span>{character.name}</span>
    </li>
  ));
 
return( 

<ul>
  {nameList}

</ul>

);

}

}
