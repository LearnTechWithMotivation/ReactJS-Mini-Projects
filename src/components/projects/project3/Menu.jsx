import { useContext, useEffect, useState } from "react";
import Footer from "../../Footer";
import Header from "../../Header";
import axios from "axios";
import CardContainer from "./CardContainer";

const Menu = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian"
        );
        setItems(res.data.meals);
      } catch (e) {
        console.warn("Error ", e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Fetched items:", items); // ✅ This will show data after it's set
  }, [items]);

  return (
    <main
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1667030986194-1ede16810993?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
      className="min-h-[100vh]"
    >
      <Header name={"MENU"} />
      <CardContainer items={items}/>
      <Footer/>
    </main>
  );
};

export default Menu;
