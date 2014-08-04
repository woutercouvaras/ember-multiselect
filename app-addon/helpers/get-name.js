import Em from 'ember';

export default Em.Handlebars.makeBoundHelper(function(obj, field) {
  return obj.get(field);
});
