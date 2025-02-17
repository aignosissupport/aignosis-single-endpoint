import React, { useState, lazy , Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import blogimg1 from "../../assets/blogimg1.png";
import aboutContent from "../aboutus/AboutContent.js";
import blog from "./BlogData";
import SEO from "../config/Seo.jsx";
import Newnavbar from "../Newnavbar";

// Lazy-loaded components
const BlogSidebar = lazy(() => import("./BlogSidebar"));
const Header = lazy(() => import("../Header"));
const BlogCard = lazy(() => import("./BlogCard"));
const Pagination = lazy(() => import("./Pagination"));
const BlogCategory = lazy(() => import("./BlogCategory"));
const BlogFooter = lazy(() => import("./BlogFooter"));

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [filteredBlogs, setFilteredBlogs] = useState(aboutContent.blogs);
 
  const firstblog = aboutContent.blogs.find((b) => b.id === "ai-vs-traditional-autism-diagnosis");
  console.log(firstblog, "blogData");
  

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchInput(query);
    const filtered = aboutContent.blogs.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
    setFilteredBlogs(filtered);
  };

  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <>
    <Newnavbar/>
    <SEO
    canonicalUrl={'https://aignosis.in/blog'}
    metaDescription={'Stay updated with the latest insights on autism, AI-powered assessments, and special education. Explore expert articles on Aignosis Blog for valuable knowledge.'}
    pageTitle={'Aignosis Blog | Insights on Autism, AI, and Special Education'}
    />
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Header />
      </div>
      <div className="bg-[#1A0C25] min-h-screen font-raleway">
  <div className="flex max-sm:flex-col gap-2 bg-[#1A0C25] p-6">
    {/* Sidebar */}
    <div className="md:w-1/4 mt-[4vw]">
      <BlogSidebar blogData={blog} />
    </div>

    {/* Main Content */}
    <div className="w-full md:w-3/4 mt-[8vw]">
      {/* Search Bar */}
      <div className="bg-[#1A0C25] border border-[#9C00AD66] p-4 rounded-lg md:max-w-4xl mx-auto mb-6">
      <input
                  type="text"
                  value={searchInput}
                  onChange={handleSearchChange}
                  placeholder=" Search blog posts"
                  className="w-full p-3 rounded-lg bg-[#1A0C25] text-[#F6E8FB] text-center border border-[#9C00AD66] focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
      </div>
      {searchInput && (
  <div className="text-center text-[#F6E8FB] mb-4">
    <p className="text-sm">
      Showing results for: <span className="font-bold text-purple-400">{searchInput}</span>
    </p>
  </div>
)}

      {/* Section */}
      {!searchInput && (
      <section className="bg-[#1A0C25] border border-[#9C00AD66] p-8 rounded-lg md:max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#F6E8FB]">
            Featured Posts
          </h2>
          <a
            href="/blog/early-signs-of-autism-in-children"
            className="text-sm text-[#F6E8FB] hover:text-purple-400 flex items-center"
          >
            More <span className="ml-1">→</span>
          </a>
        </div>
      
   
 


              {/* Featured Post */}
              <div
                className="bg-[#2A183885] border border-[#9C00AD4D] p-6 rounded-lg text-white"
                onClick={() => handleCardClick(firstblog.id)}
              >
                <img
                  src={firstblog.blogimg}
                  alt="Understanding Autism"
                  className="rounded-lg mb-4 w-full object-cover"
                />
                <h3 className="text-lg text-[#F6E8FB] font-semibold mb-2">
                  {firstblog.title}
                </h3>
                <p className="text-sm text-[#B740A1] mb-4">
                  {firstblog.author}{" "}
                  <span className="text-gray-400">• {firstblog.time}</span>
                </p>
                <p className="text-sm text-[#F6E8FB]">
                  {firstblog.metaDescription}
                </p>
              </div>
            </section>

)}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-[8vw] md:mt-[2vw] rounded-lg max-w-4xl mx-auto">
  {filteredBlogs.map((cardData, index) => (
    <BlogCard
      handleCardClick={handleCardClick}
      cardData={cardData}
      key={index} // Unique key for each item
      image={cardData.blogimg}
      title={cardData.title}
      author={cardData.author}
      time={cardData.time}
      description={cardData.metaDescription}
    />
  ))}
</div>

            
          </div>
        </div>
       
        
        <BlogFooter />
      </div>
      </Suspense>
      </>
  );
};

export default BlogPage;
