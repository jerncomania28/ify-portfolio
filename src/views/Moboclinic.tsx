import { useEffect } from "react";

import Paragraph from "../components/Paragraph";
import Header from "../components/Header";
import StyledHeader from "../components/StyledHeader";

import MoboAuthentication from "../assets/moboclinic/moboclinic-authentication.svg";
import MoboBookAppointment from "../assets/moboclinic/moboclinic-book_appointment.svg";
import MoboConsultation from "../assets/moboclinic/moboclinic-consultation.svg";
import MoboCreateProfile from "../assets/moboclinic/moboclinic-create_profile.svg";
import MoboFindDoctor from "../assets/moboclinic/moboclinic-find_doctor.svg";
import MoboHero from "../assets/moboclinic/moboclinic-hero.svg";
import MoboHighFidelity from "../assets/moboclinic/moboclinic-high_fidelity.svg";
import MoboHome from "../assets/moboclinic/moboclinic-home.svg";
import MoboMap from "../assets/moboclinic/moboclinic-map.svg";
import MoboOnboarding from "../assets/moboclinic/moboclinic-onboarding.svg";
import MoboPersona from "../assets/moboclinic/moboclinic-persona.svg";
import MoboPharm from "../assets/moboclinic/moboclinic-pharm.svg";
import MoboSolution from "../assets/moboclinic/moboclinic-solution.svg";
import MoboUserFlow from "../assets/moboclinic/moboclinic-user_flow.svg";
import MoboWireFrame from "../assets/moboclinic/moboclinic-wireframe.svg";
import MoboDropDown from "../assets/moboclinic/mobolclinic-dropdown.svg";
import MoboQuote from "../assets/moboclinic/moboclinic-quotes.svg";

const Moboclinic = () => {
  const TOOLS = ["Google docs", "Google meet", "Photoshop", "Figjam", "Figma"];
  const ROLE = [
    "User Research",
    "Wire-framing",
    "Art direction & Visual design",
    "Prototyping",
  ];

  const TIME_FRAME = ["Research : 2 Weeks", "Visual design : 2 weeks"];

  const personaDetails = {
    Age: "29",
    Education: "Graduate",
    Hometown: "Ohafia , Abia state",
    Family: "Husband , three kids",
    Occupation: "Microbiologist , runs a bridal store",
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full relative">
      <div className="w-full relative bg-offwhite pt-[30px] pb-[100px]">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative max-w-[1500px] md:flex-row ">
          <div className="flex flex-col w-full relative md:w-[50%]">
            <Header
              firstText="Moboclinic."
              className="mb-4 text-[60px] font-bold md:text-[70px] xl:text-[96px]"
            />
            <Paragraph className="text-[20px] my-4 leading-[40px] md:text-[24px]">
              Providing patients with easy & convenient access to medical
              professionals.
            </Paragraph>
          </div>
          <div className="w-full relative md:w-[50%] flex justify-end items-center md:mx-3">
            <img src={MoboHero} alt="Mobo-hero" className="object-cover" />
          </div>
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex px-[40px] flex-col relative py-[50px] -mt-[120px] mb-[30px] bg-white max-w-[1500px] md:flex-row md:justify-around md:px-auto rounded-lg shadow-lg">
          <div>
            <h1 className="mb-[20px] text-header text-[24px] font-figtree font-bold">
              Timeframe
            </h1>
            <ul>
              {TIME_FRAME.map((time_frame) => (
                <li className="text-[20px] my-4 font-figtree text-paragraph">
                  {time_frame}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="mb-[20px] text-header text-[24px] font-figtree font-bold">
              Role
            </h1>
            <ul>
              {ROLE.map((role) => (
                <li className="text-[20px] my-4 font-figtree text-paragraph">
                  {role}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="mb-[20px] text-header text-[24px] font-figtree font-bold">
              Tools
            </h1>
            <ul>
              {TOOLS.map((tool) => (
                <li className="text-[20px] my-4 font-figtree text-paragraph">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb_auto">
            <Header
              firstText="Project"
              secondText="Overview."
              className="text-[50px] md:text-[80px] font-bold leading-[60px] md:leading-[96px]"
            />
            <a
              href="#"
              className="text-footer text-[16px] font-[600px] inline-flex border-b-[1px] border-solid border-black w-[200px] cursor-pointer my-[2rem]"
            >
              <span className="font-bold">Skip to the fun part</span>
              <img src={MoboDropDown} alt="mobo-dropdown" className="mx-2" />
            </a>
          </div>
          <div className="w-full relative flex justify-center flex-col items-center md:w-[50%] md:mx-3">
            <Paragraph>
              Patients can connect directly with doctors and pharmacists to
              address their health concerns and receive the care they need.
            </Paragraph>
            <Paragraph>
              This innovative solution aims to improve the efficiency and
              effectiveness of the healthcare system by eliminating barriers to
              care and empowering patients to take control of their own health.
            </Paragraph>
            <Paragraph>
              I believe that this app has the potential to significantly improve
              the lives of patients and make a positive impact on the healthcare
              industry as a whole.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative">
        <img src={MoboPharm} alt="mobo-pharm" className="object-cover" />
      </div>

      <div className="w-full relative py-[50px] bg-footer">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] text-white md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb_auto">
            <Header
              firstText="The"
              secondText="Problem."
              className="text-[50px] md:text-[80px] font-bold leading-[60px] md:leading-[96px]"
            />
          </div>
          <div className="w-full relative flex justify-center flex-col items-center md:w-[50%] font-figtree md:mx-3">
            <Paragraph className="text-[20px]">
              From over-saturated general hospitals to very rigorous procedures
              and even unqualified persons assuming roles they should not.
            </Paragraph>
            <Paragraph className="text-[20px]">
              A lot of people do not even know where to go to access credible
              health information, leaving them to seek advice from friends (who
              are not medically inclined) and unqualified persons.
            </Paragraph>
            <Paragraph className="text-[20px]">
              Due to these challenges among others, people are often left to
              self medicate and wait until the last moments before seeking help,
              leaving the average Nigerian in a state of less than optimal
              health.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb_auto">
            <Header
              firstText="Proposed"
              secondText="Solution."
              className="text-[50px] md:text-[80px] font-bold leading-[60px] md:leading-[96px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col font-figtree md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px]">
              This innovative solution aims to improve the efficiency and
              effectiveness of the healthcare system by eliminating barriers to
              care and empowering patients to take control of their own health.
            </Paragraph>
            <Paragraph className="text-[20px]">
              I believe that this app has the potential to significantly improve
              the lives of patients and make a positive impact on the healthcare
              industry as a whole.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <img src={MoboSolution} alt="mobo-solution" className="object-cover" />
      </div>

      <div className="w-full relative bg-white">
        <div className="w-[90%] mx-auto relative py-[50px] max-w-[1500px]">
          <StyledHeader
            number="01"
            firstText="User"
            secondText="Research."
            className="text-[50px] md:text-[80px]"
          />
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-footer">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] text-objective-list md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="Objectives"
              className="text-[35px] md:text-[48px] font-bold text-white"
            />
          </div>
          <div className="w-full relative flex justify-center flex-col items-center font-figtree md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px]">
              In order to validate my secondary research claims, I conducted
              virtual interviews with 5 potential users. The aim of these
              interviews was to gain a deeper understanding of the following
            </Paragraph>
            <ul className="text-[20px] list-disc">
              <li className="my-4 list-custom-bullet">
                The processes Nigerians take when they fall ill and want to
                access help. What is their first point of call and where do they
                go if all fails? I want to understand how they feel during these
                processes.
              </li>
              <li className="my-4 list-custom-bullet">
                To understand users needs and frustrations as it relates to
                healthcare
              </li>
              <li className="my-4 list-custom-bullet">
                To understand people's behaviors and experiences when the go to
                hospitals and their emotions as the have these experiences
              </li>
              <li className="my-4 list-custom-bullet">
                To understand their motivations for choosing how they solve
                their health needs
              </li>
              <li className="my-4 list-custom-bullet">
                To understand people's behaviors, experiences and emotions when
                they visit pharmacies and local chemists
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-end flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="Empathy Map."
              className="text-[35px] md:text-[48px] font-bold leading-[60px] md:leading-[96px]"
            />
          </div>
          <div className="w-full relative flex flex-col font-figtree md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px]">
              From the users that we interviewed, I extracted a persona, a
              representation of the user group, and designed the app around this
              user.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-white">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <img src={MoboMap} alt="mobo-map" className="object-cover" />
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full justify-center relative mb-[50px] md:w-[50%] md:mb-auto">
            <img src={MoboPersona} alt="mobo-persona" />
            <h3 className="text-[24px] text-header font-bold my-6 text-center">
              Emma Adewunmi
            </h3>
            <div className="flex flex-col justify-center items-center py-[30px] px-[10px] font-figtree text-[16px] md:text-[20px] shadow bg-white rounded-md">
              {Object.keys(personaDetails).map((key, _idx) => {
                return (
                  <p key={_idx}>
                    <span className="font-bold">{`${key} :`}</span>
                    <span className="mx-4">
                      {Object.values(personaDetails)[_idx]}
                    </span>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="w-full relative flex flex-col items-center md:w-[50%] md:ml-8">
            <div className="w-full relative flex flex-col justify-center">
              <img
                src={MoboQuote}
                alt="mobo-quote"
                className="w-[60px] self-center"
              />
              <h2 className="self-center font-figtree text-[20px] md:text-[24px] font-bold my-3">
                A day of productivity is my kind of day
              </h2>
            </div>
            <div className="flex flex-col justify-between items-center w-full relative md:flex-row">
              <div className="w-full my-4 md:w-[49%] md:my-auto flex flex-col relative justify-center items-center py-[30px] px-[10px] font-figtree text-[16px] md:text-[20px] shadow bg-white rounded-md">
                <ul className="text-[16px] md:text-[20px] font-thin">
                  <li className="my-2 list-custom-bullet">
                    Wants to be healthy so she can cope with her busy
                  </li>
                  <li className="my-2 list-custom-bullet">
                    Wants to have easy access to medical professionals
                  </li>
                  <li className="my-2 list-custom-bullet">
                    Enjoys a private environment where she can consult with a
                    doctor or pharmacist
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-[49%] flex flex-col relative justify-center items-center py-[30px] px-[10px] font-figtree text-[16px] md:text-[20px] shadow bg-white rounded-md">
                <ul className="text-[16px] md:text-[20px] font-thin">
                  <li className="my-2 list-custom-bullet">
                    Wants to be healthy so she can cope with her busy
                  </li>
                  <li className="my-2 list-custom-bullet">
                    Wants to have easy access to medical professionals
                  </li>
                  <li className="my-2 list-custom-bullet">
                    Enjoys a private environment where she can consult with a
                    doctor or pharmacist
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center py-[30px] px-[10px] font-figtree text-[16px] my-4 md:text-[20px] shadow bg-white rounded-md">
              <Paragraph className="px-3 py-2 text-[16px] md:text-[20px]">
                Emma is a 9 to 5er in a hospital, working as a microbiologist.
                She is married, with three children and when she comes home, she
                has to tend to her kids while still running her start up bridal
                business. Emma is very conscious of her health and doesn't take
                anything for granted. She visits the hospital when she notices
                worrisome symptoms and respects the opinion of doctors.
                Nevertheless, she feels very frustrated about the long queues
                and waiting time she experiences in hospitals. She also worries
                that there are not enough specialists to care for her needs. She
                will love to have easy access to specialists without long
                waiting hours.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-footer">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] text-white max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="User Flow."
              className="text-[35px] md:text-[48px] xl:text-[65px] font-bold leading-[60px] md:leading-[96px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col items-center md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px]">
              A map of the path the user will take to achieve the core goals
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-white">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <img src={MoboUserFlow} alt="mobo-map" className="object-cover" />
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb_auto">
            <Header
              firstText="Wireframes."
              className="text-[35px] md:text-[40px] xl:text-[65px] font-bold leading-[60px] md:leading-[96px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px]">
              I went straight to designing low fidelity screens, as I had picked
              a look and feel of the app after taking inspiration from several
              sources.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <img src={MoboWireFrame} alt="mobo-map" className="object-cover" />
        </div>
      </div>

      <div className="w-full relative bg-footer">
        <div className="w-[90%] mx-auto relative flex justify-between items-center flex-col py-[70px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative md:w-[50%]">
            <StyledHeader
              number="02"
              firstText="High-fidelity"
              secondText="Screens."
              className="text-[60px] text-white md:text-[60px]"
            />
          </div>
          <div className="w-full relative my-4 md:my-auto md:w-[50%] flex justify-end items-center md:mx-3">
            <img
              src={MoboHighFidelity}
              alt="Mobo-hero"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full relative bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row ">
          <div className="flex flex-col w-full relative md:w-[50%]">
            <Header
              firstText="Onboarding."
              className="mb-4 text-[35px] font-bold md:text-[48px]"
            />
            <Paragraph className="text-[20px] my-4 leading-[40px]">
              3 simple onboarding screens to introduce the services to the user
              and get them started or log old users into their home screens
            </Paragraph>
          </div>
          <div className="w-full relative md:w-[50%] flex justify-end items-center md:mx-3">
            <img
              src={MoboOnboarding}
              alt="Mobo-hero"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb_auto">
            <Header
              firstText="Authentication."
              className="text-[35px] md:text-[48px] font-bold leading-[60px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px]">
              New users can create accounts using their google accounts or an
              email address. Old users can sign in simply as well
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <img
            src={MoboAuthentication}
            alt="mobo-map"
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb_auto">
            <Header
              firstText="Create Profile."
              className="text-[35px] md:text-[48px] font-bold leading-[60px] md:leading-[96px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px]">
              This is essential for new users to capture some bio data that will
              improve the quality of the service provided by the healthcare
              professionals. The steps can be skipped at any point and updated
              in the settings page
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <img
            src={MoboCreateProfile}
            alt="mobo-map"
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full relative bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row ">
          <div className="flex flex-col w-full relative md:w-[50%]">
            <Header
              firstText="Home."
              className="mb-4 text-[35px] font-bold md:text-[48px]"
            />
            <Paragraph className="text-[20px] my-4 leading-[40px]">
              The core function of the app is to enable users connect with
              healthcare providers and this is the screen that helps them
              achieve that. The user can choose to speak with a doctor,
              pharmacist or fill up his/her prescription. Booked appointments
              that have not occurred yet can be viewed here.
            </Paragraph>
          </div>
          <div className="w-full relative md:w-[50%] flex justify-end items-center md:mx-3">
            <img src={MoboHome} alt="Mobo-hero" className="object-cover" />
          </div>
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb_auto">
            <Header
              firstText="Find your Doctor."
              className="text-[35px] md:text-[48px] font-bold self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px] font-figtree">
              Users can search for doctors by scrolling down the list of doctors
              or choose based on recommendations or categories. Selecting any
              doctor will provide further details and the user can proceed to
              book an appointment as required.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <img src={MoboFindDoctor} alt="mobo-map" className="object-cover" />
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-footer">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] text-white md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="Book an"
              secondText="Appointment."
              className="text-[35px] md:text-[48px] md:leading-[50px] font-bold self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px] text-objective-list">
              Users can schedule appointments by selecting available dates and
              times, then proceed to make payment.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-footer">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <img
            src={MoboBookAppointment}
            alt="mobo-map"
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb_auto">
            <Header
              firstText="Consultation."
              className="text-[35px] md:text-[48px] font-bold leading-[60px] md:leading-[96px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px]">
              The consultation room is a chat interface where messages can be
              typed and sent and files like lab results and prescriptions can be
              uploaded. Users can also choose to engage in voice and video
              communication as preferred.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <img src={MoboConsultation} alt="mobo-map" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Moboclinic;
