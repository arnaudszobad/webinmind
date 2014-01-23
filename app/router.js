var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
	this.route('component-test');
  this.route('helper-test');
  // put your routes here
  this.route('index');
  this.route('sliding');
  this.route('fullscreen');
});

export default Router;