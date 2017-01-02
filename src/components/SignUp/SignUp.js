import React from 'react';
import {Link} from 'react-router';
import {Label, Input, FormHorizontal, Group, Button} from 're-bulma';

export default class SignUp extends React.Component {
  
  
  render(){
    const inputStyle = {
      width: "90%",
      margin:"0 auto"
    }
    return (
      <div>
        <div className="salutation">
          Hi There! Thanks for Joining Us!
        </div>
        <div className="salutation">
          Let's get started with some basic info
        </div>
        <form action="signup">
          <Label className="label">Name</Label>
          <Input style={inputStyle} type="text" placeholder="Text input" />
          <Label className="label">E-Mail</Label>
          <Input style={inputStyle} type="text" placeholder="Text input" />
          <Label className="label">Password</Label>
          <FormHorizontal>
            <Group>
              <Input style={inputStyle} type="text" placeholder="Text input" />
              <Input style={inputStyle} type="text" placeholder="Text input" />
            </Group>
          </FormHorizontal>
          <Link to="/signup/prefs">
            <Button color="isSuccess" icon="fa fa-arrow-right" isIconRight>Next</Button> 
          </Link>
          
        </form>
      </div>
    )
  }
}
