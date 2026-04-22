import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/**
 * GET /
 * Health check endpoint that returns a running message.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {void}
 */
app.get('/', (req: Request, res: Response): void => {
  res.status(200).json({ message: 'Health check pass' });
});
/**
 * GET /test
 * Health check endpoint that returns a running message.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @returns {void}
 */
app.get('/test', (req: Request, res: Response): void => {
  res.status(200).json({ message: 'Server is running----1' });
});

/**
 * POST /test
 * Echoes back the request body as the response payload.
 * @param {Request} req - Express request object containing the body payload.
 * @param {Response} res - Express response object.
 * @returns {void}
 */
app.post('/test', (req: Request, res: Response): void => {
  const requestBody = req.body;
  res.status(200).json(requestBody);
});

app.listen(PORT, () => {
  console.log(JSON.stringify({ message: `Server is running on port ${PORT}` }));
});
