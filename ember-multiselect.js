(function() {
  Em.TEMPLATES["components/multi-select"] = Em.Handlebars.template(function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
    var buffer = '', stack1, stack2, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n  <div class=\"dropdown-menu\" role=\"menu\" style=\"width:300px\">\n  ");
  hashContexts = {'type': depth0,'class': depth0,'value': depth0,'placeholder': depth0,'autofocus': depth0};
  hashTypes = {'type': "STRING",'class': "STRING",'value': "ID",'placeholder': "STRING",'autofocus': "STRING"};
  options = {hash:{
    'type': ("text"),
    'class': ("form-control"),
    'value': ("searchText"),
    'placeholder': ("Type to search"),
    'autofocus': ("autofocus")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  <br/>\n  <div class=\"toolbar\">\n      <button ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.action || depth0.action),stack1 ? stack1.call(depth0, "selectAll", options) : helperMissing.call(depth0, "action", "selectAll", options))));
  data.buffer.push(" type=\"button\" class=\"btn btn-default\">Select All</button>\n      <button ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.action || depth0.action),stack1 ? stack1.call(depth0, "deselectAll", options) : helperMissing.call(depth0, "action", "deselectAll", options))));
  data.buffer.push(" type=\"button\" class=\"btn btn-default\">De-select All</button>\n  </div>\n  <br/>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "noRecords", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </div>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n  <p><span class=\"label label-warning\">Note:</span> No records matching your filter. Try * to get some records</p>\n  ");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  <table class=\"table table-hovered table-striped\">\n  <tbody>\n    ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "r", "in", "filteredRecords", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n  </table>\n  ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n    <tr>\n      <td>");
  hashContexts = {'type': depth0,'name': depth0,'checked': depth0};
  hashTypes = {'type': "STRING",'name': "STRING",'checked': "ID"};
  options = {hash:{
    'type': ("checkbox"),
    'name': ("r.selected"),
    'checked': ("r.selected")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</td>\n      <td><span ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.action || depth0.action),stack1 ? stack1.call(depth0, "select", "r", options) : helperMissing.call(depth0, "action", "select", "r", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['get-name'] || depth0['get-name']),stack1 ? stack1.call(depth0, "r", "displayName", options) : helperMissing.call(depth0, "get-name", "r", "displayName", options))));
  data.buffer.push("</span></td>\n    </tr>\n    ");
  return buffer;
  }

  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push("\n<div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":btn-group isOpen:open")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n  <button class=\"btn btn-default dropdown-toggle\" ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.action || depth0.action),stack1 ? stack1.call(depth0, "toggleOpen", options) : helperMissing.call(depth0, "action", "toggleOpen", options))));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers._triageMustache || depth0._triageMustache),stack1 ? stack1.call(depth0, "name", options) : helperMissing.call(depth0, "_triageMustache", "name", options))));
  data.buffer.push(" (");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers._triageMustache || depth0._triageMustache),stack1 ? stack1.call(depth0, "selectedRecordsNum", options) : helperMissing.call(depth0, "_triageMustache", "selectedRecordsNum", options))));
  data.buffer.push(") <span class=\"caret\"></span></button>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "isOpen", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n</div>\n  ");
  return buffer;
  });

  Em.MultiSelectComponent = Em.Component.extend({
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
    }.observes('content.@each'),
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
      }
    }
  });

  Em.Handlebars.helper('multi-select', Em.MultiSelectComponent);

  Em.Handlebars.registerBoundHelper('get-name', function(record, fieldName) {
    return new Em.Handlebars.SafeString(record.get(fieldName) || "");
  });
})();
