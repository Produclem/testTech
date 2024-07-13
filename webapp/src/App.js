import React, { useState } from 'react';
import { Container, Button } from '@mui/material';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import axios from 'axios';

function App() {
  const [editingProduct, setEditingProduct] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/${id}`)
        .then(() => setRefresh(!refresh))
        .catch(error => console.error('Error deleting product:', error));
  };

  const handleSave = () => {
    setEditingProduct(null);
    setRefresh(!refresh);
    setModalOpen(false);
  };

  const handleAdd = () => {
    setEditingProduct({});
    setModalOpen(true);
  };

  const handleClose = () => {
    setEditingProduct(null);
    setModalOpen(false);
  };

  return (
      <Container>
        <div className="flex justify-end p-7">
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Add Product
          </Button>
        </div>
        <ProductList onEdit={handleEdit} onDelete={handleDelete} key={refresh} />
        {modalOpen && <ProductForm product={editingProduct} onSave={handleSave} onClose={handleClose} />}
      </Container>
  );
}

export default App;
