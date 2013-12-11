var ExperimentsRoute = Ember.Route.extend({
  breadcrumb:null,
  linkTo:null,
  routeTo:null,
  path:Ember.A(),
  chemin:function(){
    return this.get('path').reverse().join('>');
  }.property('path'),
  beforeModel:function(){
    console.log('beforeModel');
    if(this.get('linkTo')===null){
      this.set('linkTo','no link');
    }
  },
  setupController:function(controller,model){
    controller.set('content',model);
  },
  model:function () {
    return this.get('store').find('link');
  },
  afterModel:function(){
    console.log('afterModel');
  },
  actions:{
    getLinkTo:function(item){
      var level = item.get('level');
      this.get('path').push(item);
      for(var i = level;i>=0;i--){
        if(item.get('parent')){
          this.get('path').push(item);
          item = item.get('parent');
        }
      }
      // console.log(this.get('path').reverse().join('>'));
      // this.set('chemin',this.get('path').reverse().join('>')),
      // console.log(this.get('chemin'));
      this.transitionTo(this.get('routeTo'));
    },
    willTransition: function(transition) {
      console.log('willTransition');
      this.set('routeTo',transition.targetName);
      // createRecord()
      transition.abort();
    }
  }
});

export default ExperimentsRoute;
