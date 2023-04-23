import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";
import StyledHeader from "../components/StyledHeader";
import LazyImage from "../components/LazyImage";

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

const Moboclinic = () => {
  const TOOLS = ["Google docs", "Google meet", "Photoshop", "Figjam", "Figma"];
  const ROLE = [
    "User Research",
    "Wire-framing",
    "Art direction & Visual design",
    "Prototyping",
  ];

  const TIME_FRAME = ["Research : 2 Weeks", "Visual design : 2 weeks"];
  return (
    <div className="w-full relative">
      <div className="w-full relative bg-offwhite pt-[30px] pb-[100px]">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative max-w-[1500px] md:flex-row ">
          <div className="flex flex-col w-full relative md:w-[50%]">
            <Header
              firstText="Moboclinic."
              className="mb-4 text-[60px] font-bold md:text-[96px]"
            />
            <Paragraph className="text-[20px] my-4 leading-[40px] md:text-[24px]">
              Providing patients with easy & convenient access to medical
              professionals.
            </Paragraph>
          </div>
          <div className="w-full relative md:w-[50%] flex justify-end items-center">
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
              className="text-footer text-[16px] font-[600px] inline-flex border-b-[1px] border-solid border-black w-[180px] cursor-pointer"
            >
              <span>Skip to the fun part</span>
              <img src={MoboDropDown} alt="mobo-dropdown" className="mx-2" />
            </a>
          </div>
          <div className="w-full relative flex justify-center flex-col items-center md:w-[50%]">
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
          <div className="w-full relative flex justify-center flex-col items-center md:w-[50%]">
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
          <div className="w-full relative flex flex-col md:w-[50%]">
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
          <StyledHeader className="text-[50px] md:text-[80px]" />
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
          <div className="w-full relative flex justify-center flex-col items-center md:w-[50%]">
            <Paragraph className="text-[20px]">
              In order to validate my secondary research claims, I conducted
              virtual interviews with 5 potential users. The aim of these
              interviews was to gain a deeper understanding of the following
            </Paragraph>
            <ul className="text-[20px] font-thin list-disc">
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
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb_auto">
            <Header
              firstText="Empathy Map."
              className="text-[50px] md:text-[80px] font-bold leading-[60px] md:leading-[96px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%]">
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

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb_auto">
            <Header
              firstText="Persona."
              className="text-[50px] md:text-[80px] font-bold leading-[60px] md:leading-[96px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%]">
            <Paragraph className="text-[20px]">
              From the users that we interviewed, I extracted a persona, a
              representation of the user group, and designed the app around this
              user.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moboclinic;
