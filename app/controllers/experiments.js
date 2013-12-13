var ExperimentsController = Ember.Controller.extend({
  path:Ember.A(),
  chemin:function(){
    console.log('chemin',this.get('path'));
    return this.get('path');//.join('>');
  }.property('path.@each')
});

export default ExperimentsController;