import * as React from "react"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import {  useNavigate } from "react-router-dom";



function SideNav(props) {
 const navigate= useNavigate();

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      {/* <Divider /> */}
      <List>
        {['Dashboard', 'Farms', 'Farm', 'Order', 'Checkout'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={()=> navigate(text.toLowerCase())}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
  
    </div>
  );

  // Remove this const when copying and pasting into your project.

  return (
    <>
 

        {drawer}
    
    
    </>
  );
}



export default SideNav;

