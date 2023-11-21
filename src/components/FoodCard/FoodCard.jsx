import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      // send cart item to data base

      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${name} has been added to the cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          //  refetch cart to update the cart item
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Your are not logged in!",
        text: "Please log in before add order to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to log in page!",
      }).then((result) => {
        if (result.isConfirmed) {
          //  send user to the log in page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card mx-6 bg-base-100 shadow-xl">
      <figure className="max-w-[370px] max-h-[247px]">
        <img  src={image} alt={name} />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-3 py-[1px] bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart()}
            className="btn btn-outline bg-slate-100 border-amber-500 text-center border-0 border-b-4 mt-4 mb-10"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
