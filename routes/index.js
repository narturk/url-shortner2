import validateURL from '../validateURL/validateURL.js';
import bodyParser from 'body-parser';
import Url from '../urlSchema/Url.js';
import { nanoid } from 'nanoid';
import express from 'express';
var app = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/short', async function (req, res) {
    const validateUrlFLAG = await validateURL(req.body.origUrl);
    if (!validateUrlFLAG){
        res.status(400).json({ message: "Url is not valid." });
    }else{
        const isUrlExist = await Url.findOne({ origUrl: req.body.origUrl }).exec();
        if(isUrlExist){
            res.json({
                message: 'URL already exist.',
                shortUrl: isUrlExist.shortUrl
            });
        }else{
            const newUrlId = nanoid()
            const newUrl = new Url({
                urlId: newUrlId,
                origUrl: req.body.origUrl,
                shortUrl: 'http://localhost:3000/' + newUrlId,
                date: Date.now()
            });
            await newUrl.save();
            res.json(newUrl);
        }
    }
});


export default app;
