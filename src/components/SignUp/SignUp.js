import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


require('./SignUp.scss');

export default class SignUp extends React.Component {

  state = {
    step: 1,
    userName: "",
    email: "",
    password: ""
  }

  handleSubmit = function (e) {
    console.log(e)
    const newStep = this.state.step + 1;
    console.log(newStep)
    e.preventDefault();
    this.setState({ step: newStep });
  }

  handleChange = function (name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  render() {

    return (
      <div className="flex signUp">
        <img src="http://s3cdn-lookbooknu.netdna-ssl.com/files/looks/medium/2017/02/16/5126006_image.jpg?1487220137" alt="logIn" />
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}  className="container">
            <div className="topCopy">
              <h1>The Most Personal Fashion Online</h1>
              <h2>Find outfit suggestions, new clothes, new styles, and more!</h2>
            </div>
            <div className="oAuth">
              Sign In Via Facebook
          </div>
            <hr />
            <div className="createAccount">
              <div>Create An Account</div>
              <form action="signup" onSubmit={this.handleSubmit.bind(this)}>
                <Input className="inputStyle" name="userName"
                  type="text" placeholder="User Name"
                  value={this.state.userName}
                  onChange={this.handleChange.bind(this, 'userName')} />
                <Input className="inputStyle" name="email"
                  type="text" placeholder="E-Mail"
                  value={this.state.email}
                  onChange={this.handleChange.bind(this, 'email')} />
                <Input className="flexRowInput" name="password"
                  type="password" placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange.bind(this, 'password')} />
                <Input className="flexRowInput" name="confirmPassword"
                  type="password" placeholder="Confirm Password"
                  onChange={this.handleChange} />
                <button>Submit</button>
              </form>
            </div>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

const Input = (props) => (
  <div className="Input">
    <input onChange={props.onChange} id={props.name} autoComplete="false" value={props.value} type={props.type} placeholder={props.placeholder} />
    <label htmlFor={props.name}></label>
  </div>)

/**
<Link to="/signup/prefs">
                <Button color="isSuccess" icon="fa fa-arrow-right" isIconRight>Next</Button>
              </Link>
**/
