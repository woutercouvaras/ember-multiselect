(function() {
  Em.TEMPLATES["components/multi-select"] = Em.Handlebars.template(function anonymous(Handlebars, depth0, helpers, partials, data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      data.buffer.push("\n  <p><span class=\"label label-warning\">Note:</span> No records matching your filter. Try * to get some records</p>\n  ");
    }

    function program3(depth0,data) {
      var buffer = '', stack1;
      data.buffer.push("\n  <table class=\"table table-hovered table-striped\">\n  <tbody>\n    ");
      stack1 = helpers.each.call(depth0, "r", "in", "filteredRecords", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </tbody>\n  </table>\n  ");
      return buffer;
    }

    function program4(depth0,data) {
      var buffer = '', helper, options;
      data.buffer.push("\n    <tr>\n      <td>");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'type': ("checkbox"),
        'name': ("r.selected"),
        'checked': ("r.selected")
      },hashTypes:{'type': "STRING",'name': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'name': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("</td>\n      <td><span ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "select", "r", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(">");
      data.buffer.push(escapeExpression((helper = helpers['get-name'] || (depth0 && depth0['get-name']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "r", "displayName", options) : helperMissing.call(depth0, "get-name", "r", "displayName", options))));
      data.buffer.push("</span></td>\n    </tr>\n    ");
      return buffer;
    }

      data.buffer.push("<div ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': (":btn-group isOpen:open")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n<button class=\"btn btn-default dropdown-toggle\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleOpen", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">");
      stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push(" (");
      stack1 = helpers._triageMustache.call(depth0, "selectedRecordsNum", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push(") <span class=\"caret\"></span></button>\n  <div class=\"dropdown-menu\" role=\"menu\" style=\"width:300px\">\n  ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'type': ("text"),
        'class': ("form-control"),
        'value': ("searchText"),
        'placeholder': ("Type to search"),
        'autofocus': ("autofocus")
      },hashTypes:{'type': "STRING",'class': "STRING",'value': "ID",'placeholder': "STRING",'autofocus': "STRING"},hashContexts:{'type': depth0,'class': depth0,'value': depth0,'placeholder': depth0,'autofocus': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n  <br/>\n  <div class=\"toolbar\">\n      <button ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectAll", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(" type=\"button\" class=\"btn btn-default\">Select All</button>\n      <button ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "deselectAll", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(" type=\"button\" class=\"btn btn-default\">De-select All</button>\n  </div>\n  <br/>\n  ");
      stack1 = helpers['if'].call(depth0, "noRecords", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </div>\n</div>\n");
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
