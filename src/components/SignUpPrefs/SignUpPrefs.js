import React from 'react';
import {Link} from 'react-router';
import {Container, Label, Input, FormHorizontal, Group, Button} from 're-bulma';

export default class SignUpPrefs extends React.Component { 
  
  render(){
    return (
      <Container>
        <div>
          Which of these brands do you enjoy?
        </div>
        <Button color="isSuccess" icon="fa fa-arrow-right" isIconRight>Next</Button> 
      </Container>
    )
  }
}
