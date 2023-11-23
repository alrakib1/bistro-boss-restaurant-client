import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutFrom from "./CheckoutFrom";

// to do add publishable key

const stripePromise = loadStripe(import.meta.env.VITE_GATEWAY);

const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="payment"
        subheading="Please pay from here"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
            <CheckoutFrom></CheckoutFrom>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
