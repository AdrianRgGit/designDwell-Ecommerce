import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray p-8">
      <section className="flex justify-evenly">
        <article>
          <p className="text-lg text-neutral-400">¿Need help?</p>
          <div className="mt-4 flex flex-col space-y-2 text-white underline">
            <a href="#">Contact</a>
            <a href="#">My order</a>
            <a href="#">FAQ</a>
            <a href="#">Unsuscribe</a>
          </div>
        </article>

        <article>
          <p className="text-lg text-neutral-400">COMPANY</p>
          <div className="mt-4 flex flex-col space-y-2 text-white underline">
            <a href="#">About Design Dwell</a>
            <a href="#">Ethical code</a>
            <a href="#">Work with us</a>
            <a href="#">Privacy and cookies</a>
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
              <a href="#" className="mt-4 text-white underline">
                Work with us
              </a>
            </div>

            <div>
              <p className="text-lg text-neutral-400">COUNTRY/REGION</p>
              <a href="#" className="mt-4 text-white underline">
                Spain
              </a>
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
