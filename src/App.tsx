// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//       </header>
//     </div>
//   );
// }

// export default App;

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppointmentForm from './components/appointmentForm';
import AppointmentTable from './components/appointmentList';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './components/profile';
import Login from './components/login';
import LogoutButton from './components/logout';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log({user})
  console.log({isAuthenticated})
  console.log({isLoading})

  return (
    // <Box sx={{ width: '100%' }}>
    //   <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    //     <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    //       <Tab label="Appointments" {...a11yProps(0)} />
    //       <Tab label="Create Appointments" {...a11yProps(1)} />
    //       {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
    //     </Tabs>
    //   </Box>
    //   <CustomTabPanel value={value} index={0}>
    //     <AppointmentTable />
    //   </CustomTabPanel>
    //   <CustomTabPanel value={value} index={1}>
    //     <AppointmentForm />
    //   </CustomTabPanel>
    // </Box>
    <>Hi, Welcome to application
    <Profile />
    {!isAuthenticated && <Login />}
    {isAuthenticated && <LogoutButton />}
    </>
  );
}
