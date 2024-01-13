import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  TextField,
  Grid,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateFarm = () => {
  let userId = localStorage.getItem("userId");

  const [formData, setFormData] = useState({
    id: userId,
    name: "",
    description: "",
    category: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    category: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { ...errors };
    if (formData.name.trim() === "") {
      valid = false;
      newErrors.name = "Name is required";
    }

    if (formData.category.trim() === "") {
      valid = false;
      newErrors.category = "Category is required";
    }
    if (formData.phone.trim() === "") {
      valid = false;
      newErrors.phone = "Phone is required";
    }
    if (formData.description.trim() === "") {
      valid = false;
      newErrors.description = "Description is required";
    }
    if (formData.email.trim() === "") {
      valid = false;
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      valid = false;
      newErrors.email = "Invalid Email Address";
    }

    if (valid) {
      fetch(`https://direct-harvest.onrender.com/api/v1/farm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status === "success") {
            navigate("/farms");
          }
        })
        .catch((err) => console.log(err));
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Box variant="form" onSubmit={handleSubmit} noValidate autoComplete="off">
      <Typography variant="h4" mb={3}>
        Create New Farm
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="name"
            label="Name"
            onChange={handleChange}
            helperText={errors.name}
            error={!!errors.name}
            value={formData.name}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={formData.category}
              name="category"
              label="Category"
              error={!!errors.category}
              helperText={errors.category}
              onChange={handleChange}
            >
              <MenuItem value="Livestock">Livestock</MenuItem>
              <MenuItem value="Crop">Crop</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="phone"
            type="text"
            label="Phone"
            onChange={handleChange}
            helperText={errors.phone}
            error={!!errors.phone}
            value={formData.phone}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="email"
            type="email"
            label="Email Address"
            onChange={handleChange}
            helperText={errors.email}
            error={!!errors.email}
            value={formData.email}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            multiline
            rows={5}
            label="Description"
            onChange={handleChange}
            helperText={errors.description}
            error={!!errors.description}
            value={formData.description}
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
      <Stack>
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Create Farm
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateFarm;
