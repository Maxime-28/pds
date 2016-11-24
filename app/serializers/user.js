import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'name',
  normalizeResponse(store, type, payload) {
    var realdata = payload.results[0];
    return {
      data: {
	id: realdata.name.first.capitalize(),
        type: type.modelName,
	attributes: {
	  name: realdata.name.first,
          surname: realdata.name.last,
	  gender: realdata.gender,
	  region: realdata.nat,
	  age: realdata.login.username,
	  phone: realdata.phone,
	  birthday: realdata.dob,
	  email: realdata.email,
	  photo: realdata.picture.large
	}
      }
    };
  },
});
