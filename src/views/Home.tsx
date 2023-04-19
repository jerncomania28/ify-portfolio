import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Footer from "../components/Footer";
import LazyImage from "../components/LazyImage";
import Card from "../components/Card";

import Envelope from "../assets/envelope.svg";
import ViewCV from "../assets/view-cv.svg";
import Mobiklinic from "../assets/mobiklinic.svg";
import MatCare from "../assets/matcare.svg";
import Craiglist from "../assets/craiglist.svg";
import Profile from "../assets/profile.svg";
import Coverly from "../assets/coverly.svg";
import TvMovieApp from "../assets/tv_movie_app.svg";
import LeadershipBoard from "../assets/leadership-board.svg";
import OnboardingView from "../assets/onboarding-view.svg";
import FinanceMgtApp from "../assets/finance-mgt-app.svg";
import HeroImage from "../assets/hero-img.svg";

const Home = () => {
  return (
    <div className="w-full relative">
      {/* hero */}
      <div className="w-full relative h-[100vh] bg-header flex items-center justify-center">
        <div className="w-[90%] relative mx-auto flex flex-col justify-center items-center md:flex-row">
          <div className="w-full relative flex flex-col md:w-1/2 ">
            <Header
              firstText="Designing"
              secondText="Striking Visuals."
              className="font-bold w-full mx-auto text-white md:text-[70px] md:leading-[80px] md:w-full"
            />
            <Paragraph className="font-extralight w-full mx-auto text-white md:w-auto">
              I’m Ifeanyi, a{" "}
              <span className="italic font-bold"> UI/UX designer</span> and like
              a sculptor, I chip away at the rough edges of your design until
              the final product is a masterpiece that stands out from the crowd.
            </Paragraph>
            <div className="inline-flex my-4 self-center md:self-start md:my-8">
              <Button icon={ViewCV} border className="border-white text-white ">
                View My CV
              </Button>
              <Button
                icon={Envelope}
                border
                className="mx-3 border-white text-white "
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="w-full relative md:w-1/2">
            <img
              src={HeroImage}
              alt="hero-img"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* hero --end */}

      {/* projects */}

      <div className="relative w-full bg-white">
        <div className="flex flex-col w-[90%] mx-auto relative pt-[70px] pb-8 ">
          <Header firstText="Projects." className="text-[80px] font-bold" />

          <div className="w-full mx-auto my-[50px] py-4 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] ">
            <Card
              href="/mobiklinic"
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
        <div className="flex flex-col w-[90%] mx-auto relative pt-[100px] pb-8 ">
          <Header firstText="About." className="text-[80px] font-bold" />
          <div className="w-full flex flex-col justify-between mx-auto my-[50px] py-4 md:flex-row">
            <div className="w-full flex relative justify-center md:w-1/2">
              <img src={Profile} alt="profile" />
              {/* <LazyImage src={Profile} alt="profile" /> */}
            </div>
            <div className="flex flex-col justify-center w-full relative my-4 md:my-auto md:w-1/2 md:ml-8">
              <h1 className="text-[32px] font-bold font-fraunces">
                Ifeanyi Oji . UI/UX Designer
              </h1>
              <Paragraph className="text-[16px] font-extralight">
                As a pharmacist, I realized the importance of clear
                communication and accessible information. But I wanted to do
                more. That's why I dove into the world of user-centered design,
                where I discovered a passion for creating intuitive experiences.
              </Paragraph>
              <Paragraph className="text-[16px] font-extralight">
                Now, I bring my unique perspective to every project I work on.
                With a background in healthcare and a love for all things
                design, I balance scientific rigor with creative innovation to
                create amazing experiences for people from all walks of life.
              </Paragraph>
              <Paragraph className="text-[16px] font-extralight">
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
        <div className="flex flex-col w-[90%] mx-auto relative pt-[70px] pb-8 ">
          <Header firstText="shots." className="text-[80px] font-bold" />

          <div className="w-full mx-auto my-[50px] py-4 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
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

      <Footer />
    </div>
  );
};

export default Home;
