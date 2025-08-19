import { Link } from "react-router-dom";
import blogs from "../blogs"; // Assuming sorted by date desc
import { FaArrowRight } from "react-icons/fa6";

const RecentBlogsSection = () => {
  const recent = blogs.slice(0, 3); // First 3 blogs

  return (
    <section className="py-12 px-4  md:px-10 bg-white">
      <div className="md:w-5xl mx-auto">
        <h2 className="text-[#E73C7E] text-[24px] md:text-[36px] font-medium text-center mb-4">
          Blogs
        </h2>
        <p className="text-center text-[14px] md:text-[20px] text-[#26346C]/70 max-w-2xl mx-auto mb-10">
          We share common trends, strategies ideas, opinions, short & long stories from the team behind company.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="h-[250px] rounded-[6px] w-full object-cover "
            />
            <div className="py-5 md:p-5">
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
                <div className="p-4 pt-0 flex flex-col gap-2">
                  <p className="text-[10px] md:text-[16px] text-[#E73C7E] mb-[2px]">{blog.date}</p>
                  <h4 className="text-[14px] md:text-[20px] font-semibold text-[#26346C] leading-[1.2] mb-1">
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

        {/* Button */}
        <div className="flex justify-center mt-[45px] md:mt-[90px] text-center group">
          <Link
            to="/blogs"
            className="bg-[#FF56A6] flex items-center gap-3 text-[14px] md:text-[18px] text-[#FEFEFE] px-4 py-2 md:py-3 rounded-[6px] border hover:border-[#FF56A6] hover:text-[#FF56A6] hover:bg-transparent transition-all duration-300 ease-in-out"
          >
            More Blogs <div>
              <FaArrowRight className="group-hover:-rotate-45 transition-all duration-200 ease-in-out"/>
              </div>
                        
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogsSection;
