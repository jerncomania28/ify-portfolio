import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import StyledHeader from "../components/StyledHeader";

import MatAccount from "../assets/matcare/matcare-account_creation.svg";
import MatBookAppointment from "../assets/matcare/matcare-book_appointment.svg";
import MatBookAppointmentTwo from "../assets/matcare/matcare-book_appointment_2.svg";
import MatColors from "../assets/matcare/matcare-colors.svg";
import MatCommunity from "../assets/matcare/matcare-community.svg";
import MatFont from "../assets/matcare/matcare-font.svg";
import MatHome from "../assets/matcare/matcare-home.svg";
import MatHomeScreen from "../assets/matcare/matcare-home_screen.svg";
import MatOnboarding from "../assets/matcare/matcare-onboarding.svg";
import MatPayment from "../assets/matcare/matcare-payment.svg";
import MatProblem from "../assets/matcare/matcare-problem.svg";
import MatSolution from "../assets/matcare/matcare-solution.svg";
import MatTracking from "../assets/matcare/matcare-tracking.svg";
import MatUserFlow from "../assets/matcare/matcare-user_flow.svg";
import MatUserProfile from "../assets/matcare/matcare-user_profile.svg";
import MatPrototype from "../assets/matcare/matcare-type.svg";
import MoboDropDown from "../assets/moboclinic/mobolclinic-dropdown.svg";

const MatCare = () => {
  const TOOLS = ["Google docs", "Google meet", "Photoshop", "Figjam", "Figma"];
  const TIME_FRAME = ["Research : 1 Week", "Visual design : 1 week"];
  const ROLE = [
    "User Research",
    "Wire-framing",
    "Art direction & Visual design",
    "Prototyping",
  ];
  const THE_TEAM = ["Ifeanyi Oji", "Oyeniran Ruth Oluwakemi"];

  return (
    <div className="w-full relative">
      <div className="w-full relative bg-offwhite pt-[30px] pb-[100px]">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative max-w-[1500px] md:flex-row ">
          <div className="flex flex-col w-full relative md:w-[50%]">
            <Header
              firstText="Matcare."
              className="mb-4 text-[60px] font-bold md:text-[70px] xl:text-[96px]"
            />
            <Paragraph className="text-[20px] my-4 leading-[40px] md:text-[24px]">
              Connect mothers with caregivers before & after delivery.
            </Paragraph>
          </div>
          <div className="w-full relative md:w-[50%] flex justify-end items-center md:mx-3">
            <img src={MatHome} alt="Mobo-hero" className="object-cover" />
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
          <div>
            <h1 className="mb-[20px] text-header text-[24px] font-figtree font-bold">
              The Team
            </h1>
            <ul>
              {THE_TEAM.map((team_mate) => (
                <li className="text-[20px] my-4 font-figtree text-paragraph">
                  {team_mate}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb_auto">
            <Header
              firstText="The"
              secondText="Problem."
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
          <div className="w-full relative flex justify-center flex-col items-center md:w-[50%] md:mx-3">
            <Paragraph>
              Imagine just giving birth to a precious new life, but not having
              anyone to turn to for support.
            </Paragraph>
            <Paragraph>
              This is the reality for many new mothers, especially during the
              Covid era when travel restrictions made it difficult to access
              care. For those who underwent a cesarean section, the physical and
              emotional toll can be even more devastating.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative">
        <img src={MatProblem} alt="mat-problem" className="object-cover" />
      </div>

      <div className="w-full relative py-[50px] bg-footer">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] text-white max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb_auto">
            <Header
              firstText="Proposed"
              secondText="Solution."
              className="text-[50px] md:text-[80px] font-bold leading-[60px] md:leading-[96px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px] text-offwhite">
              With our new mobile app,{" "}
              <span className="font-bold italic">
                {" "}
                new mothers & mothers-to-be can now connect with experienced
                midwives & nurses.
              </span>
            </Paragraph>
            <Paragraph className="text-[20px] text-offwhite">
              They will provide much-needed care and support during those
              challenging early days. Our app also creates a community of
              like-minded mothers, allowing them to connect with one another,
              share ideas, and get the support they need to navigate this
              exciting new journey.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-white py-[50px]">
        <img src={MatSolution} alt="mat-problem" className="object-cover" />
      </div>

      <div className="w-full relative bg-white">
        <div className="w-[90%] mx-auto relative py-[50px] max-w-[1500px]">
          <StyledHeader
            number="01"
            firstText="The"
            secondText="Research."
            className="text-[50px] md:text-[80px]"
          />
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-footer">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] text-white max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="User Persona &"
              secondText="Pain Points."
              className="text-[50px] md:text-[60px] font-bold leading-[60px] md:leading-[56px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px] text-offwhite">
              To verify our claims, we carried out virtual interviews with two
              users who fall under the user groups we are designing for to
              understand their experiences and pain-points post delivery and the
              following insights were gathered.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="User Flows."
              className="text-[50px] md:text-[60px] font-bold leading-[60px] md:leading-[56px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px]">
              The goal was to create a flow that maps out major paths the users
              may follow and how they experience them.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-white">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <img src={MatUserFlow} alt="mobo-map" className="object-cover" />
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center relative py-[50px] max-w-[1500px]">
          <div className="w-full relative justify-start items-center">
            <Header
              firstText="Visual"
              secondText="Direction."
              className="mb-4 text-[60px] font-bold md:text-[96px] md:leading-[75px]"
            />
          </div>
          <div className="w-full relative flex flex-col justify-between items-center md:flex-row">
            <div className="w-full flex flex-col justify-center items-center md:w[50%]">
              <div className="mb-[50px]">
                <Header
                  firstText="Colors-"
                  secondText="Sunset orange & smoky black."
                  className="font-bold font-figtree text-[20px] mb-[20px] md:text-[24px] "
                />
                <Paragraph className="text-footer text-[20px] font-figtree">
                  Our Target audience are very prone to slip into depression so
                  an exciting, vibrant and uplifting color was chosen
                </Paragraph>
              </div>
              <div className="mb-[50px]">
                <Header
                  firstText="Typography-"
                  secondText="Nunito & Nunito sans."
                  className="font-bold font-figtree text-[20px] mb-[20px] md:text-[24px] "
                />
                <Paragraph className="text-footer text-[20px] font-figtree">
                  Nunito was chosen for its soft feel because it resonates with
                  our target audience which are the Women. Women are known to be
                  soft, tender and fragile. To create a balance, it was paired
                  with Nunito sans as a body text
                </Paragraph>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center md:w[50%]">
              <img src={MatFont} alt="mat-font" />
              <img src={MatColors} alt="mat-colors" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-footer">
        <div className="w-[90%] mx-auto relative py-[70px] text-white max-w-[1500px]">
          <StyledHeader
            number="02"
            firstText="High-fidelity"
            secondText="Screens."
            className="text-[40px] md:text-[60px]"
          />
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="Onboarding."
              className="text-[50px] md:text-[60px] font-bold leading-[60px] md:leading-[56px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px]">
              Highlighting Matcare’s features and how they can help.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <img src={MatOnboarding} alt="mobo-map" className="object-cover" />
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="Account Creation."
              className="text-[50px] md:text-[60px] font-bold leading-[60px] md:leading-[56px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px]">
              Users sign up to create account and Set their Location
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <img src={MatAccount} alt="mobo-map" className="object-cover" />
        </div>
      </div>

      <div className="w-full relative bg-offwhite pt-[30px] pb-[100px]">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative max-w-[1500px] md:flex-row ">
          <div className="flex flex-col w-full relative md:w-[50%]">
            <Header
              firstText="Home Screen."
              className="mb-4 text-[40px] font-bold md:text-[50px] xl:text-[70px]"
            />
            <Paragraph className="text-[20px] my-4 leading-[40px] md:text-[24px]">
              Users can choose from the options of Professional and experienced
              caregivers available from the Home screen. They can also see other
              mums in their neighborhood/nearby
            </Paragraph>
          </div>
          <div className="w-full relative md:w-[50%] flex justify-end items-center md:mx-3">
            <img src={MatHomeScreen} alt="Mobo-hero" className="object-cover" />
          </div>
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-footer">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] text-white md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="Book an"
              secondText="Appointment."
              className="text-[35px] md:text-[50px] xl:text-[60px] font-bold leading-[60px] md:leading-[60px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px] text-objective-list">
              Users book appointments with the caregivers by checking their
              details and based on how the caregiver is rated and the reviews
              they get from other users
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-footer">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center relative py-[50px] max-w-[1500px]">
          <img
            src={MatBookAppointment}
            alt="book appointment"
            className="object-cover"
          />
          <img src={MatBookAppointmentTwo} alt="book appointment two" />
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="Payments."
              className="text-[50px] md:text-[60px] font-bold leading-[60px] md:leading-[56px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px]">
              Users make payment immediately after imputing or updating their
              details
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <img src={MatPayment} alt="mat-payment" className="object-cover" />
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="Tracking."
              className="text-[50px] md:text-[60px] font-bold leading-[60px] md:leading-[56px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px]">
              Caregivers can be tracked by the user when coming for their
              appointment
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <img src={MatTracking} alt="mat-payment" className="object-cover" />
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="Community."
              className="text-[50px] md:text-[60px] font-bold leading-[60px] md:leading-[56px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px]">
              Users can connect with other mums nearby, create posts, reply and
              like other mum’s post.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <img src={MatCommunity} alt="mat-payment" className="object-cover" />
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-white">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="User Profile."
              className="text-[50px] md:text-[60px] font-bold leading-[60px] md:leading-[56px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
            <Paragraph className="text-[20px]">
              Users can access the caregivers they’ve worked with before, their
              posts, liked posts and groups. They can also add/edit their bio
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <img
            src={MatUserProfile}
            alt="mat-payment"
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full relative bg-white pt-[30px] pb-[100px]">
        <div className="w-[90%] mx-auto flex justify-between items-center flex-col relative max-w-[1500px] md:flex-row ">
          <div className="flex flex-col w-full relative md:w-[50%]">
            <Header
              firstText="Prototype."
              className="mb-4 text-[60px] font-bold md:text-[96px]"
            />
            <Paragraph className="text-[20px] my-4 leading-[40px] md:text-[24px]">
              Lets see a quick flow of how users can achieve there goals
            </Paragraph>
          </div>
          <div className="w-full relative md:w-[50%] flex justify-end items-center">
            <img
              src={MatPrototype}
              alt="Mat-prototype"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatCare;
