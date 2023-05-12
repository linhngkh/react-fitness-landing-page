import React from "react";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: string) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* images and main header */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* main header */}
        <div className="z-10 mt-34 md:basis-3/5">
          {/* heading */}
          <div>
            <div>
              <img src={HomePageText} alt="homepage-text" />
            </div>
          </div>
          <p>
            A gym isn’t just a place for exercise. It’s the place you go to
            unwind, socialize and work out. The gym is a whole experience. Lets
            get the body shapes that you dream of ...
          </p>
        </div>
        {/* actions */}
        <div>
          <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
          </ActionButton>
          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href="#contactus"
          >
            <p>Learn More</p>
          </AnchorLink>
        </div>
        {/* IMAGES*/}
        <div>
          <img src={HomePageGraphic} alt="homepage-graphic" />
        </div>
      </div>
      {/* sponsors */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <div>
              <img src={SponsorRedBull} alt="redbull" />
              <img src={SponsorFortune} alt="fortune" />
              <img src={SponsorForbes} alt="forbes" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
