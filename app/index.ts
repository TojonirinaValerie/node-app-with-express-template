import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import route from './routes/index.route';

// ------------------- App configs ---------------------------
const app: Express = express();

app.use(bodyParser.json())
app.use((req:Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, x-acces-token');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
// -----------------------------------------------------------

// ---------------------- Routes -----------------------------

app.get('/', (req: Request, res: Response, next: NextFunction) =>{
  res.json({
    succes: true,
    message: "Bienvenue sur l'application"
  });
});

app.use('/api/user', route.user);

// -----------------------------------------------------------

const PORT = process.env.port || 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});