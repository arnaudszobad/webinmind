var ApplicationController = Ember.Controller.extend({
  isOpen:false,
  actions:{
    toggleOpenstate:function(){
      this.set('isOpen',!this.get('isOpen'));
    }
  }
});

export default ApplicationController;