import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  store: Ember.inject.service('store'),
  tokenEndpoint: 'http://www.ulb.ac.be/commons/check',

  restore(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },

  authenticate(options) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: this.tokenEndpoint,
        type: 'GET',
	data: {
          _sid: "asdf",
          _uid: "qert",
	  _type: "normal"
        },
        contentType: 'text/xml',
        dataType: 'json'
      }).then(function(response) {
        Ember.run(function() {
          resolve({
            token: response.id_token
          });
        });
      }, function(xhr, status, error) {
        var response = xhr.responseText;
        Ember.run(function() {
          reject(response);
        });
      });
    });
  },

  invalidate(data) {

  }
});
