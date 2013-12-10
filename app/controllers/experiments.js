var ExperimentsController = Ember.Controller.extend({
  linkSelected:null,
  path:"",
  actions: {
    // Récupère le Link cliqué
    // <item> : LinkModel
    getLink:function(item){ 
      this.set('linkSelected',item);
      console.log('item.id:'+item.get('id'));
      this.set('path'," < "+item.get('label'));
      var tmp = [];
      if(item.get('breadcrumb')!==null){
        var currentBC = item.get('breadcrumb');
        console.log('currentBC.level:'+currentBC.get('level'));
        // ici on garde les 'root'

        //ici on fouille les sous-liens
        for(var i = currentBC.get('level');i>=0;i--){
          if(item===currentBC.get('root')){
            this.set('path'," < "+currentBC.get('root.label')+"(root)");  
          }
          else{
            this.set('path'," < "+currentBC.get('root.label')+" < "+currentBC.get('parent.root.label'));  
          }

        }
        console.log(this.get('path'));
        // if(currentBC.get('root')===item){
        //   this.set('path',item.get('label'));
        // }
        // else{
          // while(currentBC.get('parent')!==undefined){
          //   console.log('getParent');
          //   var parent = currentBC.get('parent');
          //   console.log("currentBC.get('parent'):"+currentBC.get('parent'));
          //   tmp.push(parent.get('root').get('label'));
          // }
          // tmp.reverse();
          // console.log("tmp.join('>')"+tmp.join('>'));
          // this.set('path',tmp.join('>'));
        // }
        // console.log('path:'+this.get('path'));
      }
      else{
        console.log('no bc');
      }
    }
  }
});

export default ExperimentsController;