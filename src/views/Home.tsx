import { BsEnvelope } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import LazyImage from "../components/LazyImage";
import Card from "../components/Card";

import Mobiklinic from "../assets/mobiklinic.png";
import MatCare from "../assets/matcare.png";
import Craiglist from "../assets/craiglist.png";
import Profile from "../assets/profile.png";
import Coverly from "../assets/coverly.png";
import TvMovieApp from "../assets/tv-movie-app.png";
import LeadershipBoard from "../assets/leadership-board.png";
import OnboardingView from "../assets/onboarding-view.png";
import FinanceMgtApp from "../assets/finance-mgt-app.png";

const Home = () => {
  return (
    <div className="w-full relative">
      {/* hero */}
      <div className="w-full relative h-[100vh] bg-hero bg-no-repeat flex items-center justify-center">
        <div className="w-[90%] relative mx-auto flex flex-col items-center md:flex-row max-w-[1500px]">
          <div className="w-full relative flex flex-col md:w-[70%] ">
            <Header
              firstText="Designing"
              secondText="Striking Visuals."
              className="font-bold w-full mx-auto text-white text-[60px] md:text-[85px] leading-[75px] md:leading-[90px] md:w-full"
            />
            <Paragraph className="w-full mx-auto text-white font-figtree text-[20px] my-8">
              I’m Ifeanyi, a{" "}
              <span className="italic font-bold"> UI/UX designer</span> and like
              a sculptor, I chip away at the rough edges of your design until
              the final product is a masterpiece that stands out from the crowd.
            </Paragraph>
            <div className="inline-flex my-4 self-center md:self-start md:my-8">
              <Button icon={<BiLinkExternal size={20}/>} border className="border-white text-white hover:bg-white hover:text-black">
                View My CV
              </Button>
              <Button
                icon={<BsEnvelope size={20}/>}
                border
                className="mx-3 border-white text-white hover:bg-white hover:text-black"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* hero --end */}

      {/* projects */}

      <div className="relative w-full bg-white">
        <div className="flex flex-col w-[90%] mx-auto relative pt-[70px] pb-8 max-w-[1500px] ">
          <Header firstText="Projects." className="text-[80px] font-bold" />

          <div className="w-full mx-auto my-[50px] py-4 grid grid-cols-1 gap-6 md:grid-cols-2 ">
            <Card
              href="/mobiclinic"
              category="Mobile App"
              projectName="Mobiklinic"
              projectImage={Mobiklinic}
              projectDescriptionSlug="Case Study - 2022"
            >
              The app aims to revolutionize the healthcare industry by providing
              patients with easy and convenient access to medical professionals.
            </Card>
            <Card
              href="/matcare"
              category="Mobile App"
              projectName="Matcare"
              projectImage={MatCare}
              projectDescriptionSlug="Case Study - 2022"
            >
              An app that helps users connect with mums & caregivers before and
              after delivery
            </Card>
            <Card
              href="/craiglist"
              category="Website"
              projectName="Craiglist"
              projectImage={Craiglist}
              projectDescriptionSlug="UI Redesign - 2022"
            >
              An upgrade of the user interface of the craigslist website to make
              it more modern and user friendly.
            </Card>
            <Card
              href="/coverly"
              category="Mobile App"
              projectName="Coverly"
              projectImage={Coverly}
              projectDescriptionSlug="coming soon"
            >
              The app aims to revolutionize the healthcare industry by providing
              patients with easy and convenient access to medical professionals.
            </Card>
          </div>
        </div>
      </div>

      {/* about me */}
      <div className="relative w-full bg-white">
        <div className="flex flex-col w-[90%] mx-auto relative pt-[100px] pb-8 max-w-[1500px]">
          <Header firstText="About." className="text-[80px] font-bold" />
          <div className="w-full flex flex-col justify-between mx-auto my-[50px] py-4 md:flex-row">
            <div className="w-full relative md:w-1/2">
              <LazyImage src={Profile} alt="profile" />
              {/* <LazyImage src={Profile} alt="profile" /> */}
            </div>
            <div className="flex flex-col justify-center w-full relative my-4 md:my-auto md:w-1/2 md:ml-8">
              <h1 className="text-[32px] font-bold font-fraunces text-footer">
                Ifeanyi Oji . UI/UX Designer
              </h1>
              <Paragraph className="text-[16px] font-extralight font-figtree">
                As a pharmacist, I realized the importance of clear
                communication and accessible information. But I wanted to do
                more. That's why I dove into the world of user-centered design,
                where I discovered a passion for creating intuitive experiences.
              </Paragraph>
              <Paragraph className="text-[16px] font-extralight font-figtree">
                Now, I bring my unique perspective to every project I work on.
                With a background in healthcare and a love for all things
                design, I balance scientific rigor with creative innovation to
                create amazing experiences for people from all walks of life.
              </Paragraph>
              <Paragraph className="text-[16px] font-extralight font-figtree">
                If you're looking for a designer who understands the needs and
                desires of the people who will be using your product, let's work
                together to create something great.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>

      {/* shots */}

      <div className="relative w-full bg-white">
        <div className="flex flex-col w-[90%] mx-auto relative pt-[70px] pb-8 max-w-[1500px]">
          <Header firstText="Shots." className="text-[80px] font-bold" />

          <div className="w-full mx-auto my-[50px] py-[40px] grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card
              category="Mobile App"
              projectName="Finance Mgt. App"
              projectImage={FinanceMgtApp}
              projectDescriptionSlug="UI Design"
            >
              This app helps users take control of their finances by enabling
              them set budgets goals and track their expenses.
            </Card>
            <Card
              category="Mobile App"
              projectName="Onboarding Flow"
              projectImage={OnboardingView}
              projectDescriptionSlug="UI Design"
            >
              An onboarding flow for an app that helps techies attract
              recruiters and secure remote jobs.
            </Card>
            <Card
              category="Smart Tv App"
              projectName="TV Movie App"
              projectImage={TvMovieApp}
              projectDescriptionSlug="UI Design"
            >
              A smart TV movie app designed to give users a pleasant streaming
              experience.
            </Card>
            <Card
              category="Mobile App"
              projectName="Leaderboard"
              projectImage={LeadershipBoard}
              projectDescriptionSlug="UI Design"
            >
              A leaderboard showing gamers rankings and where the user stands
              against the rest.
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
