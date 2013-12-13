var LinksView = Ember.CollectionView.extend({
  itemViewClass:'LinkView',
  tagName:'ul',
  className:'link-item',
  content:function(){
    this.controllerFor('experiments').get('path');
  }
  
});

export default LinksView;