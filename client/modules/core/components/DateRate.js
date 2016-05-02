import React from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Checkbox from 'material-ui/lib/checkbox';
import Toggle from 'material-ui/lib/toggle';
import RaisedButton from 'material-ui/lib/raised-button';

class DateRate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
  		
		<div style={styles.container}>
        <List>
          <img 
            src={this.props.img}
            maxHeight="300px"
            maxWidth="300px"
          />
        </List>      
        <Divider />
        <List subheader="Hangout notifications">
          <ListItem primaryText="Badge 1" leftCheckbox={<Checkbox />} name="b1"/>
          <ListItem primaryText="Badge 2" leftCheckbox={<Checkbox />} name="b2"/>
          <ListItem primaryText="Badge 3" leftCheckbox={<Checkbox />} name="b3"/>
        </List>
	       
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

export default DateRate;
