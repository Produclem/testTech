import React, { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';

const ProductList = ({ onEdit, onDelete }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    console.log("products");
    console.log(products);
    return (
        <Container>
            <Typography variant="h4" gutterBottom className="text-blue-500">
                Product List
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead className="bg-gray-200">
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Rating</TableCell>
                            <TableCell>Warranty Years</TableCell>
                            <TableCell>Available</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map(product => (
                            <TableRow key={product._id}>
                                <TableCell>{product._id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.type}</TableCell>
                                <TableCell>{product.price}</TableCell>
                                <TableCell>{product.rating}</TableCell>
                                <TableCell>{product.warranty_years}</TableCell>
                                <TableCell>{product.available ? 'Yes' : 'No'}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="primary" className="mr-2" onClick={() => onEdit(product)}>Edit</Button>
                                    <Button variant="outlined" color="error" onClick={() => onDelete(product._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ProductList;
