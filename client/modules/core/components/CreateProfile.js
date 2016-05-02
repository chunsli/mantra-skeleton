import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import RadioButtonGroup from 'material-ui/lib/radio-button-group';
import RadioButton from 'material-ui/lib/radio-button';

class CreateProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
  	const src = "http://www.placecage.com/" + Math.floor(Math.random() * 1000 + 200) + "/" + Math.floor(Math.random() * 1000 + 200)
    return (
  		
		<div style={styles.container}>
			<h1> Create Profile </h1>
	        <img
	       	  src={src}
	       	  style={styles.img}
       	  	/>
	        <TextField
	          hintText="Name"
	          floatingLabelText="Name"
	          style={styles.textfield}
	        />
	        <TextField
	          hintText="Age"
	          floatingLabelText="Age"
	          min = "18"
	          max = "65"
	          type="number"
	          style={styles.textfield}
	        />
	        <RadioButtonGroup name="gender" defaultSelected="male" style={styles.radioButtonGroup}>
		      <RadioButton
		        value="male"
		        label="Male"
		        style={styles.radioButton}
		      />
		      <RadioButton
		        value="female"
		        label="Female"
		        style={styles.radioButton}
		      />
		    </RadioButtonGroup>
	        <RaisedButton
	          label="Done"
	          primary={true}
	          style={styles.button}
	        />
	        
      </div>

    	)
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
    margin: '15px',
  },
  toolbar:{
  	width:'100%',
  },
 
  radioButtonGroup: {
  	display: 'flex',
  	justifyContent:'center',
  },
  radioButton:{
  	width:'auto',
  	margin:'15px',
  },
  img: {
  	maxHeight: '300px',
  	maxWidth: '200px',
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

export default CreateProfile;
