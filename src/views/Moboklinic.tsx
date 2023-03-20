import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import LazyImage from "../components/LazyImage";
import Footer from "../components/Footer";

import Mobiklinic from "../assets/mobiklinic.svg";
import MobiPharm from "../assets/moboklinic/mobo-pharm.svg";
import MobiProblem from "../assets/moboklinic/mobo-problem.svg";
import MobiSolution from "../assets/moboklinic/mobo-solution.svg";

const Moboklinic = () => {
  return (
    <div className="w-full relative">
      <Section heading="MOBIKLINIC" src={Mobiklinic}>
        <div className="w-full relative flex flex-col justify-between md:flex-row">
          <div className="self-start">
            <h1 className="font-figtree font-bold text-header w-full text-[40px] md:w-[80%]">
              Providing patients with easy & convenient access to medical
              professionals.
            </h1>
          </div>
          <div className=" my-3 md:my-0 justify-start">
            <h1 className="text-[14px] font-source-pro font-bold my-2">
              My roles
            </h1>
            <ul className="whitespace-nowrap text-[14px]">
              <li className="my-2">User reasearch</li>
              <li className="my-2">Wire-framing</li>
              <li className="my-2">Art direction & Visual Design</li>
              <li className="my-2">Prototyping</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section heading="PROJECT OVERVIEW" center>
        <div className="w-full mx-auto md:w-[60%]">
          <h1 className="text-[24px] font-figtree font-bold font-header">
            Patients can connect directly with doctors and pharmacists to
            address their health concerns and receive the care they need.
          </h1>
          <Paragraph>
            This innovative solution aims to improve the efficiency and
            effectiveness of the healthcare system by eliminating barriers to
            care and empowering patients to take control of their own health. I
            believe that this app has the potential to significantly improve the
            lives of patients and make a positive impact on the healthcare
            industry as a whole.
          </Paragraph>
        </div>
      </Section>
      <div className="w-full relative">
        <LazyImage src={MobiPharm} alt="mobi-pharm" />
      </div>
      <Section
        heading="THE PROBLEM"
        src={MobiProblem}
        rowWide="items-center flex-col-reverse md:flex-row"
        imageClassName="md:-mr-[200px]"
      >
        <div className="w-full md:mr-8">
          <h1 className="text-[24px] font-figtree font-bold font-header">
            There is poor accessibility to proper healthcare especially in
            Nigeria.
          </h1>
          <Paragraph>
            From over-saturated general hospitals to very rigorous procedures
            and even unqualified persons assuming roles they should not. A lot
            of people do not even know where to go to access credible health
            information, leaving them to seek advice from friends (who are not
            medically inclined) and unqualified persons. Due to these challenges
            among others, people are often left to self medicate and wait until
            the last moments before seeking help, leaving the average Nigerian
            in a state of less than optimal health.
          </Paragraph>
        </div>
      </Section>
      <Section
        heading="THE SOLUTION"
        src={MobiSolution}
        rowWide="items-center flex-col-reverse md:flex-row-reverse"
        imageClassName="my-3 md:-ml-[205px]"
      >
        <div className="w-full md:ml-[50px]">
          <h1 className="text-[24px] font-figtree font-bold font-header">
            An app that connects patient directly with doctors & pharmacists, to
            address their health concerns.
          </h1>
          <Paragraph>
            This innovative solution aims to improve the efficiency and
            effectiveness of the healthcare system by eliminating barriers to
            care and empowering patients to take control of their own health. I
            believe that this app has the potential to significantly improve the
            lives of patients and make a positive impact on the healthcare
            industry as a whole.
          </Paragraph>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default Moboklinic;
