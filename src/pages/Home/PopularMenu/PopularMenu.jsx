import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";


const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subheading={"Check it out"}
      ></SectionTitle>
     <MenuCategory items={popular}></MenuCategory>
      <div className="text-center mt-12">
        {/* <button className="btn btn-outline text-black border-0 border-b-4 mt-4">
          View Full Menu
        </button> */}
      </div>
    </section>
  );
};

export default PopularMenu;
