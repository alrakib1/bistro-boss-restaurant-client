import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    // image upload to imgbb and then get an url

    // console.log(data);
    const imageFile = { image: data.image[0] };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the menu item data to the server with image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
    //   console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${data.name} added to the menu`,
          timer: 1500,
        });
        reset();
    }
}

    console.log("with imageurl", res.data);
  };

  return (
    <div>
      <SectionTitle
        heading="add an item"
        subheading="what's new ?"
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="text-sm font-semibold mb-2">Recipe name*</p>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full"
          />
          <div className="flex gap-10 my-5">
            <div className="w-1/2">
              <p className="text-sm font-semibold mb-2">Category*</p>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Pick one Category
                </option>
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
                {...register("price", { required: true })}
                type="text"
                placeholder="Price"
                className="input input-bordered  w-full"
              />
            </div>
          </div>
          <p className="text-sm font-semibold mb-2">Recipe Details*</p>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea w-full mb-5 textarea-bordered"
            placeholder="Recipe Details"
          ></textarea>
          <p className="text-sm font-semibold mb-2">Image Link*</p>
          {/* <input
            {...register("image")}
            type="text"
            placeholder="Image link of dish"
            className="input input-bordered w-full mb-5"
          /> */}
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered file-input-sm w-full mb-4 max-w-xs"
          />
          <br />
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-amber-500 to-amber-700 btn"
          >
            {" "}
            Add Item <ImSpoonKnife />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
