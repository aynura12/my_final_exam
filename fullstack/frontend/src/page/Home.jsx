import React from "react";
import { useState, useEffect } from "react";
import "../page/home.scss";
import axios from "axios";
import Best from "../component/Best";
import Servic from "../component/Servic";
import Learn from "../component/Learn";
import Work from "../component/Work";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/work");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/work/${id}`);
    getData();
  };
 const [sorted,setSorted]=useState({sorted:"price",reversed:false})
 const sorteddata=()=>{
  setSorted({sorted:"price",reversed:!sorted.reversed})
  const datacopy=[...data]
  datacopy.sort((a,b)=>{
    if(sorted.reversed){
     return b.price-a.price
    }else{
      return a.price-b.price
    }
  })
  setData(datacopy)
 }
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Best />
      <Servic />
      <Learn />







      <div className="home">
        <div className="container">
          <div className="home_text">
            <p>OUR CASE STUDY</p>
            <h1>We work with global brands</h1>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search name"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={sorteddata}>Sorted</button>
          </div>

          <div className="row">
            {data
              ?.filter((d) => {
                return search.toLowerCase() === ""
                  ? d
                  : d.name.toLowerCase().includes(search);
              })
              .map(({ image, name, comment,price, _id }) => {
                return (
                  <div className="cards col-4" key={_id}>
                    <img src={image} alt="" />
                    <h3>{name}</h3>
                    <p>{comment}</p>
                    <span>{price}</span>
                    <button className="delete" onClick={() => deleteData(_id)}>
                      delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Work />
    </>
  );
};

export default Home;
