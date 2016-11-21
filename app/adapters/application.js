import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: "http://uinames.com",
  namespace: "api",
  pathForType: function(user) {
    return '?amount=1&ext';
  }
});
