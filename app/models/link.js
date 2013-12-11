var LinkModel = DS.Model.extend({
  url: DS.attr('string'),
  label:  DS.attr('string'),
  isActive:DS.attr('boolean'),
  breadcrumb:DS.belongsTo('breadcrumb'),
  level:    DS.attr('number'),
  parent:   DS.belongsTo('link'),
  route:    DS.attr('string')
});

LinkModel.FIXTURES = [
  // Parent A
  {
    id:1,
    url:"#",
    label:'A',
    isActive:true,
    breadcrumb:1,
    level:0,
    route:'experiments'
  },
  // Children A (start 6)
  {
    id:6,
    url:"#",
    label:'AA',
    isActive:false,
    breadcrumb:2,
    level:1,
    parent:1,
    route:'experiments'
  },
  {
    id:7,
    url:"#",
    label:'AB',
    isActive:false,
    breadcrumb:1,
    level:1,
    parent:1,
    route:'experiments'
  },
  // Children AA
  {
    id:8,
    url:"#",
    label:'AAA',
    isActive:false,
    breadcrumb:2,
    level:2,
    parent:6,
    route:'experiments'
  },
  {
    id:9,
    url:"#",
    label:'AAB',
    isActive:false,
    breadcrumb:2,
    level:2,
    parent:6,
    route:'experiments'
  },
  {
    id:14,
    url:"#",
    label:'AC',
    isActive:false,
    breadcrumb:2,
    level:1,
    parent:1,
    route:'experiments'
  }
  //,
  // Parent B
  // {
  //   id:2,
  //   url:"#",
  //   label:'B',
  //   isActive:false,
  //   breadcrumb:3
  // },
  // // Children B (start 10)
  // {
  //   id:10,
  //   url:"#",
  //   label:'BA',
  //   isActive:false
  // },
  // // Parent C
  // {
  //   id:3,
  //   url:"#",
  //   label:'C',
  //   isActive:false,
  //   breadcrumb:4
  // },
  // // Children C (start 11)
  // {
  //   id:11,
  //   url:"#",
  //   label:'CA',
  //   isActive:false,
  //   breadcrumb:5
  // },
  // // Children CA
  // {
  //   id:12,
  //   url:"#",
  //   label:'CAA',
  //   isActive:false,
  //   breadcrumb:6
  // },
  // // Children CAA
  // {
  //   id:13,
  //   url:"#",
  //   label:'CAAA',
  //   isActive:false
  // }

];

export default LinkModel;
