import { IoIosArrowForward } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="shopSectionbg ">
        <div className="px-5 md:px-7 xl:px-0 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="pt-24 lg:pt-10 grid place grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 min-h-[65vh]">
            {/* LEFT SIDE */}
            <div className="flex items-end lg:items-center justify-center lg:justify-start">
              <div className="content text-center lg:text-start">
                <span
                  style={{ letterSpacing: "4px" }}
                  className="py-1 px-1.5 font-medium text-black bg-[#DEC344] text-[11px] lg:text-[13px]"
                >
                  ABOUT
                </span>

                <h2 className="Noto mt-4 mb-6 text-4xl md:text-5xl font-medium text-white tracking-normal">
                  About
                </h2>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-start lg:items-center justify-center lg:justify-end">
              <h2 className="mt-6 flex items-center gap-2 text-left font-normal text-white text-md md:text-lg">
                <Link
                  to="/"
                  className="flex items-center gap-1 hover:underline hover:underline-offset-4"
                >
                  <FaHome />
                  Home
                </Link>{" "}
                <IoIosArrowForward />
                About
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3 lg:py-16 px-4 sm:px-4 xl:px-0">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* FIRST CARD */}
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="left_img group overflow-hidden">
              <img
                className="transition duration-500 group-hover:scale-105 w-full"
                src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/design-sect-pn1nv6oznl5nueqhyuiyembh9zgfumb1p6pl4obwc4.jpg?v=1716422494"
                alt=""
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 lg:ml-10">
                <span
                  style={{ letterSpacing: "4px" }}
                  className="py-1 px-1.5 font-medium text-black bg-[#DEC344] text-[11px] lg:text-[13px]"
                >
                  DESIGN
                </span>
                <h2 className="mt-3 Noto mb-1.5 sm:mb-3 text-2xl md:text-3xl font-semibold">
                  Designed In New York
                </h2>
                <p className="mb-7 sm:mb-7 lg:mb-7 text-md max-w-full">
                  Sapien amet dui rutrum quis lectus accumsan morbi aliquam
                  interdum. Nisl malesuada imperdiet nunc ultricies massa id
                  urna sit. Elementum velit aliquam aliquet aliquam id volutpat.
                  Sed sodales in orci at risus lectus pharetra in mollis odio.
                </p>

                <p className="mb-7 sm:mb-7 lg:mb-7 text-md max-w-full">
                  Sapien amet dui rutrum quis lectus accumsan morbi aliquam
                  interdum. Nisl malesuada imperdiet nunc ultricies massa id
                  urna sit. Elementum velit aliquam aliquet aliquam id volutpat.
                  Sed sodales in orci at risus lectus pharetra in mollis odio.
                </p>
              </div>
            </div>
          </div>

          {/* SECOND CARD */}
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 sm:ml-0 mr-0 lg:mr-10">
                <span
                  style={{ letterSpacing: "4px" }}
                  className="py-1 px-1.5 font-medium text-black bg-[#DEC344] text-[11px] lg:text-[13px]"
                >
                  MISSION
                </span>
                <h2 className="mt-3 Noto mb-1.5 sm:mb-3 text-2xl md:text-3xl font-semibold">
                  Our Mission
                </h2>
                <p className="mb-7 sm:mb-7 lg:mb-7 text-md max-w-full">
                  Sapien amet dui rutrum quis lectus accumsan morbi aliquam
                  interdum. Nisl malesuada imperdiet nunc ultricies massa id
                  urna sit. Elementum velit aliquam aliquet aliquam id volutpat.
                  urna sit. Elementum velit aliquam aliquet aliquam id volutpat.
                  Sed sodales in orci at risus lectus pharetra in mollis odio.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="left_img group overflow-hidden">
              <img
                className="transition duration-500 group-hover:scale-105 w-full"
                src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/mission-sect-pn1nv8ko1988hmnrnvc7jluegr76a0iidg0k3893zo.jpg?v=1716422493"
                alt=""
              />
            </div>
          </div>

          {/* THIRD CARD */}
          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {/* LEFT SIDE */}
            <div className="left_img group overflow-hidden">
              <img
                className="transition duration-500 group-hover:scale-105 w-full"
                src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/design-sect-pn1nv6oznl5nueqhyuiyembh9zgfumb1p6pl4obwc4.jpg?v=1716422494"
                alt=""
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center">
              <div className="ml-2 lg:ml-10">
                <span
                  style={{ letterSpacing: "4px" }}
                  className="py-1 px-1.5 font-medium text-black bg-[#DEC344] text-[11px] lg:text-[13px]"
                >
                  DESIGN
                </span>
                <h2 className="mt-3 Noto mb-1.5 sm:mb-3 text-2xl md:text-3xl font-semibold">
                  Designed In New York
                </h2>
                <p className="mb-7 sm:mb-7 lg:mb-7 text-md max-w-full">
                  Sapien amet dui rutrum quis lectus accumsan morbi aliquam
                  interdum. Nisl malesuada imperdiet nunc ultricies massa id
                  urna sit. Elementum velit aliquam aliquet aliquam id volutpat.
                  Sed sodales in orci at risus lectus pharetra in mollis odio.
                </p>

                <p className="mb-7 sm:mb-7 lg:mb-7 text-md max-w-full">
                  Sapien amet dui rutrum quis lectus accumsan morbi aliquam
                  interdum. Nisl malesuada imperdiet nunc ultricies massa id
                  urna sit. Elementum velit aliquam aliquet aliquam id volutpat.
                  Sed sodales in orci at risus lectus pharetra in mollis odio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
