import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      createAccount: false,
    };

    this.handleCreate = () => this._handleCreate();
  }

  toggleState() {
    this.setState({createAccount: !this.state.createAccount});
  }

  _handleCreate() {
    const { create } = this.props;

    const username = this.username.getValue();
    const password = this.password.getValue();
    create(username, password);
  }

  renderLogin() {
    return (
      <div style={styles.container}>
        <h1>Welcome to Philt.her</h1>
        <h4>Login</h4>
        <TextField
          hintText="Username"
          floatingLabelText="Username"
          style={styles.textfield}
          ref={x => this.username = x}
        />
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
          style={styles.textfield}
          ref={x => this.password = x}
        />
        <RaisedButton
          label="Login"
          primary={true}
          style={styles.button}
        />
        <a
          href=""
          onClick={this.toggleState.bind(this)}
          style={styles.link}
        >
          Create an Account
        </a>
      </div>
    );
  }

  renderCreateAccount() {
    return (
      <div style={styles.container}>
        <h1>Welcome to Philt.her</h1>
        <h4>Create Account</h4>
        <TextField
          hintText="Username"
          floatingLabelText="Username"
          style={styles.textfield}
          ref={x => this.username = x}
        />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password"
          style={styles.textfield}
          ref={x => this.password = x}
        />
        <RaisedButton
          label="Create Account"
          primary={true}
          style={styles.button}
          onClick={this.handleCreate}
        />
        <a
          href=""
          onClick={this.toggleState.bind(this)}
          style={styles.link}
        >
          Login
        </a>
      </div>
    );
  }

  render() {
    if (this.state.createAccount) {
      return this.renderCreateAccount();
    }
    return this.renderLogin();
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  textfield: {
    margin: '5px',
  },
  button: {
    margin: '20px',
  },
  link: {
    margin: '20px',
  },
};

export default Home;
