export default Em.Controller.extend({
  selectedAuthors: [],
  selectedBooks: [],
  authors: function() {
    return [
      Em.Object.create({displayName: "Alfred Hitchcock"}),
      Em.Object.create({displayName: "Tom Clancy"}),
      Em.Object.create({displayName: "Bryce Courtenay"}),
      Em.Object.create({displayName: "JRR Tolkien"}),
      Em.Object.create({displayName: "CS Lewis"})];
  }.property(),
  books: function() {
    return [
      Em.Object.create({displayName: "Nursery Rhymes"}),
      Em.Object.create({displayName: "Calvin and Hobbs"}),
      Em.Object.create({displayName: "Batman"}),
      Em.Object.create({displayName: "Programming made extra easy"}),
      Em.Object.create({displayName: "Evaluating Financial Markets"})];
  }.property(),
  selectedAuthorsNo: function() {
    return this.get('selectedAuthors.length');
  }.property('selectedAuthors'),
  selectedBooksNo: function() {
    return this.get('selectedBooks.length');
  }.property('selectedBooks')

});
