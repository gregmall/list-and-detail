import React, { Component } from 'react' 
import { getById } from '../../services/getById'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default class Detail extends Component {
  
state = {character: ''}
static PropTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
};


componentDidMount = async () => {
  const characterId = this.props.match.params.id;
  console.log(characterId)
  await getById(characterId)
  .then(character => this.setState({ character }));
  

}

render() {
  const { character } = this.state;
  
 
return(
  <div>
    
    <h1>Name: {character.name}</h1>
    <img src={character.image}/>
    <h2>Status: {character.status}</h2>
    <h2>Gender: {character.gender}</h2>
    <h2>Created: {character.created}</h2>
    <Link to="/list"><button>GO BACK</button></Link>
    
  </div>

);

}

}
