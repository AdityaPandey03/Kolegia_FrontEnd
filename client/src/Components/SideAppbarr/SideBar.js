import Drawer from '@mui/material/Drawer';
import { Typography } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import { useHistory, useLocation ,useNavigate} from 'react-router-dom'
import {AddCircleOutlineOutlined } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppBar from  '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import My_buySellItems from '../../Pages/My_buySellItems';
import My_lostFoundItems from '../../Pages/My_lostFoundItems'
import My_requirements from '../../Pages/My_requirements';
import ProfileMobile from "../../Pages/ProfileMobile";



const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
     
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2),
      cursor:'pointer'
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    date: {
      flexGrow: 1
    },
    list:{
       display:'flex',
       flexDirection:'column'
    },

    icon:{
      color:"#F25767"
    },

   
  }
})

export default function SideBar() {
  const classes = useStyles()
  
  const location = useLocation()
  const navigate =useNavigate();

  const menuItems = [
    { 
      text: 'Profile', 
      icon: <PersonIcon  />, 
      path: '/sidebar' 
    },

    { 
      text: 'My BuySell Items', 
      icon: <ShoppingCartIcon  />, 
      path: '/sidebar/myOwnBuySellItems' 
    },
    { 
      text: 'Lost/Found items', 
      icon: <ContentPasteSearchIcon />, 
      path: '/sidebar/myOwnLostFoundItems' 
    },
    { 
      text: 'My Requirements', 
      icon: <FormatListBulletedIcon  />, 
      path: '/sidebar/myOwnRequirements' 
    },
  ];

  return (
    <div className={classes.root}>
     

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography onClick={()=>navigate('/dashboard')} variant="h5" className={classes.title}>
           Kolegia
          </Typography>
        </div>

        {/* links/list section */}
        <List className={classes.list}>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => navigate(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>

      {/* main content */}
     
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        <Routes>
        <Route exact path="/myOwnBuySellItems" element={<My_buySellItems />} />
        <Route exact path="/myOwnLostFoundItems" element={<My_lostFoundItems />}/>
         <Route exact path="/myOwnRequirements" element={<My_requirements />} />
         <Route exact path="/" element={<ProfileMobile />} />
        </Routes>
      </div>
    </div>
  )
}
