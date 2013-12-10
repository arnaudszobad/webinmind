var BreadCrumbComponent = Ember.Component.extend({
  classNames: ['slidy-breadcrumb'],
  // menu:null,
  // currentLink:null,
  // oldLink:null,
  // tree:Ember.A(),
  // currentBc:0,
  // currentTree:Ember.A(),
  didInsertElement:function(){
    // console.log('didInsertElement');
    // console.log(this.get('currentTree'));
  },
  willInsertElement:function(){
    // console.log('willInsertElement');
    // console.log(this.get('menu'));
    // this.set('menu',this.get('menu'));
  },
  actions:{
    getLink:function(link){
      // this.set('oldLink',this.get('currentLink'));
      // this.set('currentLink',link);

      // this.set('currentTree',this.get('menu').find('link',{id:link.breadcrumb}));
    }
  }
});
export default BreadCrumbComponent;