var ExperimentsRoute = Ember.Route.extend({
  breadcrumb:null,
  linkTo:null,
  routeTo:null,
  beforeModel:function(){
    // console.log('beforeModel');
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
    // console.log('afterModel');
  },
  actions:{
    getLinkTo:function(item){
      console.log('getLinkTo');
      var level = item.get('level');
      for(var i = level;i>=0;i--){
        this.get('controller.path').pushObject(item);
        if(item.get('parent')){
          item = item.get('parent');
        }
      }
      // this.transitionTo(item.get('route'));
    },
    willTransition: function(transition) {
      console.log('willTransition');
    //   this.set('routeTo',transition.targetName);
    //   // createRecord()
    //   transition.abort();
    }
  }
});

export default ExperimentsRoute;
