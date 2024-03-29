import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// const farms = [
//   {
//     id: 1,
//     name: "Tadeco",
//     description: "This is a crop based farm in Lagos",
//     category: "Crop",
//     email: "tadeco@gmail.com",
//     phoneNumber: "08022558347",
//     address: "57, Lagos Ibadan Way",
//     city: "Somolu",
//     state: "Lagos",
//   },
//   {
//     id: 2,
//     name: "Tanimola",
//     description: "This is a livestock based farm in Lagos",
//     category: "Livestock",
//     email: "tanimola@gmail.com",
//     phoneNumber: "08055558387",
//     address: "59, Lagos Ibadan Way",
//     city: "Somolu",
//     state: "Lagos",
//   },
//   {
//     id: 3,
//     name: "Way Makers",
//     description: "This is a hybrid based farm in Lagos",
//     category: "Hybrid",
//     email: "thewaymaker@gmail.com",
//     phoneNumber: "09022558347",
//     address: "70, Lagos Ibadan Way",
//     city: "Somolu",
//     state: "Lagos",
//   },
//   {
//     id: 3,
//     name: "Way Makers",
//     description: "This is a hybrid based farm in Lagos",
//     category: "Hybrid",
//     email: "thewaymaker@gmail.com",
//     phoneNumber: "09022558347",
//     address: "70, Lagos Ibadan Way",
//     city: "Somolu",
//     state: "Lagos",
//   },
//   {
//     id: 3,
//     name: "Way Makers",
//     description: "This is a hybrid based farm in Lagos",
//     category: "Hybrid",
//     email: "thewaymaker@gmail.com",
//     phoneNumber: "09022558347",
//     address: "70, Lagos Ibadan Way",
//     city: "Somolu",
//     state: "Lagos",
//   },
//   {
//     id: 3,
//     name: "Way Makers",
//     description: "This is a hybrid based farm in Lagos",
//     category: "Hybrid",
//     email: "thewaymaker@gmail.com",
//     phoneNumber: "09022558347",
//     address: "70, Lagos Ibadan Way",
//     city: "Somolu",
//     state: "Lagos",
//   },
//   {
//     id: 3,
//     name: "Way Makers",
//     description: "This is a hybrid based farm in Lagos",
//     category: "Hybrid",
//     email: "thewaymaker@gmail.com",
//     phoneNumber: "09022558347",
//     address: "70, Lagos Ibadan Way",
//     city: "Somolu",
//     state: "Lagos",
//   },
//   {
//     id: 3,
//     name: "Way Makers",
//     description: "This is a hybrid based farm in Lagos",
//     category: "Hybrid",
//     email: "thewaymaker@gmail.com",
//     phoneNumber: "09022558347",
//     address: "70, Lagos Ibadan Way",
//     city: "Somolu",
//     state: "Lagos",
//   },
//   {
//     id: 3,
//     name: "Way Makers",
//     description: "This is a hybrid based farm in Lagos",
//     category: "Hybrid",
//     email: "thewaymaker@gmail.com",
//     phoneNumber: "09022558347",
//     address: "70, Lagos Ibadan Way",
//     city: "Somolu",
//     state: "Lagos",
//   },
//   {
//     id: 3,
//     name: "Way Makers",
//     description: "This is a hybrid based farm in Lagos",
//     category: "Hybrid",
//     email: "thewaymaker@gmail.com",
//     phoneNumber: "09022558347",
//     address: "70, Lagos Ibadan Way",
//     city: "Somolu",
//     state: "Lagos",
//   },
//   {
//     id: 3,
//     name: "Way Makers",
//     description: "This is a hybrid based farm in Lagos",
//     category: "Hybrid",
//     email: "thewaymaker@gmail.com",
//     phoneNumber: "09022558347",
//     address: "70, Lagos Ibadan Way",
//     city: "Somolu",
//     state: "Lagos",
//   },
//   {
//     id: 3,
//     name: "Way Makers",
//     description: "This is a hybrid based farm in Lagos",
//     category: "Hybrid",
//     email: "thewaymaker@gmail.com",
//     phoneNumber: "09022558347",
//     address: "70, Lagos Ibadan Way",
//     city: "Somolu",
//     state: "Lagos",
//   },
// ];

const Farms = () => {
  const [farms, setFarms] = useState([]);
  const [isPending, setIsPending] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    let userId = localStorage.getItem("userId");
    fetch(`https://direct-harvest.onrender.com/api/v1/farm/?creator=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setFarms(data?.data?.data);
        setIsPending(false)
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
        My Farms
      </Typography>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          margin: "1rem",
          justifyContent: "space-between",
        }}
      >
        <Box></Box>
        <Box>
          <Button variant="outlined" onClick={() => navigate("/createfarm")}>
            Create New Farm
          </Button>
        </Box>
      </Stack>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {isPending && (
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginTop: "50vh" }}
          >
            Loading...
          </Typography>
        )}
        {farms &&
          farms.map((farm) => (
            <Grid item xs={2} sm={4} md={4} key={farm._id}>
              <Card sx={{ padding: "15px", borderRadius: "15px" }}>
                <Typography variant="h4" component="h4">
                  {farm.name}
                </Typography>
                <CardContent>{farm.description}</CardContent>
                <CardActions>
                  <Button onClick={() => navigate(`/farm/${farm._id}`)}>
                    View More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Farms;
