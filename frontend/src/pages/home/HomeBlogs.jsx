import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const HomeBlogs = () => {
  const navigate = useNavigate();

  // HANDLE SHOP
  const handleBlog = (id) => {
    navigate(`/blogs/${id}`);
    window.scroll(0, 0);
  };

  return (
    <>
      <section className="w-full pt-20 pb-10">
        <div className="px-3 sm:px-5 xl:px-0  max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="header text-center">
            <span
              style={{ letterSpacing: "4px" }}
              className="py-1 px-1.5 font-medium text-black bg-[#DEC344] text-[11px] lg:text-[13px]"
            >
              BLOG
            </span>
            <h2 className="Noto mt-2 text-2xl font-semibold md:text-5xl md:leading-tight">
              Popular Blog & News
            </h2>
            <p className="mt-2.5 text-gray-600 dark:text-neutral-400">
              See how game-changing companies are making the most of every
              engagement with Preline.
            </p>
          </div>

          <div className="data">
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
              <article
                onClick={() => handleBlog(1)}
                className="overflow-hidden bg-[#F5F5F5] border border-gray-200 rounded-lg shadow transition hover:shadow-lg cursor-pointer"
              >
                <img
                  alt=""
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/post-clearview1-768x549.jpg?v=1716239694"
                  className="h-56 w-full object-cover"
                />

                <div className="p-4 sm:p-6">
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    How to position your furniture for positivity
                  </h3>

                  <time
                    datetime="2022-10-10"
                    className="block text-xs text-gray-500"
                  >
                    {" "}
                    10th Oct 2022{" "}
                  </time>
                </div>
              </article>

              <article
                onClick={() => handleBlog(2)}
                className="overflow-hidden bg-[#F5F5F5] border border-gray-200 rounded-lg shadow transition hover:shadow-lg cursor-pointer"
              >
                <img
                  alt=""
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/post-clearview2-768x549.jpg?v=1716239694"
                  className="h-56 w-full object-cover"
                />

                <div className="p-4 sm:p-6">
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    How to position your furniture for positivity
                  </h3>

                  <time
                    datetime="2022-10-10"
                    className="block text-xs text-gray-500"
                  >
                    {" "}
                    10th Oct 2022{" "}
                  </time>
                </div>
              </article>

              <article
                onClick={() => handleBlog(3)}
                className="overflow-hidden bg-[#F5F5F5] border border-gray-200 rounded-lg shadow transition hover:shadow-lg cursor-pointer"
              >
                <img
                  alt=""
                  src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/post-clearview3-768x549.jpg?v=1716239694"
                  className="h-56 w-full object-cover"
                />

                <div className="p-4 sm:p-6">
                  <h3 className="mb-1 text-lg font-semibold text-gray-900">
                    How to position your furniture for positivity
                  </h3>

                  <time
                    datetime="2022-10-10"
                    className="block text-xs text-gray-500"
                  >
                    {" "}
                    10th Oct 2022{" "}
                  </time>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBlogs;
