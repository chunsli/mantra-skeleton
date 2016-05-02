import React from 'react';
import Paper from 'material-ui/lib/paper';
import YesIcon from 'material-ui/lib/svg-icons/action/done';
import NoIcon from 'material-ui/lib/svg-icons/content/clear';

class ViewProfile extends React.Component {

  render() {
    return (
      <div style={styles.container}>
        <Paper style={styles.card}>
          <img
            src="http://placecage.com/200/200"
            style={styles.profilePic}
          />
          <div style={styles.name}>Nicholas</div>
          <div style={styles.badgeList}>
            <div style={styles.badge}>Sporty</div>
            <div style={styles.badge}>Talkative</div>
            <div style={styles.badge}>Realistic Pictures</div>
          </div>
          <div style={styles.buttonContainer}>
            <div style={styles.noButton}>
              <NoIcon color='white' style={styles.buttonIcon}/>
            </div>
            <div style={styles.yesButton}>
              <YesIcon color='white' style={styles.buttonIcon}/>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'sans-serif',
    width: '200px',
  },
  profilePic: {

  },
  name: {
    margin: '10px',
    fontSize: '16px',
    fontWeight: '700',
    alignSelf: 'flex-start',
  },
  badgeList: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 10px 10px 10px',
  },
  badge: {
    padding: '4px 6px',
    borderRadius: '6px',
    backgroundColor: '#aaa',
    color: 'white',
    fontSize: '12px',
    margin: '4px',
  },
  buttonContainer: {
    width: '200px',
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '10px',
  },
  yesButton: {
    height: '80px',
    width: '80px',
    borderRadius: '40px',
    color: 'white',
    backgroundColor: '#2ECC40',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  noButton: {
    height: '80px',
    width: '80px',
    borderRadius: '40px',
    color: 'white',
    backgroundColor: '#ff4136',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  buttonIcon: {
    width: '36px',
    height: '36px',
  },
};

export default ViewProfile;
