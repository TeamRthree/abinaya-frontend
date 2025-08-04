import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  // Format date to a more readable form (e.g., "July 10, 2025")
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link to={`/blogs/${blog.slug}`}>
      <div style={{
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // x=0, y=0 → all-around glow
  }} className="flex gap-4 p-2 bg-white rounded-[10px] h-[170px]  overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer max-w-2xl">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-[50%] h-full rounded-[6px] object-cover"
        />

        <div className="py-3 pr-4">
          <p className="text-[#E72D74] text-sm font-medium mb-1">{formattedDate}</p>
          <h3 className="text-[#26346C] font-semibold text-lg leading-snug mb-1">
            {blog.title}
          </h3>
          <p className="text-[#26346C]/70 text-sm leading-snug line-clamp-2">
            {blog.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
