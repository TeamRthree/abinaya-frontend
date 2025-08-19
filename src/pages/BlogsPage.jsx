// Add more as needed
import BlogCard from "../components/BlogCard";
import RecentBlogs from "../components/RecentBlogsSection";
import blogs from "../blogs";
import { Link } from "react-router-dom";

 // Directly declared here, not in separate file

const BlogsPage = () => {
const recent = blogs.slice(0, 3); 

  return (
    <div className="px-4 pb-16 md:py-10 max-w-5xl mx-auto">
        <h2 className="text-[#E64771] w-5xl mx-auto text-[24px] md:text-[32px] font-medium mb-8">Recent Blog Posts</h2>
      <div className="grid md:w-5xl mx-auto grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* Big Left Card */}
          <Link
          style={{
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // x=0, y=0 → all-around glow
  }}
            to={`/blogs/${recent[0].slug}`}
            className=" bg-white rounded-[10px]  p-2 overflow-hidden hover:shadow-lg transition group flex flex-col"
          >
            <img
              src={recent[0].image}
              alt={recent[0].title}
              className="h-[250px] w-full rounded-[6px] object-cover "
            />
            <div className="p-5">
              <p className="text-[14px] md:text-[16px] text-[#E64771] font-medium mb-1">{recent[0].date}</p>
              <h3 className="text-[#3A405B] font-semibold text-[22px] md:text-[24px] mb-2">
                {recent[0].title}
              </h3>
              <p className="text-[16px] md:text-[16px] text-[#667085] line-clamp-2">
                {recent[0].excerpt}
              </p>
            </div>
          </Link>

          {/* Right 2 Smaller Stacked Cards */}
          <div className="grid gap-6">
            {recent.slice(1).map((blog) => (
              <Link
              style={{
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // x=0, y=0 → all-around glow
  }}
                key={blog.slug}
                to={`/blogs/${blog.slug}`}
                className="bg-white rounded-[10px] hover:shadow-lg p-2 transition group overflow-hidden flex"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-[40%] h-full rounded-[6px] object-cover flex-shrink-0 "
                />
                <div className="p-4">
                  <p className="text-[12px] md:text-[16px] text-[#E73C7E] mb-[2px]">{blog.date}</p>
                  <h4 className="text-[16px] md:text-[20px] font-medium md:font-semibold text-[#26346C] leading-[1.2] mb-1">
                    {blog.title}
                  </h4>
                  <p className="text-[12px] md:text-[16px] text-gray-600 line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

<h2 className="text-[#E64771] w-5xl mx-auto text-[24px] md:text-[32px] font-medium mb-8">All Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
