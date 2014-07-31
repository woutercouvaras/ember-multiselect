#Ember CLI Multiselec

_Note_: This is very much still a work in progress. Currently it has no styles, but if you already use bootstrap 3 it will look decent.

## Description
This is multiselect box that opens beneath a button. In the box one can select elements, filter the list by a text search and select all or deselect all.

## Installation
npm install ember-cli-multiselect --save-dev

##Usage

    {{multi-select content=books name="books" selected=selectedBooks}}

`name` is the button label
`content` contains the list of items
`selections` is the controller variable that will be populated with the selected records
