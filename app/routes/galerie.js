var GalerieRoute = Ember.Route.extend({
  model:function(){
    return this.get('store').find('galerie');
  }
});

export default GalerieRoute;