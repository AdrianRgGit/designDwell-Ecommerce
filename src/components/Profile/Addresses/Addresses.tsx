import ProfileNav from "../ProfileNav/ProfileNav";
import Address from "./Address/Address";

const Addresses = () => {
  return (
    <section className="mb-12 mt-20 space-y-12 p-8">
      <ProfileNav />
      <article>
        <p className="flex h-24 w-full items-center justify-between border p-8">
          ADDRESSES
        </p>
      </article>

      <Address />
    </section>
  );
};

export default Addresses;
