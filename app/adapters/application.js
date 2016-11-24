import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: "https://randomuser.me",
  namespace: "api",
  pathForType: function(user) {
    return null;
  }
});
