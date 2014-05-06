export default Em.Controller.extend({
  selectedAuthors: [],
  selectedBooks: [],
  authors: function() {
    return [
      Em.Object.create({name: "Alfred Hitchcock"}),
      Em.Object.create({name: "Tom Clancy"}),
      Em.Object.create({name: "Bryce Courtenay"}),
      Em.Object.create({name: "JRR Tolkien"}),
      Em.Object.create({name: "CS Lewis"})];
  }.property(),
  books: function() {
    return [
      Em.Object.create({name: "Nursery Rhymes"}),
      Em.Object.create({name: "Calvin and Hobbs"}),
      Em.Object.create({name: "Batman"}),
      Em.Object.create({name: "Programming made extra easy"}),
      Em.Object.create({name: "Evaluating Financial Markets"})];
  }.property(),
  selectedAuthorsNo: function() {
    return this.get('selectedAuthors.length');
  }.property('selectedAuthors'),
  selectedBooksNo: function() {
    return this.get('selectedBooks.length');
  }.property('selectedBooks')

});
