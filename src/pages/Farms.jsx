import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const Farms = () => {
  // const [farms,setFarms]=useState([])
  const farms = [
    {
      id: 1,
      name: "Tadeco",
      description: "This is a crop based farm in Lagos",
      category: "Crop",
      email: "tadeco@gmail.com",
      phoneNumber: "08022558347",
      address: "57, Lagos Ibadan Way",
      city: "Somolu",
      state: "Lagos",
    },
    {
      id: 2,
      name: "Tanimola",
      description: "This is a livestock based farm in Lagos",
      category: "Livestock",
      email: "tanimola@gmail.com",
      phoneNumber: "08055558387",
      address: "59, Lagos Ibadan Way",
      city: "Somolu",
      state: "Lagos",
    },
    {
      id: 3,
      name: "Way Makers",
      description: "This is a hybrid based farm in Lagos",
      category: "Hybrid",
      email: "thewaymaker@gmail.com",
      phoneNumber: "09022558347",
      address: "70, Lagos Ibadan Way",
      city: "Somolu",
      state: "Lagos",
    },    {
      id: 3,
      name: "Way Makers",
      description: "This is a hybrid based farm in Lagos",
      category: "Hybrid",
      email: "thewaymaker@gmail.com",
      phoneNumber: "09022558347",
      address: "70, Lagos Ibadan Way",
      city: "Somolu",
      state: "Lagos",
    },    {
      id: 3,
      name: "Way Makers",
      description: "This is a hybrid based farm in Lagos",
      category: "Hybrid",
      email: "thewaymaker@gmail.com",
      phoneNumber: "09022558347",
      address: "70, Lagos Ibadan Way",
      city: "Somolu",
      state: "Lagos",
    },    {
      id: 3,
      name: "Way Makers",
      description: "This is a hybrid based farm in Lagos",
      category: "Hybrid",
      email: "thewaymaker@gmail.com",
      phoneNumber: "09022558347",
      address: "70, Lagos Ibadan Way",
      city: "Somolu",
      state: "Lagos",
    },    {
      id: 3,
      name: "Way Makers",
      description: "This is a hybrid based farm in Lagos",
      category: "Hybrid",
      email: "thewaymaker@gmail.com",
      phoneNumber: "09022558347",
      address: "70, Lagos Ibadan Way",
      city: "Somolu",
      state: "Lagos",
    },    {
      id: 3,
      name: "Way Makers",
      description: "This is a hybrid based farm in Lagos",
      category: "Hybrid",
      email: "thewaymaker@gmail.com",
      phoneNumber: "09022558347",
      address: "70, Lagos Ibadan Way",
      city: "Somolu",
      state: "Lagos",
    },    {
      id: 3,
      name: "Way Makers",
      description: "This is a hybrid based farm in Lagos",
      category: "Hybrid",
      email: "thewaymaker@gmail.com",
      phoneNumber: "09022558347",
      address: "70, Lagos Ibadan Way",
      city: "Somolu",
      state: "Lagos",
    },    {
      id: 3,
      name: "Way Makers",
      description: "This is a hybrid based farm in Lagos",
      category: "Hybrid",
      email: "thewaymaker@gmail.com",
      phoneNumber: "09022558347",
      address: "70, Lagos Ibadan Way",
      city: "Somolu",
      state: "Lagos",
    },    {
      id: 3,
      name: "Way Makers",
      description: "This is a hybrid based farm in Lagos",
      category: "Hybrid",
      email: "thewaymaker@gmail.com",
      phoneNumber: "09022558347",
      address: "70, Lagos Ibadan Way",
      city: "Somolu",
      state: "Lagos",
    },    {
      id: 3,
      name: "Way Makers",
      description: "This is a hybrid based farm in Lagos",
      category: "Hybrid",
      email: "thewaymaker@gmail.com",
      phoneNumber: "09022558347",
      address: "70, Lagos Ibadan Way",
      city: "Somolu",
      state: "Lagos",
    },
  ];

  // useEffect(()=>{
  //   fetch(`https://direct-harvest.onrender.com/api/v1/farm`, {
  //     method:
  //   })
  // },[])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h3" sx={{marginBottom:"1rem"}}>My Farms</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {farms && farms.map((farm) => (
          <Grid item xs={2} sm={4} md={4} key={farm.id}>
            <Card sx={{padding:"15px", borderRadius:"15px"}}>
              <Typography variant="h4" component="h4">{farm.name}</Typography>
              <CardContent>{farm.description}</CardContent>
              <CardActions>
                <Button>View More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Farms;
