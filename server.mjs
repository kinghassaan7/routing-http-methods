import express from 'express';

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/products', (req, res) => {
  res.status(200).json({ message : 'Get Request - fetching all products' });
});

app.post('/products', (req, res) => {
    const newItem = req.body;
  res.status(201).json({ message : 'Post Request - Posting product detail', data: newItem });
});

app.put('/products/:id', (req, res) => {
    const newItem = req.body;
    const productId = req.params.id;
  res.status(200).json({ message : `Put Request - updating product detail of product ${productId}`, data: newItem });
});

app.delete('/products/:id', (req, res) => {
    const productId = req.params.id;
  res.status(200).json({ message : `Delete Request - Posting product detail ${productId}`});
});

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});