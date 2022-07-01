import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Grid  from "@mui/material";

const App = () => {
  const [image, setImage] = useState([]);

  //get Value

  //  fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
  //   // console.log(data);
  //   return data.json()
  // }).then((actualdata) => {
  //   console.log("actualData",actualdata[0].address.city);
  //   setImage(actualdata[0].address.city)

  // }
  // ).catch((error) => {
  //   console.log(error);
  // });

  //image

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((data) => {
        return data.json();
      })
      .then((actualData) => {
        console.log("ActualDATA", actualData);
        // console.log("ActualDATA", actualData[0].url);
        setImage(actualData);
        console.log("image", image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      {/* {image} */}
     {image.map((item) => {
       return( 
         <div className="item">
          <h1>Kishan Patel</h1>
      <img style={{width:"200px"}} src={item.url} />
     </div>
     )})}

    </div>
  )   
}

export default App;
