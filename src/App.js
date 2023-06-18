import {Routes, Route, Link} from "react-router-dom"
import { RouteComponent } from "./Routes";
import './App.css';
import { Header } from "./components/header";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { fetchHomePageProducts } from "./redux";
import { useDispatch } from "react-redux";

const  App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomePageProducts());
  },[]);
  return(
    <Grid  sx={{minHeight: "100vh"}} > 
      <Grid item  >
        <Header />
      </Grid>
      <Link to="/product/new" >add Product</Link>
      <Grid item 
        sx={{
          paddingTop: 20,
          minHeight: "100%",
          width: "100%",
          pb: 10,
          backgroundColor: "#f0f0b2",
        }} 
      >
        <RouteComponent />
      </Grid>
    </Grid>
  )
}

export default App;
