import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});


export default Router.map(function() {
  this.resource('truths', {path: '/'}, function() {
    this.resource('truth', { path: ':truth_name' });
  });
});
