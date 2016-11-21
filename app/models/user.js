import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  region: DS.attr('string'),
  gender: DS.attr('string'),
  name: DS.attr('string'),
  surname: DS.attr('string')
});
