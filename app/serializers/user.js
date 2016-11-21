import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeResponse(store, type, payload) {
    return {
      data: {
	id: payload.name,
        name: payload.name,
        type: type.modelName,
        surname: payload.surname,
	gender: payload.gender,
	region: payload.region
      }
    };
  },
});
