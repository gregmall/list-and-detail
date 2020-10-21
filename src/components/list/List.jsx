import React, { Component } from 'react';
import { getList } from '../../services/getList.js'
import { Link } from 'react-router-dom'
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
    <Link className="character-link" to={`/detail/${character.id}`} key={`${characters.id}`}>
    <li key={character}>
      <span>{character.name}</span>
    </li>
    </Link>
  ));
 
return( 

<ul>
  {nameList}

</ul>

);
}

}
