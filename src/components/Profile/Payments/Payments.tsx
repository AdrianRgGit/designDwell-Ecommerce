import ProfileNav from "../ProfileNav/ProfileNav";
import Payment from "./Payment/Payment";

const Payments = () => {
  return (
    <section className="mb-12 mt-20 space-y-12 p-8">
      <ProfileNav />
      <article>
        <p className="flex h-24 w-full items-center justify-between border p-8">
          PAYMENTS
        </p>
      </article>

      <Payment />
    </section>
  );
};

export default Payments;
