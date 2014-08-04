import Em from 'ember';

export default Em.Controller.extend({
  myList: function() {
    return [
      Em.Object.create({'name': 'me', 'showme': "Pick Me"}),
      Em.Object.create({'name': 'you', 'showme': "Pick you"})
    ];
  }.property(),
  pplComing: Em.A([]),
  dropdownOpen: false
});
