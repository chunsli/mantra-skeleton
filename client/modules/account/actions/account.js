import { Accounts } from 'meteor/accounts-base';

export default {
  login({Meteor, FlowRouter}, email, password) {
    console.log(`login ${email} ${password}`)
    Meteor.loginWithPassword(email, password, err => {
      if (err) { alert(err); }
    });
  },

  logout({Meteor, FlowRouter}) {
    Meteor.logout(err => {
      if (err) { alert(err); }
      else {
        FlowRouter.go('/');
      }
    });
  },

  create({Meteor, FlowRouter}, email, password) {
    console.log(`create ${email} ${password}`)
    Accounts.createUser({email, password}, err => {
      if (err) { alert(err); }
      else {
        FlowRouter.go('/CreateProfile');
      }
    });
  },

  createProfile({Meteor}, name, age, gender, url) {
    console.log(`createProfile ${name} ${age} ${gender} ${url}`)
    Meteor.call('account.createProfile', {name, age, gender, url}, err => {
      if (err) { alert(err); }
    });
  }
};
