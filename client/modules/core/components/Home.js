import React from 'react';
import TextField from 'material-ui/lib/text-field';

const Home = () => (
  <div style={styles.container}>
    <h1>Welcome to Philt.her</h1>
    <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
    /><br/>
    <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
    /><br/>

  </div>
);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {

  },
};

export default Home;
