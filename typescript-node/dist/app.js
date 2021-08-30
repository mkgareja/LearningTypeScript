"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const request_1 = __importDefault(require("request"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3001;
app.use((0, cors_1.default)({
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
    (0, request_1.default)(options, function (error, response, body) {
        if (error)
            throw new Error(error);
        console.log(body);
        // req.re body;
        res.send(body);
    });
});
app.listen(port, () => {
    //   if (err) {
    //     return console.error(err);
    //   }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map