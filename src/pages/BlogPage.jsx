import { useParams, Link } from "react-router-dom";
import blogs from "../blogs";

const BlogPage = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog)
    return <p className="text-center text-red-500 mt-10">Blog not found.</p>;

  const BlogComponent = blog.component;

  // Related blogs: all except current
  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Blog Main */}
      <div className="w-full md:h-[500px] mb-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <p className="text-[#E73C7E] text-sm">{blog.date}</p>
      <h1 className="text-[#26346C] text-[24px] md:text-3xl font-bold mb-6">{blog.title}</h1>

      <div className="text-gray-700 space-y-4 mb-16">
        <BlogComponent />
      </div>

      {/* Related Blogs Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-[#26346C] mb-6">
          Related Blogs
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {relatedBlogs.map((b) => (
            <Link
              to={`/blogs/${b.slug}`}
              key={b.slug}
              className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition group"
            >
              <div className="h-[180px] overflow-hidden">
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-full h-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-[#E73C7E] mb-1">{b.date}</p>
                <h3 className="text-[#26346C] font-semibold text-base mb-1 line-clamp-2">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {b.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
