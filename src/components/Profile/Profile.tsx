import ButtonProfileInput from "../Inputs/ButtonProfileInput/ButtonProfileInput";
import ProfileNav from "./ProfileNav/ProfileNav";

const Profile = () => {
  return (
    <section className="mb-12 mt-20 space-y-12 p-8">
      <ProfileNav />

      <article>
        <a href="/profile/addresses">
          <ButtonProfileInput text="ADDRESSES" type="button" first />
        </a>
        <a href="/profile/payments">
          <ButtonProfileInput text="PAYMENTS" type="button" />
        </a>
        <ButtonProfileInput
          text="EMAIL"
          type="button"
          label="userEmail@email.com"
        />
        <ButtonProfileInput
          text="PHONE"
          type="button"
          label="+34 666 66 66 66"
        />
        <ButtonProfileInput
          text="CHANGE PASSWORD"
          type="button"
          label="*********"
        />
      </article>

      <article className="space-y-4">
        <a
          href="#"
          className="block w-20 text-gray transition-colors duration-200 hover:text-gold"
        >
          Sign out
        </a>
        <a
          href="#"
          className="block w-32 text-gray transition-colors duration-200 hover:text-gold"
        >
          Delete account
        </a>
      </article>
    </section>
  );
};

export default Profile;
