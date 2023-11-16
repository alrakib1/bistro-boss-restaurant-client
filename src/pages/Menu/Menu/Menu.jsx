import { Helmet } from "react-helmet";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      {/* main cover */}
      <SectionTitle
        heading="Todays Offer"
        subheading="Don't miss"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        title="Desserts"
        coverImg={dessertImg}
        items={desserts}
      ></MenuCategory>
      {/* Pizza menu items */}
      <MenuCategory
        title="Pizza"
        coverImg={pizzaImg}
        items={pizza}
      ></MenuCategory>
      {/* Salad menu items */}
      <MenuCategory
        title="Salads"
        coverImg={saladImg}
        items={salads}
      ></MenuCategory>
      {/* soup menu items */}
      <MenuCategory
        title="Soups"
        coverImg={soupImg}
        items={soup}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
