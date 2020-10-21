import React, { Component } from 'react' 
import { getById } from '../../services/getById'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
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
    <h1>{character.name}</h1>
    <img src={character.image}/>
    <button onClick={() => history.goBack()}>Back</button>

  </div>



);


}


}
