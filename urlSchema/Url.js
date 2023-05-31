import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    urlId: String,
    origUrl: String,
    shortUrl: String,
    clicked: { type: Number, default: 0 },
    date: { type: Date, default: Date.now() }
});

const Url = mongoose.model('url', urlSchema);

export default Url;
