import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PatientBooking from "./PatientBooking";
import StaffBooking from "./StaffBooking";
import PhysicianView from "./PhysicianView";
import Home from "./Home";
import Appointments from "./Appointments";
import Patients from "./Patients";
import Statistic from "./Statistic";

import { FullScreen, useFullScreenHandle } from "react-full-screen";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  tab: {
    "& .MuiBox-root": {
      padding: "0px",
    },
  },
}));

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleFullScreen = useFullScreenHandle();
  const handleFullScreen2 = useFullScreenHandle();

  return (
    <div style={{ minHeight: "100mvh" }}>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <LinkTab
            label="Home"
            {...a11yProps(0)}
            href="/drafts"
            href="/drafts"
          />
          <LinkTab label="Patient Booking" {...a11yProps(1)} href="/drafts2" />
          <LinkTab label="Staff Booking" {...a11yProps(2)} href="/drafts3" />
          <LinkTab label="Physician View" {...a11yProps(3)} href="/drafts4" />
          <LinkTab label="Appointments" {...a11yProps(4)} href="/drafts5" />
          <LinkTab label="Patients" {...a11yProps(4)} href="/drafts5" />
          <LinkTab label="Statistic" {...a11yProps(6)} href="/drafts7" />
        </Tabs>
      </AppBar>

      {/*--------------------- HOME PAGE ---------------------*/}
      <TabPanel value={value} index={0} style={{ minHeight: "95vh" }}>
        <Home></Home>
      </TabPanel>

      {/*--------------------- PATIENT BOOKING ---------------------*/}
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605289982774-9a6fef564df8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dmFjY2luZXx8fHx8fDE2Mjk0NTQ1MDE&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ background: "rgba(255, 255, 255, 0.3)" }}>
          <TabPanel value={value} index={1} style={{ minHeight: "100vh" }}>
            <PatientBooking></PatientBooking>
          </TabPanel>
        </div>
      </div>

      {/*--------------------- STAFF BOOKING ---------------------*/}
      <FullScreen handle={handleFullScreen}>
        <div
          style={{
            backgroundColor: "#00BFFF",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <TabPanel value={value} index={2} style={{ minHeight: "100vh" }}>
            <StaffBooking handleFullScreen={handleFullScreen}></StaffBooking>
          </TabPanel>
        </div>
      </FullScreen>

      {/*--------------------- PHYSICIAN VIEW ---------------------*/}
      <FullScreen handle={handleFullScreen2}>
        <div
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1618015437766-4aa1da3cd511?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dmFjY2luZXx8fHx8fDE2MzE4NjU1OTY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <TabPanel value={value} index={3} style={{ minHeight: "100vh" }}>
            <PhysicianView handleFullScreen={handleFullScreen2}></PhysicianView>
          </TabPanel>
        </div>
      </FullScreen>

      {/*--------------------- APPOINTMENT TABLE PAGE ---------------------*/}
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1618015437766-4aa1da3cd511?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dmFjY2luZXx8fHx8fDE2MzE4NjU1OTY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <TabPanel value={value} index={4} style={{ minHeight: "100vh" }}>
          <Appointments></Appointments>
        </TabPanel>
      </div>

      {/*--------------------- PATIENT TABLE PAGE ---------------------*/}
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1618015437766-4aa1da3cd511?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dmFjY2luZXx8fHx8fDE2MzE4NjU1OTY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <TabPanel value={value} index={5} style={{ minHeight: "100vh" }}>
          <Patients></Patients>
        </TabPanel>
      </div>

      {/*--------------------- STATISTIC DASHBOARD PAGE ---------------------*/}
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1618015437766-4aa1da3cd511?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8dmFjY2luZXx8fHx8fDE2MzE4NjU1OTY&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <TabPanel
          value={value}
          index={6}
          style={{
            minHeight: "100vh",
          }}
          sx={{ m: 1 }}
          classes={{ root: classes.tab }}
        >
          <Statistic></Statistic>
        </TabPanel>
      </div>
    </div>
  );
}

function home() {
  return <h1>This is home</h1>;
}
