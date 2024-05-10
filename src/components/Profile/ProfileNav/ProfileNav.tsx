import ButtonInput from "../../Inputs/ButtonInput/ButtonInput";

const ProfileNav = () => {
  return (
    <article className="flex gap-x-4">
      <a href="/profile">
        <ButtonInput text="PROFILE" type="button" />
      </a>
      <a href="/favorites">
        <ButtonInput text="FAVORITES" type="button" />
      </a>
      <a href="#">
        <ButtonInput text="PURCHASES" type="button" />
      </a>
    </article>
  );
};

export default ProfileNav;
