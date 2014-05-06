export default Em.Handlebars.makeBoundHelper(function(record, fieldName) {
  return record.get(fieldName) || "";
});
