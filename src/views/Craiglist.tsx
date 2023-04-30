import { useEffect } from "react";

import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import StyledHeader from "../components/StyledHeader";
import LazyImage from "../components/LazyImage";

import CraigHome from "../assets/craiglist/craiglist-home.png";
import CraigHighFidelity from "../assets/craiglist/craiglist-high_fidelity.png";
import CraigJobSearch from "../assets/craiglist/craiglist-job_search.png";
import CraigObjectives from "../assets/craiglist/craiglist-objectives.png";
import CraigEventListing from "../assets/craiglist/craiglist-event_listings.png";
import CraigFonts from "../assets/craiglist/craiglist-fonts.png";
import CraigColors from "../assets/craiglist/craiglist-colors.png";
import CraigCategories from "../assets/craiglist/craiglist-categories.png";
import CraigCategoriesSub from "../assets/craiglist/craiglist-categories_sub.png";
import CraigProjectGoals from "../assets/craiglist/craigist-project_goals.png";
import CraigDetailsPage from "../assets/craiglist/craiglist-details_page.png";
import CraigPrototype from "../assets/craiglist/craiglist-prototype.png";
import CraigHeroSection from "../assets/craiglist/craiglist-hero_section.png";
import MoboDropDown from "../assets/moboclinic/mobolclinic-dropdown.png";

const Craiglist = () => {
  const TIME_FRAME = ["Research : 1 Week", "Visual design : 1 week"];
  const ROLE = ["User Research", "Visual Design", "Prototyping"];
  const TOOLS = ["Google docs", "Photoshop", "Figjam", "Figma"];

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
              firstText="Craiglist."
              className="mb-4 text-[60px] font-bold md:text-[70px] xl:text-[96px]"
            />
            <Paragraph className="text-[20px] my-4 leading-[40px] md:text-[24px] font-figtree">
              Upgrading the User Interface of the craigslist website
            </Paragraph>
          </div>
          <div className="w-full relative md:w-[50%] flex justify-end items-center md:mx-3">
            <LazyImage src={CraigHome} alt="Mobo-hero" className="object-cover" />
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
        <div className="w-[90%] mx-auto flex justify-between items-start flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb_auto">
            <Header
              firstText="Project"
              secondText="Goals."
              className="text-[50px] md:text-[80px] font-bold leading-[60px] md:leading-[96px]"
            />
            <a
              href="#"
              className="text-footer text-[16px] my-10 font-[600px] inline-flex border-b-[1px] border-solid border-black w-[180px] cursor-pointer"
            >
              <span>Skip to the fun part</span>
              <LazyImage src={MoboDropDown} alt="mobo-dropdown" className="mx-2" />
            </a>
          </div>
          <div className="w-full relative flex  flex-col  md:w-[50%] font-figtree text-[20px] md:mx-3">
            <Paragraph>
              To upgrade the user interface of 3 screens, i.e, the homepage,
              search results page and details page.
            </Paragraph>
            <Paragraph>
              Craigslist (stylized as craigslist) is an American classified
              advertisements website with sections devoted to jobs, housing, for
              sale, items wanted, services, community service, gigs, resumes,
              and discussion forums.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-footer">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[50px] max-w-[1500px]">
          <LazyImage
            src={CraigProjectGoals}
            alt="mobo-map"
            className="object-cover"
          />
        </div>
      </div>

      <div className="w-full relative">
        <div className="w-[90%] mx-auto relative py-[70px] max-w-[1500px]">
          <StyledHeader
            number="01"
            firstText="The"
            secondText="Research."
            className="text-[60px] md:text-[80px]"
          />
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-footer">
        <div className="w-[90%] mx-auto flex flex-col relative max-w-[1500px]">
          <div className="w-full relative flex flex-col justify-between items-center text-white py-[50px] md:flex-row">
            <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
              <Header
                firstText="Objectives."
                className="text-[35px] md:text-[48px] font-bold leading-[40px] md:leading-[50px] self-start"
              />
            </div>
            <div className="w-full relative flex flex-col md:w-[50%] md:mx-3">
              <Paragraph className="text-[20px] text-offwhite font-figtree">
                Due to time and resource constraints, I relied only on secondary
                research to gain the necessary insights that would enable me
                deliver a useful outcome. Platforms such as medium and reddit
                were utilized to find out users experiences using the website.
              </Paragraph>
            </div>
          </div>
          <div className="w-full flex justify-center items-center relative py-[50px]">
            <LazyImage
              src={CraigObjectives}
              alt="mobo-map"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full relative py-[50px]">
        <div className="w-[90%] mx-auto flex justify-between items-start flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="Research"
              secondText="Findings."
              className="text-[35px] md:text-[48px] font-bold"
            />
          </div>
          <div className="w-full relative flex flex-col font-figtree md:w-[50%] md:mx-3 md:flex-row">
            <div className="w-full relative flex flex-col font-figtree text-[20px] md:w-1/2">
              <h1 className="w-full border-b-[2px] border-solid border-green-300 font-bold">
                Pros
              </h1>

              <Paragraph>Some users find it easy and straightforward</Paragraph>
              <Paragraph>
                Some users are comfortable selling low valued items
              </Paragraph>
            </div>
            <div className="w-full relative flex flex-col font-figtree text-[20px] my-4 md:my-auto md:w-1/2 md:ml-4">
              <h1 className="w-full border-b-[2px] border-solid border-red-300 font-bold">
                Cons
              </h1>

              <Paragraph>
                Some users have a hard time trusting the site due to its “shady”
                looking interface
              </Paragraph>
              <Paragraph>Site looks old and out-dated</Paragraph>
              <Paragraph>
                New users find navigation and carrying out some basic tasks
                difficult
              </Paragraph>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative py-[50px] bg-footer">
        <div className="w-[90%] mx-auto flex flex-col relative max-w-[1500px]">
          <div className="w-full relative text-white py-[50px]">
            <StyledHeader
              number="02"
              firstText="High-fidelity"
              secondText="Screens."
              className="text-[50px] md:text-[80px]"
            />
          </div>
          <div className="w-full flex justify-center items-center relative py-[50px]">
            <LazyImage
              src={CraigHighFidelity}
              alt="mobo-map"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center relative py-[50px] max-w-[1500px]">
          <div className="w-full relative justify-start items-center">
            <Header
              firstText="Visual"
              secondText="Direction."
              className="mb-4 text-[35px] font-bold md:text-[48px]"
            />
          </div>
          <div className="w-full relative flex flex-col justify-between items-center md:flex-row">
            <div className="w-full flex flex-col justify-center items-center md:w[50%]">
              <div className="mb-[50px] md:pr-[30px]">
                <Header
                  firstText="Colors"
                  className="font-bold font-figtree text-[20px] mb-[20px] leading-[30px] md:text-[24px] "
                />
                <Paragraph className="text-footer text-[20px] font-figtree md:w-[60%]">
                  Blue was chosen as the primary color as it creates a feeling
                  of trust and security
                </Paragraph>
              </div>
              <div className="mb-[50px] md:pr-[30px]">
                <Header
                  firstText="Typography"
                  className="font-bold font-figtree text-[20px] leading-[30px] mb-[20px] md:text-[24px] "
                />
                <Paragraph className="text-footer text-[20px] font-figtree md:w-[60%]">
                  Arimo is a modern san-serif that provides a fresh look to the
                  website and is highly legible.
                </Paragraph>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center md:w[50%]">
              <LazyImage src={CraigColors} alt="mat-font" />
              <LazyImage src={CraigFonts} alt="mat-colors" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative py-[50px]">
        <div className="w-[90%] mx-auto flex justify-start items-start flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb_auto">
            <Header
              firstText="Navigation."
              className="text-[35px] md:text-[48px] font-bold leading-[60px] md:leading-[96px] self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] font-figtree md:mx-3">
            <Paragraph className="text-[20px]">
              The navigation was divided into two categories. The first was
              optimized for a quick search of items or service the user may be
              in need of and can carry out authentication processes.
            </Paragraph>
            <Paragraph className="text-[20px]">
              The second category gives users the option of selecting from most
              popular service categories and get a view of all the categories
              offered.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative py-[50px]">
        <div className="w-[90%] mx-auto flex justify-start items-start flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb_auto">
            <Header
              firstText="The Hero Section."
              className="text-[35px] md:text-[48px] font-bold self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] font-figtree md:mx-3">
            <Paragraph className="text-[20px]">
              This section was designed to convey a clear message. What the site
              does, how the user can create an ad and change location.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[70px] max-w-[1500px]">
          <LazyImage src={CraigHeroSection} alt="mobo-map" className="object-cover" />
        </div>
      </div>

      <div className="w-full relative py-[50px]">
        <div className="w-[90%] mx-auto flex justify-start items-start flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="Sections."
              className="text-[35px] md:text-[48px] font-bold self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] font-figtree md:mx-3">
            <Paragraph className="text-[20px]">
              Using cards to design the sections enabled me to include pictures
              which improves trust for the site. Users can scan through popular
              categories which may help them save some time or scroll further
              down for more categories.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex flex-col justify-center items-center relative py-[70px] max-w-[1500px]">
          <LazyImage
            src={CraigCategories}
            alt="craiglist-categories"
            className="object-cover my-3"
          />
          <LazyImage
            src={CraigCategoriesSub}
            alt="craiglist-categories-sub"
            className="object-cover my-3"
          />
        </div>
      </div>

      <div className="w-full relative py-[50px]">
        <div className="w-[90%] mx-auto flex flex-col relative max-w-[1500px]">
          <div className="w-full relative flex flex-col justify-start items-start py-[50px]">
            <Header
              firstText="Event Listing &"
              secondText="Footer."
              className="text-[35px] md:text-[48px] font-bold leading-[40px] md:leading-[50px] self-start"
            />

            <Paragraph className="text-[20px] font-figtree">
              The footer was redesigned for easier navigation through the site.
              The menu links were reorganized and grouped by type to make
              finding the information you need as easy as possible.
            </Paragraph>
            <Paragraph className="text-[20px] font-figtree">
              Links to download the app on both IOS and android platforms were
              included.
            </Paragraph>
          </div>
          <div className="w-full flex justify-center items-center relative py-[50px]">
            <LazyImage
              src={CraigEventListing}
              alt="mobo-map"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full relative py-[50px]">
        <div className="w-[90%] mx-auto flex justify-start items-start flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="Search Results."
              className="text-[35px] md:text-[48px] font-bold self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] font-figtree md:mx-3">
            <Paragraph className="text-[20px]">
              The search sorting feature was optimized and made easily
              accessible to users. Results are displayed below in card formats.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[70px] max-w-[1500px]">
          <LazyImage src={CraigJobSearch} alt="mobo-map" className="object-cover" />
        </div>
      </div>

      <div className="w-full relative py-[50px]">
        <div className="w-[90%] mx-auto flex justify-start items-start flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="Details Page."
              className="text-[35px] md:text-[48px] font-bold self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] font-figtree md:mx-3">
            <Paragraph className="text-[20px]">
              The service detail page was redesigned so users can digest and
              understand the information given by the service provider. A map
              with proper tracking UI and a prominent call to action were among
              the elements adjusted so users can find the page easy to use.
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[70px] max-w-[1500px]">
          <LazyImage src={CraigDetailsPage} alt="mobo-map" className="object-cover" />
        </div>
      </div>

      <div className="w-full relative py-[50px]">
        <div className="w-[90%] mx-auto flex justify-start items-start flex-col relative py-[50px] max-w-[1500px] md:flex-row">
          <div className="flex flex-col w-full relative mb-[50px] md:w-[50%] md:mb-auto">
            <Header
              firstText="Prototype."
              className="text-[35px] md:text-[48px] font-bold self-start"
            />
          </div>
          <div className="w-full relative flex flex-col md:w-[50%] font-figtree md:mx-3">
            <Paragraph className="text-[20px]">
              A quick demonstration of the core screens
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-offwhite">
        <div className="w-[90%] mx-auto flex justify-center items-center relative py-[70px] max-w-[1500px]">
          <LazyImage src={CraigPrototype} alt="mobo-map" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Craiglist;
