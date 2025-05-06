import express from 'express';
import connectDB from './database/conn.js'
import Livro from './models/Livro.js';

const app = express();
const PORT = 3000;

app.use(express.json());

connectDB();

app.get('/livros', async (req,res) => {
  try {
    const livros = await Livro.find()
    res.json(livros)
  } catch (error) {
    res.json({error: error})
  }
})

app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`)
})