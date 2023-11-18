import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import oderCoverImg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../shared/Cover/Cover";
import OrderTab from "../Order Tab/OrderTab";
import "./Order.css";
import { Helmet } from "react-helmet";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();


  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | {category}</title>
      </Helmet>
      <Cover img={oderCoverImg} title="Order Food"></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="text-center my-5">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        {/* salad */}
        <TabPanel>
          <OrderTab dish={salads}></OrderTab>
        </TabPanel>
        {/* pizza */}
        <TabPanel>
          <OrderTab dish={pizza}></OrderTab>
        </TabPanel>
        {/* soup */}
        <TabPanel>
          <OrderTab dish={soup}></OrderTab>
        </TabPanel>
        {/* deserts */}
        <TabPanel>
          <OrderTab dish={desserts}></OrderTab>
        </TabPanel>
        {/* drinks */}
        <TabPanel>
          <OrderTab dish={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
