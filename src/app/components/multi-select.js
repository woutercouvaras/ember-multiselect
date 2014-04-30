export default Em.Component.extend({
  searchText: "",
  viewLimit: 20,
  content: [],
  filteredRecords: [],
  loadRecords: function() {
    this.set('filteredRecords', this.get('content'));
  }.observes('content').on('init'),
  selectedRecords: function() {
    return this.get('filteredRecords').filterBy('selected', true);
  }.property('filteredRecords.@each.selected'),
  noRecords: function() {
    return this.get('filteredRecords.length') < 1;
  }.property('filteredRecords.@each'),
  updateTable: function() {
    Em.debug("Update table records");
    var fc = this.get('content'), sd = this.get('searchText');
    if (Em.isBlank(sd)) {
      this.set('filteredRecords', this.get('selectedRecords'));
      return;
    }
    if (sd !== '*') {
    sd = sd.toLowerCase();
      fc = fc.filter(function(row) {
        return row.displayName.toLowerCase().indexOf(sd) > -1;
      });
    }
    if (fc.get('length') > this.get('viewLimit')) {
      fc = fc.splice(0, this.get('viewLimit'));
    }
    this.set('filteredRecords', fc);
  }.observes('searchText'),
  actions: {
    selectAll: function() {
      this.get('filteredRecords').forEach(function(r) {
        r.set('selected', true);
      });
    },
    deselectAll: function() {
      this.get('filteredRecords').forEach(function(r) {
        r.set('selected', false);
      });
    },
    select: function(record) {
      record.set('selected', !record.get('selected'));
    }
  }
});
