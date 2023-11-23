import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const UpdateItem = () => {
  const params = useParams();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  // console.log(params)

  const { data: item = [], refetch } = useQuery({
    queryKey: ["item"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/menu/${params.id}`);
      return res.data;
    },
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // now send the menu item data to the server with image url
    const updatedMenuItem = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.recipe,
    };

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axiosSecure.patch(`/menu/${params.id}`, updatedMenuItem).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: `${item.name} has been updated`,
              timer: 1500,
            });
            refetch();
          }
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div>
      <h3 className="text-2xl text-center">Update Item</h3>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-sm font-semibold mb-2">Recipe name*</p>
          <input
            defaultValue={item.name}
            {...register("name", { required: true })}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full"
          />
          <div className="flex gap-10 my-5">
            <div className="w-1/2">
              <p className="text-sm font-semibold mb-2">Category*</p>
              <select
                defaultValue={item.category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desert">Desert</option>
                <option value="drinks">Drinks</option>
                <option value="popular">Popular</option>
              </select>
            </div>
            <div className="w-1/2">
              <p className="text-sm font-semibold mb-2">Price*</p>
              <input
                defaultValue={item.price}
                {...register("price", { required: true })}
                type="text"
                placeholder="Price"
                className="input input-bordered  w-full"
              />
            </div>
          </div>
          <p className="text-sm font-semibold mb-2">Recipe Details*</p>
          <textarea
            defaultValue={item.recipe}
            {...register("recipe", { required: true })}
            className="textarea w-full mb-5 textarea-bordered"
            placeholder="Recipe Details"
          ></textarea>
          <br />
          <div className="text-center mt-10">
            <button
              type="submit"
              className="text-white text-center bg-gradient-to-r from-amber-500 to-amber-700 btn"
            >
              {" "}
              Update Recipe Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
