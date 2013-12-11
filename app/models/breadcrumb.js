/**
 * BreadcrumbModel
 * 
 */

var BreadcrumbModel = DS.Model.extend({
  path: DS.hasMany('link',{async:true}),
  toString:function(){
    this.get('links').forEach(function(item){
      console.log(item.label+"--");
    });
  }.property('links'),
  first:  DS.belongsTo('link',{async:true}),
  last:  DS.belongsTo('link',{async:true}),
  maxLevel: DS.attr('number')
});

BreadcrumbModel.FIXTURES = [
  
  
];

export default BreadcrumbModel;