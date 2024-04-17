import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray p-8">
      <section className="flex justify-evenly">
        <article>
          <p className="text-lg text-neutral-400">¿Need help?</p>
          <div className="mt-4 space-y-2 text-white underline">
            <p>Contact</p>
            <p>My order</p>
            <p>FAQ</p>
            <p>Unsuscribe</p>
          </div>
        </article>

        <article>
          <p className="text-lg text-neutral-400">COMPANY</p>
          <div className="mt-4 space-y-2 text-white underline">
            <p>About Design Dwell</p>
            <p>Ethical code</p>
            <p>Work with us</p>
            <p>Privacy and cookies</p>
          </div>
        </article>

        <article className="space-y-2">
          <p className="text-lg text-neutral-400">STORE LOCATOR</p>
          <input
            type="text"
            placeholder="COUNTRY/REGION, CITY"
            className="w-96 border-b-2 border-neutral-400 bg-transparent py-2 text-white outline-none"
          />

          <div className="flex justify-between">
            <div>
              <p className="text-lg text-neutral-400">LANGUAGE</p>
              <p className="mt-4 text-white underline">Work with us</p>
            </div>

            <div>
              <p className="text-lg text-neutral-400">COUNTRY/REGION</p>
              <p className="mt-4 text-white underline">Spain</p>
            </div>
          </div>
        </article>
      </section>

      <section className="mt-12 text-center">
        <strong className="text-center font-coco-gothic-bold text-8xl text-white">
          DESIGN DWELL
        </strong>
      </section>
    </footer>
  );
};

export default Footer;
