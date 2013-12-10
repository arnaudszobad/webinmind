var ExperimentsRoute = Ember.Route.extend({
  setupController:function(controller,model){
    controller.set('content',model);
  },
  model:function () {
    return this.get('store').find('breadcrumb');
  }
  
});

export default ExperimentsRoute;