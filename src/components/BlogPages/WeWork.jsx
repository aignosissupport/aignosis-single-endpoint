import React, { useState } from "react";
import Header from "../Header";
import aboutContent from "../aboutus/AboutContent.js";
import DOMPurify from 'dompurify';


import {
  FaMicroscope,
  FaClipboardCheck,
  FaBrain,
  FaGlobe,
  FaHistory,
} from "react-icons/fa";
import BlogFooter from "./BlogFooter";
import BlogContent from "./BlogContent";
import { useParams } from "react-router-dom";
import SEO from "../config/Seo.jsx";
import Newnavbar from "../Newnavbar";
const WeWork = () => {
  const { id } = useParams();
  const blog = aboutContent.blogs.find((b) => b.id === (id));
  console.log(blog, "aboutContent");
  const { pageTitle, image } = blog;
  const [openMilestone, setOpenMilestone] = useState(null);
  const sanitizedPageTitle = DOMPurify.sanitize(
    pageTitle
      .split(' ')
      .map((word, index) => (index === 7 ? `${word}<br/>` : word))
      .join(' ')
  );

  const milestones = [
    {
      title: "Early Stage Development",
      content:
        "Foundational research began at Harvard Medical School's Center for Biomedical Informatics, where Cognoa's founder, Dr. Dennis Wall PhD, was on faculty. Early research focused on addressing the crisis of late diagnosis for children with autism2 and exploring machine learning as a foundation for an accurate, efficient, objective, and user-friendly diagnostic solution. In this early work, machine learning approaches were applied to derive maximally predictive autism behavioral features using archived electronic patient record data from thousands of children with diverse conditions, presentations, and comorbidities.",
      icon: <FaMicroscope />,
    },
    {
      title: "Independent Validation of Classifiers",
      content:
        "This is the content for Independent Validation of Classifiers. Include relevant details here.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Prospective Validation Studies Begin",
      content:
        "This is the content for Prospective Validation Studies. Add specifics here.",
      icon: <FaBrain />,
    },
    {
      title:
        "Evolution into Canvas Dx: The First FDA Authorized Diagnostic System for Autism",
      content:
        "This is the content about the evolution into Canvas Dx. Include further information here.",
      icon: <FaGlobe />,
    },
    {
      title: "Real-World Integration",
      content:
        "This is the content for Real-World Integration. Provide details about its applications.",
      icon: <FaHistory />,
    },
  ];
  const handleToggle = (index) => {
    setOpenMilestone(openMilestone === index ? null : index);
  };
  const references = [
    {
      text: "U.S. Food & Drug Administration. FDA Authorizes Marketing of Diagnostic Aid for Autism Spectrum Disorder.",
      link: "https://www.fda.gov/news-events/press-announcements/fda-authorizes-marketing-diagnostic-aid-autism-spectrum-disorder",
    },
    {
      text: "Gordon-Lipkin, E., Foster, J. & Peacock, G. Whittling down the wait time: exploring models to minimize the delay from initial concern to diagnosis and treatment of autism spectrum disorder. Pediatr. Clin. 63, 851–859 (2016).",
      link: "https://pubmed.ncbi.nlm.nih.gov/27565363/",
    },
    {
      text: "Kosmicki, J. A., Sochat, V., Duda, M. & Wall, D. P. Searching for a minimal set of behaviors for autism detection through feature selection-based machine learning. Transl. Psychiatry 5, e514–e514 (2015).",
      link: "https://pubmed.ncbi.nlm.nih.gov/25710120/",
    },
    {
      text: "Levy, S., Duda, M., Haber, N. & Wall, D. P. Sparsifying machine learning models identify stable subsets of predictive features for behavioral detection of autism. Mol. Autism 8, 1–17 (2017).",
      link: "https://pubmed.ncbi.nlm.nih.gov/29270283/",
    },
    {
      text: "Wall, D. P., Dally, R., Luyster, R., Jung, J.-Y. & DeLuca, T. F. Use of artificial intelligence to shorten the behavioral diagnosis of autism. (2012). PLoS One. 2012;7(8):e43855.",
      link: "https://pubmed.ncbi.nlm.nih.gov/22952789/",
    },
    {
      text: "Duda, M., Daniels, J. & Wall, D. P. Clinical evaluation of a novel and mobile autism risk assessment. J. Autism Dev. Disord. 46, 1953–1961 (2016).",
      link: "https://pubmed.ncbi.nlm.nih.gov/26873142/",
    },
    {
      text: "Duda, M., Kosmicki, J. A. & Wall, D. P. Testing the accuracy of an observation-based classifier for rapid detection of autism risk. Transl. Psychiatry 4, e424–e424 (2014).",
      link: "https://pubmed.ncbi.nlm.nih.gov/25116834/",
    },
    {
      text: "Wall, D. P., Kosmicki, J., Deluca, T. F., Harstad, E. & Fusaro, V. A. Use of machine learning to shorten observation-based screening and diagnosis of autism. Transl. Psychiatry 2, e100–e100 (2012).",
      link: "https://www.nature.com/articles/tp201210",
    },
    {
      text: "Tariq, Q. et al. Mobile detection of autism through machine learning on home video: A development and prospective validation study. PLoS Med. 15, e1002705 (2018).",
      link: "https://pubmed.ncbi.nlm.nih.gov/30481180/",
    },
    {
      text: "Kanne, S. M., Carpenter, L. A. & Warren, Z. Screening in toddlers and preschoolers at risk for autism spectrum disorder: Evaluating a novel mobile‐health screening tool. Autism Res. 11, 1038–1049 (2018).",
      link: "https://pubmed.ncbi.nlm.nih.gov/29734507/",
    },
    {
      text: "Abbas, H., Garberson, F., Glover, E. & Wall, D. P. Machine learning approach for early detection of autism by combining questionnaire and home video screening. J. Am. Med. Inform. Assoc. 25, 1000–1007 (2018).",
      link: "https://pubmed.ncbi.nlm.nih.gov/29741630/",
    },
    {
      text: "Abbas, H., Garberson, F., Liu-Mayo, S., Glover, E. & Wall, D. P. Multi-modular AI approach to streamline autism diagnosis in young children. Sci. Rep. 10, 1–8 (2020).",
      link: "https://www.nature.com/articles/s41598-020-61213-w",
    },
    {
      text: "Megerian, J. T. et al. Evaluation of an Artificial Intelligence-Based Medical Device for Diagnosis of Autism Spectrum Disorder. Nat. Partn. J.- Digit. Med. (2022) doi:10.1038/s41746-022-00598-6.",
      link: "https://www.nature.com/articles/s41746-022-00598-6",
    },
    {
      text: "Brian, J. A., Zwaigenbaum, L. & Ip, A. Standards of diagnostic assessment for autism spectrum disorder. Paediatr. Child Health 24, 444–451 (2019).",
      link: "https://pubmed.ncbi.nlm.nih.gov/31660042/",
    },
    {
      text: "Wall, D. P., et al. Optimizing a de novo artificial intelligence-based medical device under a predetermined change control plan: Improved ability to detect or rule out pediatric autism, Intelligence-Based Medicine, Volume 8, 2023, 100102, ISSN 2666-5212.",
      link: "https://www.sciencedirect.com/science/article/pii/S2666521223000169?via%3Dihub",
    },
  ];
  return (
    <>
    <Newnavbar/>
     <SEO
    canonicalUrl={'https://aignosis.in/blog'}
    metaDescription={'Stay updated with the latest insights on autism, AI-powered assessments, and special education. Explore expert articles on Aignosis Blog for valuable knowledge.'}
    pageTitle={'Aignosis Blog | Insights on Autism, AI, and Special Education'}
    />
    <div className="bg-[#1A0C25] md:p-2 max-sm:pt-2">
      <Header />
      <div className="bg-[#1A0C25] mt-[5vw] min-h-screen">

      <div className="relative">
  <div className="absolute inset-0 bg-black opacity-40"></div>
  {/* Overlay */}
  <img
  loading="lazy"
    src={image}
    className="w-full h-[200px] object-fit mb-4 max-sm:object-fit"
  />
  <p
  className="font-montserrat text-[#F6E8FB] font-bold absolute text-center top-[8vw] max-sm:top-[15vw]  left-[4vw] max-sm:left-[1vw] text-2xl"
  dangerouslySetInnerHTML={{ __html: sanitizedPageTitle }}
></p>
</div>



        <div>
        </div>
        <div className="flex flex-col gap-6  p-[10vw] mb-8 max-sm:p-[0] max-w-[3xl]">
          <BlogContent aboutContent={aboutContent} />

          {/* <div>
            <div className="md:ml-[4vw] p-8 rounded-lg">
              {milestones.map((milestone, index) => (
                <div key={index} className="mb-8">
                                   <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 flex items-center justify-center border border-[#9C00AD] rounded-full text-white mr-4">
                        <span className="text-base font-bold">
                          {milestone.icon}
                        </span>
                      </div>
                      <h2 className="text-2xl font-semibold text-[#F6E8FB] max-sm:text-lg font-raleway">
                        {milestone.title}
                      </h2>
                    </div>
                   
                    <span
                      className="text-[#F6E8FB] text-2xl cursor-pointer"
                      onClick={() => handleToggle(index)}
                    >
                      {openMilestone === index ? "−" : "+"}
                    </span>
                  </div>

                  
                  {openMilestone === index && (
                    <p className="text-[#F6E8FB] font-raleway pl-[4vw] leading-relaxed mb-6">
                      {milestone.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div> */}
        </div>
        {/* <div className="bg-gradient-to-b from-[#241E22] to-[#43284C] p-[5vw] px-[10vw] rounded-lg text-white">
          <h2 className="text-2xl font-bold mb-4">References</h2>
          <ol className="list-inside space-y-4">
            {references.map((reference, index) => {
              const letter = String.fromCharCode(97 + index);
              return (
                <li key={index} className="leading-relaxed">
                  <span className="font-bold">{letter}.</span>
                  <a
                    href={reference.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F6E8FB] hover:text-purple-400 ml-2 underline"
                  >
                    {reference.text}
                  </a>
                </li>
              );
            })}
          </ol>
        </div> */}
        <BlogFooter />
      </div>
    </div>
    </>
  );
  
};

export default WeWork;
