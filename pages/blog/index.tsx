import BlogIndexPage from "../../src/components/BlogIndexPage";

const AllArticles = () => {
  console.log("inside blog index");
  return <BlogIndexPage articlesPerPage={6} />;
};

export default AllArticles;
