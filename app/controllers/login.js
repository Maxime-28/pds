import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  queryParams: ['_sid', '_uid'],

  actions: {
    authenticate() {

      var sid = this.get('_sid');
      var uid = this.get('_uid');

      console.log(uid);
      this.get('session').authenticate('authenticator:ulb', sid, uid).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
