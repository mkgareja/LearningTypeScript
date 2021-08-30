import express from 'express';
import request from 'request';
import cors from 'cors';


const app = express();
const port = 3001;
app.use(cors({
    origin: '*'
  }));
app.get('/', (req, res) => {
    //   res.send('Hey There!');


    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        qs: { q: 'game of thr' },
        headers: {
            'x-rapidapi-host': 'imdb8.p.rapidapi.com',
            'x-rapidapi-key': 'nNbGL5Fj3Omsh4mg1TlkbGmBj4ypp1N4lBxjsnyzNvCiQ7DkpZ',
            useQueryString: true
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        // req.re body;
        res.send(body)
    });
});
app.listen(port, () => {
//   if (err) {
//     return console.error(err);
//   }
  return console.log(`server is listening on ${port}`);
});