import React from "react";

const BlogView = () => {
  return (
    <div className="bg-[#1A0C25] ">
        
    <div className="bg-[#1A0C25] text-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-4">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          / Post Title
        </nav>

        {/* Title and Meta Information */}
        <header className="mb-6">
          <h1 className="text-4xl font-bold text-white">Post Title</h1>
          <div className="text-gray-400 mt-2">
            <span>Author</span> <span className="text-purple-500">|</span> <span>Category</span> <span className="text-purple-500">|</span> <span>a min ago</span>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image and Text Content */}
          <div className="flex-1">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Post"
              className="rounded-lg mb-6"
            />
            <p className="text-gray-300 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum at neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit. Etiam iaculis finibus egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo leo.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend.
            </p>
          </div>

          {/* Table of Contents */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-gray-800 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
              <ul className="text-gray-300 space-y-2">
                <li className="hover:text-purple-400 cursor-pointer">Lorem ipsum</li>
                <li className="hover:text-purple-400 cursor-pointer">Lorem ipsum</li>
                <li className="hover:text-purple-400 cursor-pointer">Lorem ipsum</li>
                <li className="hover:text-purple-400 cursor-pointer">Lorem ipsum</li>
                <li className="hover:text-purple-400 cursor-pointer">Lorem ipsum</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Additional Content */}
        <div className="mt-6 text-gray-300">
          <p className="leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum at neque id ex semper varius a sit amet metus. Vivamus congue dolor eget aliquam hendrerit.
          </p>
          <p className="leading-relaxed mb-4">
            Etiam iaculis finibus egestas. Nam viverra urna quis odio efficitur malesuada. Maecenas rhoncus enim eu scelerisque rutrum. Pellentesque et mollis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed commodo leo. Suspendisse potenti. Maecenas gravida ipsum placerat ligula posuere, ut rhoncus velit eleifend.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BlogView;
