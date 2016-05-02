import { Accounts } from 'meteor/accounts-base';

export default {
  login({Meteor, FlowRouter}, email, password) {
    console.log(`login ${email} ${password}`)
    Meteor.loginWithPassword(email, password, err => {
      if (err) { alert(err); }
      else {
        FlowRouter.go('/CreateProfile');
      }
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

  create({Meteor}, email, password) {
    console.log(`create ${email} ${password}`)
    Accounts.createUser({email, password}, err => {
      if (err) { alert(err); }
    });
  },

  setName({Meteor}, name) {
    Meteor.call('account.setName', {name}, err => {
      if (err) { alert(err); }
    });
  },

  setAge({Meteor}, age) {
    Meteor.call('account.setAge', {age}, err => {
      if (err) { alert(err); }
    });
  },

  setProfilePic({Meteor}, url) {
    Meteor.call('account.setProfilePic', {url}, err => {
      if (err) { alert(err); }
    });
  },

  setGender({Meteor}, gender) {
    Meteor.call('account.setGender', {gender}, err => {
      if (err) { alert(err); }
    });
  },
};
