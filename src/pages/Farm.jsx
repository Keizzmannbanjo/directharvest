import {
  Button,
  Box,
  Grid,
  TextField,
  MenuItem,
  FormControl,
  Stack,
  InputLabel,
  Select,
  Typography,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Farm = () => {
  let { farmId } = useParams();
  let navigate = useNavigate()

  const [farm, setFarm] = useState({
    docId: farmId,
    name: "",
    description: "",
    category: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    fetch(`https://direct-harvest.onrender.com/api/v1/farm?_id=${farmId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setFarm(data?.data?.data[0])
      });

      fetch(`https://direct-harvest.onrender.com/api/v1/product`)
  }, [farmId]);

  // const [errors, setErrors] = useState({
  //   name: "",
  //   description: "",
  //   category: "",
  //   email: "",
  //   phoneNumber: "",
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarm({ ...farm, [name]: value });
  };

  return (
    <>
      <Box mb={5}>
        <Button variant="outlined" sx={{ float: "right" }} onClick={()=>navigate(`/addproduct`)}>
          Add Product to Farm
        </Button>
        <Typography variant="h5" sx={{ display: "inline-block" }}>
          Farm Details
        </Typography>
      </Box>
      <Divider mt={5} />
      <Box variant="form">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              name="name"
              label="Name"
              value={farm.name}
              variant="outlined"
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                value={farm.category}
                name="category"
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value="livestock">Livestock</MenuItem>
                <MenuItem value="crop">Crop</MenuItem>
                <MenuItem value="hybrid">Hybrid</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="email"
              label="Email Address"
              type="email"
              value={farm.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="phone"
              label="Phone"
              type="text"
              value={farm.phoneNumber}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="address"
              label="Address"
              value={farm.address}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="city"
              label="City"
              value={farm.city}
              onChange={handleChange}
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              name="state"
              label="State"
              value={farm.state}
              variant="outlined"
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} mt={3}>
            <TextField
              name="description"
              multiline
              onChange={handleChange}
              rows={5}
              label="Description"
              value={farm.description}
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>

        <Stack>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Save Changes
          </Button>
        </Stack>
      </Box>

      <Box variant="div">
        <Typography variant="h5">Farm Products</Typography>
      </Box>
    </>
  );
};

export default Farm;
