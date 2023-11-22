import { MdDeleteForever, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();

  const axiosSecure = useAxiosSecure();

  const handleDelete = (item) => {
    //
    // console.log(item)
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete ${item.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);

        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted.`,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle
        heading="manage all items"
        subheading="Hurry Up!"
      ></SectionTitle>
      <div>
        <p className="text-lg mb-5 font-semibold">
          Total items : {menu.length}
        </p>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold">{item.name}</div>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-ghost text-sm text-white bg-orange-500 btn-sm  hover:text-red-600">
                        <MdEdit />
                      </button>
                    </Link>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost text-red-600 btn-md text-xl hover:text-red-600"
                    >
                      <MdDeleteForever />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
