import express from 'express';
import bodyParser from 'body-parser';
import Url from '../urlSchema/Url.js';
var app = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/:urlId', async function (req, res) {
    const isUrlExist = await Url.findOne({ urlId: req.params.urlId }).exec();
    if(isUrlExist){
        await Url.updateOne({ urlId: req.params.urlId },
             { $inc: { clicked: 1 }});
        res.status(200).redirect(isUrlExist.origUrl);
    }else{
        res.status(200).json({message: 'short url doesn`t exist.'});
    }
});


export default app;
