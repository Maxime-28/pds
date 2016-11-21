import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: 'name',
  normalizeResponse(store, type, payload) {
    return {
      data: {
	id: payload.name,
        type: type.modelName,
	attributes: {
	  name: payload.name,
          surname: payload.surname,
	  gender: payload.gender,
	  region: payload.region,
	  age: payload.age,
	  phone: payload.phone,
	  birthday: payload.birthday.dmy,
	  email: payload.email,
	  photo: payload.photo
	}
      }
    };
  },
});
