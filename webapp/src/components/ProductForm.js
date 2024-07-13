import React, { useState } from 'react';
import { TextField, Button, Typography, Checkbox, Rating, Modal, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const ProductForm = ({ product, onSave, onClose }) => {
    const [formData, setFormData] = useState(product || {
        name: '',
        type: '',
        price: '',
        rating: '',
        warranty_years: '',
        available: true
    });

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (product._id) {
            axios.put(`http://localhost:3000/api/products/${product._id}`, formData)
                .then(response => onSave())
                .catch(error => console.error('Error updating product:', error));
        } else {
            axios.post('http://localhost:3000/api/products', formData)
                .then(response => onSave())
                .catch(error => console.error('Error creating product:', error));
        }
    };

    return (
        <Modal
            open={true}
            onClose={onClose}
            aria-labelledby="product-form-modal"
            aria-describedby="form-to-create-or-edit-product"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                width: 400,
                borderRadius: 3
            }}>
                <div className="flex">
                    <Button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                        }}
                    >
                        <CloseIcon />
                    </Button>
                    <Typography variant="h4" gutterBottom>
                        {product._id ? 'Edit Product' : 'Create Product'}
                    </Typography>
                </div>

                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Warranty Years"
                        name="warranty_years"
                        type="number"
                        value={formData.warranty_years}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <Rating
                        name="simple-controlled"
                        value={formData.rating}
                        onChange={(event, newValue) => {
                            setFormData({
                                ...formData,
                                rating: newValue
                            });
                        }}
                    />
                    <div className="flex items-center">
                        <Typography component="legend">Product available</Typography>
                        <Checkbox
                            checked={formData.available}
                            onChange={handleChange}
                            name="available"
                        />
                    </div>
                    <Button variant="contained" color="primary" type="submit">
                        {product._id ? 'Update' : 'Create'}
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ProductForm;
