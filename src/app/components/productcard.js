import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap'; // React-Bootstrap components
import { Typography, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'; // Material-UI components
import StarIcon from '@mui/icons-material/Star'; // Material-UI icon

const ProductCard = ({ product }) => {
  console.log('ProductCard render:', product); // Log product details

  // State to manage dialog open/close
  const [openDialog, setOpenDialog] = useState(false);

  // Function to handle image click
  const handleImageClick = () => {
    setOpenDialog(true);
  };

  // Function to handle dialog close
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Card className="border rounded-lg overflow-hidden shadow-lg p-4">
      <Card.Img 
        variant="top" 
        src={product.imageUrl} 
        alt={product.name} 
        style={{ width: "100%", height: "200px", objectFit: "cover", cursor: 'pointer' }} 
        onClick={handleImageClick} // Open dialog on image click
        onError={(e) => {
          e.target.onerror = null; // Prevents infinite loop if image fails to load
          e.target.src = 'https://via.placeholder.com/150'; // Fallback image
        }} 
      />
      <Card.Body>
        <Typography variant="h5" component="h2" className="font-bold mb-2">
          {product.name}
        </Typography>
        <Typography variant="body2" className="text-gray-700 mb-2">
          {product.description}
        </Typography>
        <Typography variant="h6" component="p" className="text-gray-900 font-bold mb-2">
          ${product.price}
        </Typography>
        <Typography variant="body2" className="text-sm text-gray-500">
          Category: {product.category}
        </Typography>
        <Typography variant="body2" className="text-sm text-gray-500">
          Rating: <StarIcon fontSize="small" color="primary" /> {product.rating}
        </Typography>
        <Typography variant="body2" className="text-sm text-gray-500 mb-2">
          Stock: {product.stock}
        </Typography>
      </Card.Body>

      {/* Dialog for image download */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Download Image</DialogTitle>
        <DialogContent>
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            style={{ width: '100%', height: 'auto' }} 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
          <Button 
            onClick={() => {
              const link = document.createElement('a');
              link.href = product.imageUrl;
              link.download = product.name; // Set the filename for download
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              handleCloseDialog(); // Close dialog after download
            }} 
            color="primary"
          >
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default ProductCard;
