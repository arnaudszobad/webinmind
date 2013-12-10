// ########## MODELS ##########
var Galerie = DS.Model.extend({
  nom:  DS.attr('string'),
  link: DS.attr('string'),
  img:  DS.attr('string')
});



// ########## FIXTURES ##########
Galerie.FIXTURES = [
 {
  id:1,
  nom:'frame25',
  link:'http://www.frame25.net',
  img:'/assets/img/contenu/galerie/site-1.jpg'
 },
 {
  id:2,
  nom:'webinmind',
  link:'http://www.frame25.net/webinmind',
  img:'/assets/img/contenu/galerie/site-2.jpg'
 },
 {
  id:3,
  nom:'kiwixi',
  link:'http://www.kiwixi.com',
  img:'/assets/img/contenu/galerie/site-3.jpg'
 },
 {
  id:4,
  nom:'frame25',
  link:'http://www.frame25.net',
  img:'/assets/img/contenu/galerie/site-1.jpg'
 },
 {
  id:5,
  nom:'webinmind',
  link:'http://www.frame25.net/webinmind',
  img:'/assets/img/contenu/galerie/site-2.jpg'
 }
];

export default Galerie;