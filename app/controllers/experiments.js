var ExperimentsController = Ember.Controller.extend({
  path:Ember.A(),
  chemin:function(){
    return this.get('path').reverse();//.reverse().join('>');
  }.property('path.@each')
});

export default ExperimentsController;