var ExperimentsRoute = Ember.Route.extend({
  breadcrumb:null,
  truc:null,
  pathTo:null,
  beforeModel:function(){
    if(this.get('truc')===null){
      this.set('truc','no link');
    }
  },
  setupController:function(controller,model){
    controller.set('content',model);
  },
  model:function () {
    return this.get('store').find('link');
  },
  actions:{
    getPathTo:function(item){
      console.log('getCurrentLink');
      this.set('pathTo',item);
    },
    willTransition: function(transition) {
      console.log('pathTo before:'+this.get('pathTo'));
      this.set('pathTo',transition.targetName);
      console.log('pathTo after:'+this.get('pathTo')); // marche pas
      // createRecord()
      transition.abort();
    }
  }
});

export default ExperimentsRoute;
