import {Routes, Route, Link} from "react-router-dom"
import { RouteComponent } from "./Routes";
import './App.css';

const  App = () => {
  return(
    <div>
      <Link to="/product/new" >add Product</Link>
      <RouteComponent />
    </div>
  )
}

export default App;
