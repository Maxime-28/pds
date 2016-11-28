import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['_sid', '_uid'],

  actions: {
    authenticate() {
      console.log("adsf");
    }
  }
});
