import {
  Typography,
  Box,
  Grid,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Divider,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {

    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    id:"",
    name: "",
    description: "",
    unitOfSupply: "",
    rangeOfSupply: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    unitOfSupply: "",
    rangeOfSupply: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { ...errors };
    if (formData.name.trim() === "") {
      valid = false;
      newErrors.name = "Product name is required";
    }
    if (formData.description.trim() === "") {
      valid = false;
      newErrors.description = "Product Description is required";
    }
    if (formData.unitOfSupply.trim() === "") {
      valid = false;
      newErrors.unitOfSupply = "Unit of Supply is required";
    }
    if (formData.rangeOfSupply.trim() === "") {
      valid = false;
      newErrors.rangeOfSupply = "Range of Supply is required";
    }

    if (valid) {
      fetch(`https://direct-harvest.onrender.com/api/v1/product`, {
        method: "POST",
        headers: {
          "Content-Typ": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          navigate("/farm")
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <Typography variant="h5">Add New Product</Typography>
      <Divider />
      <Box variant="form" mt={5} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="category-label">Select Product</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={formData.name}
                name="name"
                label="name"
                error={!!errors.name}
                helperText={errors.name}
                onChange={handleChange}
              >
                <MenuItem value="Rice">Rice</MenuItem>
                <MenuItem value="Beans">Beans</MenuItem>
                <MenuItem value="Garri">Garri</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="category-label">Unit of Supply</InputLabel>
              <Select
                labelId="category-label"
                id="unitOfSupply"
                value={formData.unitOfSupply}
                name="unitOfSupply"
                label="Unit of Supply"
                error={!!errors.unitOfSupply}
                helperText={errors.unitOfSupply}
                onChange={handleChange}
              >
                <MenuItem value="Kilograms">Kilograms</MenuItem>
                <MenuItem value="Litres">Litres</MenuItem>
                <MenuItem value="Paints">Paints</MenuItem>
                <MenuItem value="Bags">Bags</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="category-label">
                Range of Supply Capacity
              </InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={formData.rangeOfSupply}
                name="rangeOfSuppy"
                label="Range of Supply Capacity"
                error={!!errors.rangeOfSupply}
                helperText={errors.rangeOfSupply}
                onChange={handleChange}
              >
                <MenuItem value="0-100">Up to 100 units</MenuItem>
                <MenuItem value="100-500">Between 100 and 500 units</MenuItem>
                <MenuItem value="500-1000">Between 500 and 1000 units</MenuItem>
                <MenuItem value="1000+">More than 1000 units</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              name="description"
              value={formData.description}
              label="Description"
              helperText={errors.description}
              error={!!errors.description}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default AddProduct;
