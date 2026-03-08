import express from 'express'
import morgan from 'morgan';
import logger from './utils/logger'

let app = express();


app.use(express.json());
app.use(morgan('dev'));

let PORT = 3000;


app.get("/", (req, res) => {
    res.send("App is working")
})

app.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}`);
})