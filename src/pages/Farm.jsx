import  { Button, Box, Stack, Typography } from "@mui/material";
import React from "react";

const Farm = () => {
  const farm = {
    id: 3,
    name: "Way Makers",
    description: "This is a hybrid based farm in Lagos",
    category: "Hybrid",
    email: "thewaymaker@gmail.com",
    phoneNumber: "09022558347",
    address: "70, Lagos Ibadan Way",
    city: "Somolu",
    state: "Lagos",
  };
  return <>
  <Box>
  <Stack
        direction="row"
        sx={{ display: "flex", margin:"1rem", justifyContent: "space-between" }}
      >
        <Box></Box>
        <Box>
          <Button variant="outlined">Add Product to Farm</Button>
        </Box>
      </Stack>
      <Stack direction="row" sx={{margin:".5rem"}}>
      <Typography variant="p">Name: {farm.name}</Typography>
      </Stack>
      <Stack direction="row" sx={{margin:".5rem"}}>
      <Typography variant="p">Category: {farm.category}</Typography>
      </Stack>
  </Box>
  </>;
};

export default Farm;
