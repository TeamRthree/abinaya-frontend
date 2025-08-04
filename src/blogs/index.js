import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";

const blogs = [Blog1, Blog2, Blog3];

export default blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
