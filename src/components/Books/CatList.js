import React from "react"
import '../../books.css'
import '../../sidenav.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Feed from "./Feed";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

export default function CatList() {

  const [open, setOpen] = React.useState(false);


  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="cat-list" >

      <List
        sx={{ width: '100%', bgcolor: 'transparent' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader" sx={{bgcolor: 'transparent'}}>
      //     Categories
      //   </ListSubheader>
      // }
      >

        <ListItemButton onClick={handleClick} divider>

          <ListItemText primary="Genre" />

          <ListItemIcon sx={{ minWidth: '20px' }}>
            <i class={`${open ? "bi bi-caret-up-fill" : "bi bi-caret-down"}`}></i>
          </ListItemIcon>
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} >

              <ListItemText primary="Fiction" />

            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>

              <ListItemText primary="History" />

            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>

              <ListItemText primary="Motivational" />

            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>

              <ListItemText primary="Thriller" />

            </ListItemButton>

          </List>
        </Collapse>


        <ListItemButton onClick={handleClick} divider>

          <ListItemText primary="Subjects" />

          <ListItemIcon sx={{ minWidth: '20px' }}>
            <i class={`${open ? "bi bi-caret-up-fill" : "bi bi-caret-down"}`}></i>
          </ListItemIcon>
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>

              <ListItemText primary="English" />


            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>

              <ListItemText primary="Maths" />


            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>

              <ListItemText primary="Science" />


            </ListItemButton>

            <ListItemButton sx={{ pl: 4 }}>

              <ListItemText primary="Urdu" />


            </ListItemButton>
          </List>
        </Collapse>
      </List>

    </div>
  )


}
