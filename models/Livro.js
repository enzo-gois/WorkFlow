import mongoose from 'mongoose';

const LivroSchema = new mongoose.Schema({
  autor: String,
  titulo: String,
})

export default mongoose.model('Livro', LivroSchema);