import DS from 'ember-data';

export default DS.Model.extend({
  region: DS.attr('string'),
  gender: DS.attr('string'),
  name: DS.attr('string'),
  surname: DS.attr('string'),
  age: DS.attr('number'),
  phone: DS.attr('string'),
  birthday: DS.attr('date'),
  email: DS.attr('string'),
  photo: DS.attr('string')
});
