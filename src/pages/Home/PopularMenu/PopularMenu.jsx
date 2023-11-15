import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
        // console.log(popularItems)
      });
  }, []);
  return (
    <section className="mb-12">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subheading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
     <div className="text-center mt-12">
     <button className="btn btn-outline text-black border-0 border-b-4 mt-4">
        View Full Menu
      </button>
     </div>
    </section>
  );
};

export default PopularMenu;