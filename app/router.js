var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
	this.route('component-test');
  this.route('helper-test');
  // put your routes here
  this.route('index',{path:"/"});
  this.route('galerie');
  this.route('experiments');
  this.route('links');
  this.route('blog');
});

export default Router;