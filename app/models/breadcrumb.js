/**
 * BreadcrumbModel
 * Travailler avec des niveaux car le crawler peut les donner
 */

var BreadcrumbModel = DS.Model.extend({
  links: DS.hasMany('link',{async:true}),
  root:  DS.belongsTo('link',{async:true}),
  parent:DS.belongsTo('breadcrumb'),
  level: DS.attr('number')
});

BreadcrumbModel.FIXTURES = [
  {
    id:1,
    root:1, // A
    links:[6,7], // AA - AB
    level:0
  },
    {
      id:2,
      root:6, // AA
      links:[8,9],  // AAA - AAB
      parent:1, 
      level:1
    }
  //   ,
  // {
  //   id:3,
  //   root:2, // B
  //   links:[10] // BA
  // },
  // {
  //   id:4,
  //   root:3, // C
  //   links:[11] // CA
  // },
  //   {
  //     id:5,
  //     root:11, // CA
  //     links:[12], // CAA
  //     parent:4 // C
  //   },
  //     {
  //       id:6,
  //       root:12, // CAA
  //       links:[13], // CAAA
  //       parent:5 // CA
  //     }
  
];

export default BreadcrumbModel;