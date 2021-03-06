import Em from 'ember';

export default Em.Component.extend({
  layoutName: 'components/multi-select',
  searchText: "",
  isOpen: false,
  viewLimit: 20,
  selected: null,  // bound to controller
  content: [],
  filteredRecords: [],
  displayName: 'name',
  loadRecords: function() {
    this.set('filteredRecords', this.get('content'));
  }.observes('content').on('init'),
  selectedRecords: function() {
    return this.get('content').filterBy('selected', true);
  }.property('content.@each.selected'),
  updateSelections: function() {
    this.set('selected', this.get('selectedRecords'));
  }.observes('content.@each.selected'),
  selectedRecordsNum: function() {
    return this.get('selectedRecords.length');
  }.property('selectedRecords.@each'),
  noRecords: function() {
    return this.get('filteredRecords.length') < 1;
  }.property('filteredRecords.@each'),
  updateTable: function() {
    Em.debug("Update table records");
    var fc = this.get('content'), sd = this.get('searchText'),
        dn = this.get('displayName');
    if (Em.isBlank(sd)) {
      this.set('filteredRecords', this.get('selectedRecords'));
      return;
    }
    if (sd !== '*') {
      sd = sd.toLowerCase();
      fc = fc.filter(function(row) {
        return row.get(dn).toLowerCase().indexOf(sd) > -1;
      });
    }
    if (fc.get('length') > this.get('viewLimit')) {
      fc = fc.slice(0, this.get('viewLimit'));
    }
    this.set('filteredRecords', fc);
  }.observes('searchText'),
  loadOnContentChange: function() {
    Em.run.once(this, 'updateTable');
  }.observes('content'),
  keyUp: function(e) {
    // close box on esc key
    if (e.keyCode === 27) {
      this.set('isOpen', false);
    }
  },
  submittedRecords: function() {
    return !(Em.isBlank(this.get('submit')));
  }.property('submit'),
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
    },
    toggleOpen: function() {
      this.set('isOpen', !this.get('isOpen'));
    },
    submit: function() {
      this.set('submittedRecords', this.get('selectedRecords'));
    },
    cancel: function() {
      this.get('filteredRecords').forEach(function(r) {
        r.set('selected', false);
      });
      this.set('isOpen', false);
    }
  }
});