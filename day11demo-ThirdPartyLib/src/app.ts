import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';
// import axios from "axios";
declare var temp1: string;
// var _ = require('lodash');
import _ from 'lodash';

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');

console.log(_.chunk (['a', 'b', 'c', 'd'], 2));
let users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];


  let temp = _.findIndex(users, function(o) { return o.user == 'mahesh'; });

  console.log(`temp==> ${temp}`)
console.log(`temp1==> ${temp1}`);



// let options:any = {
//     method: 'GET',
//     url: 'https://imdb8.p.rapidapi.com/auto-complete',
//     params: {q: 'India'},
//     headers: {
//       'x-rapidapi-host': 'imdb8.p.rapidapi.com',
//       'x-rapidapi-key': 'nNbGL5Fj3Omsh4mg1TlkbGmBj4ypp1N4lBxjsnyzNvCiQ7DkpZ'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });
