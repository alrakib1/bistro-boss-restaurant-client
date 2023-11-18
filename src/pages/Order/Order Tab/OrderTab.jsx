import FoodCard from "../../../components/FoodCard/FoodCard";


const OrderTab = ({dish}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
            {dish.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
          </div>
    );
};

export default OrderTab;