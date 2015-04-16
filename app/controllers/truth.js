import Ember from 'ember';

export default Ember.Controller.extend({
  needs: "truth",

  category: Ember.computed.alias('model.firstObject.category'),

  searchTerm: '',

  category: function () {
    return this.get('category');
  }.property('model'),

  matchingPosts: function () {
    return this.get('model');
  }.property('model'),

  defaultPost: function () {
    return this.get('model.firstObject');
  }.property('model'),

  isElvis: Ember.computed.equal('category', 'Elvis'),

  isUFO: function () {
    return this.get('model.firstObject.category') === "UFO"
  }.property('model'),

  isTupac: function () {
    return this.get('model.firstObject.category') === "Tupac"
  }.property('model'),

  isGhost: function () {
    return this.get('model.firstObject.category') === "Ghost"
  }.property('model'),

  isBigfoot: function () {
    return this.get('model.firstObject.category') === "Bigfoot"
  }.property('model'),
});
