ec-multiselect
==============

Multi-select dropdown box with batteries

Usage
====
1. Include `ember-typeaheadjs` in your project
2. Include it in your template as follows:

    {{multi-select content=books name="books" selections=selectedBooks}}

`name` is the button label
`content` contains the list of items
`selections` is the controller variable that will be populated with the selected records
