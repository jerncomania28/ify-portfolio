import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Footer from "../components/Footer";
import SubHeader from "../components/SubHeader";
import ProjectDescription from "../components/ProjectDescription";
import LazyImage from "../components/LazyImage";

import Envelope from "../assets/envelope.svg";
import ArrowDown from "../assets/ArrowDown.svg";
import CraiglistHome from "../assets/craiglist-home.svg";
import Mobiklinic from "../assets/mobiklinic.svg";
import MatCare from "../assets/matcare.svg";
import Craiglist from "../assets/craiglist.svg";
import Profile from "../assets/profile.svg";

const Home = () => {
  return (
    <div className="w-full relative">
      {/* hero */}
      <div className="w-[95%] relative flex flex-col justify-center items-center mx-auto md:w-4/5">
        <div className="h-[90vh] flex flex-col justify-center items-center">
          <Header
            firstText="Designing"
            secondText="Striking Visuals."
            className="font-bold text-center"
          />
          <Paragraph className="mx-3 max-w-[90%] md:w-1/2 ">
            I’m Ifeanyi, a UI/UX designer and like a sculptor, I chip away at
            the rough edges of your design until the final product is a
            masterpiece that stands out from the crowd.
          </Paragraph>
          <div className="inline-flex my-8 mx-2">
            <Button icon={Envelope} border className="border-black">
              Contact Me
            </Button>
            <Button icon={ArrowDown}>View My CV</Button>
          </div>
        </div>
        <img src={CraiglistHome} alt="craiglist-home" loading="lazy" />
      </div>

      {/* hero --end */}

      {/* projects */}
      <div className="flex flex-col w-full relative">
        <div className="pt-[50px] pb-[150px] relative w-[90%] mx-auto md:w-4/5">
          <SubHeader>MY PROJECTS</SubHeader>
        </div>
        <div className="w-full relative bg-offwhite pt-16 pb-4">
          <div className="w-[90%] relative mx-auto flex flex-col-reverse justify-between md:flex-row md:w-4/5">
            <ProjectDescription header="Moboklinic" href="#">
              The app aims to revolutionize the healthcare industry by providing
              patients with easy and convenient access to medical professionals.
            </ProjectDescription>
            <div className="w-full relative justify-start md:w-1/2">
              <LazyImage src={Mobiklinic} alt="moboklinic" />
            </div>
          </div>
          <div className="w-[90%] relative mx-auto flex flex-col justify-between my-[50px] py-6 md:flex-row md:w-4/5">
            <div className="w-full relative justify-start md:w-1/2">
              <LazyImage
                src={MatCare}
                alt="matcare"
                className="md:-mt-[100px]"
              />
            </div>
            <ProjectDescription header="Matcare" href="#">
              An app that helps users connect with mums & caregivers before and
              after delivery
            </ProjectDescription>
          </div>
        </div>
        <div className="w-[90%] relative mx-auto flex flex-col justify-between py-12 md:flex-row md:w-4/5">
          <ProjectDescription header="Craiglist" href="#">
            An upgrade of the user interface of the craigslist website
          </ProjectDescription>
          <div className="w-full relative justify-center md:w-1/2">
            <LazyImage src={Craiglist} alt="craiglist" />
          </div>
        </div>
      </div>

      {/* projects --end */}

      {/* about me */}

      <div className="flex flex-col w-[90%] mx-auto relative">
        <div className="pt-[50px] pb-[50px] relative w-full md:w-4/5">
          <SubHeader>ABOUT ME</SubHeader>
        </div>

        <div className="w-full flex flex-col justify-between mx-auto my-[50px] py-4 md:flex-row">
          <div className="w-full flex relative justify-center md:w-1/2">
            <LazyImage src={Profile} alt="profile" />
          </div>
          <div className="flex flex-col justify-center w-full relative md:w-1/2 md:ml-8">
            <Header
              firstText="Ifeanyi Oji"
              secondText="UI/UX Designer"
              className="font-bold"
            />
            <Paragraph>
              As a pharmacist, I realized the importance of clear communication
              and accessible information. But I wanted to do more. That's why I
              dove into the world of user-centered design, where I discovered a
              passion for creating intuitive experiences.
            </Paragraph>
            <Paragraph>
              Now, I bring my unique perspective to every project I work on.
              With a background in healthcare and a love for all things design,
              I balance scientific rigor with creative innovation to create
              amazing experiences for people from all walks of life.
            </Paragraph>
            <Paragraph>
              If you're looking for a designer who understands the needs and
              desires of the people who will be using your product, let's work
              together to create something great.
            </Paragraph>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
