import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data:payments=[]}=useQuery({
        queryKey: ['payments',user.email],
        queryFn : async ()=>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    console.log(payments)
    return (
        <div>
            <h2 className="text-2xl">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Payment</th>
        <th>Transaction Id</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        payments.map((item,index)=> <tr key={item._id}>
            <th>{index+1}</th>
            <td>{item.email}</td>
            <td>${item.price}</td>
            <td>{item.transactionId}</td>
            <td>{item.date}</td>
            <td>{item.status}</td>
          </tr>)
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;