export default Em.Controller.extend({
  content: function() {
    return [
      Em.Object.create({displayName: "Alfred Hitchcock"}),
      Em.Object.create({displayName: "Tom Clancy"}),
      Em.Object.create({displayName: "Bryce Courtenay"}),
      Em.Object.create({displayName: "JRR Tolkien"}),
      Em.Object.create({displayName: "CS Lewis"})];
  }.property()
});
