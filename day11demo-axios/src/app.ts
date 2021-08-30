import axios from "axios";


let options:any = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: 'India'},
  headers: {
    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
    'x-rapidapi-key': 'nNbGL5Fj3Omsh4mg1TlkbGmBj4ypp1N4lBxjsnyzNvCiQ7DkpZ'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
