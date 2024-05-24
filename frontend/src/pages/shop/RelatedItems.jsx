import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const data = [
  {
    id: "1",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview2-300x300.jpg?v=1714171786",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "2",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview3-300x300.jpg?v=1714171786",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "3",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview4-300x300.jpg?v=1714171785",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "4",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview11-300x300.jpg?v=1714171786",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "5",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview11-300x300.jpg?v=1714171786",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "6",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview4-300x300.jpg?v=1714171785",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "7",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview2-300x300.jpg?v=1714171786",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "8",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview3-300x300.jpg?v=1714171786",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
];
// STAR RATING
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} className="text-[#FFC209]" />);
  }
  return <div className="flex">{stars}</div>;
};

const RelatedItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [slidesToShow, setSlidesToShow] = useState(4);
  // const loading = useSelector((state) => state.products.Productloading);
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesToShow(4); // Full Desktop view
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(3); // Desktop view
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2); // Tablet view
      } else {
        setSlidesToShow(1); // Mobile view
      }
    };

    // Initial update
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // HANDLE SHOP
  const handleShop = () => {
    navigate("/shop");
    window.scroll(0, 0);
  };

  // HANDLE ITEM CLICK
  const handleItemClick = (id) => {
    navigate(`/selectedItem/${id}`);
    window.scroll(0, 0);
  };

  return (
    <>
      <section className="w-full pt-14 pb-10">
        <div className="px-3 sm:px-5 xl:px-0  max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="header px-0 sm:px-5 flex justify-between items-center flex-wrap gap-6">
            <div className="name">
              <h2 className="Noto mt-2 text-2xl font-semibold md:text-4xl md:leading-tight">
                Related Products
              </h2>
              <p className="h-0.5 w-16 bg-[#DEC344]"></p>
            </div>

            <div className="slider_button hidden sm:flex flex-row">
              {/* left arrow */}
              <button
                onClick={previous}
                className="mx-1.5 inline-block rounded-full border text-white bg-[#DEC344] hover:text-white border-[#DEC344] hover:bg-[#dec244db] p-2.5 focus:outline-none"
              >
                <IoIosArrowBack size={22} />
              </button>

              {/* right arrow */}
              <button
                onClick={next}
                className="mx-1.5 inline-block rounded-full border text-white bg-[#DEC344] hover:text-white border-[#DEC344] hover:bg-[#dec244db] p-2.5 focus:outline-none"
              >
                <IoIosArrowForward size={22} />
              </button>
            </div>
          </div>

          <div className="data">
            <div className="relative mt-8 sm:mt-12">
              <Slider ref={sliderRef} {...settings}>
                {data.map((data, index) => (
                  <div
                    key={index}
                    onClick={() => handleItemClick(data.id)}
                    className="mx-0 pb-7"
                  >
                    <div className="group max-w-[17rem] mx-auto overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-150 cursor-pointer border border-gray-200">
                      <img
                        className="object-contain w-full h-52 sm:h-56 transition duration-500 group-hover:scale-105"
                        src={data.image}
                        alt="products"
                      />

                      <div className="py-5 text-center">
                        <h3 className="mb-3 text-lg sm:text-xl font-semibold text-gray-800">
                          {data.name}
                        </h3>

                        <div className="mb-3 flex items-center justify-center gap-0.5">
                          <StarRating rating={data?.rating} />
                        </div>

                        <p className="mb-3 text-lg">
                          <span className="text-gray-400 line-through pr-1 font-semibold">
                            Rs.{data.sale_price}
                          </span>
                          <span className="text-red-500 font-semibold">
                            Rs.{data.price}
                          </span>
                        </p>

                        <button
                          className="text-sm px-5 py-2 bg-black text-white font-semibold"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="slider_button sm:hidden flex flex-row justify-center">
                {/* left arrow */}
                <button
                  onClick={previous}
                  className="mx-1.5 inline-block rounded-full border text-white bg-[#DEC344] hover:text-white border-[#DEC344] hover:bg-[#dec244db] p-2.5 focus:outline-none"
                >
                  <IoIosArrowBack size={22} />
                </button>

                {/* right arrow */}
                <button
                  onClick={next}
                  className="mx-1.5 inline-block rounded-full border text-white bg-[#DEC344] hover:text-white border-[#DEC344] hover:bg-[#dec244db] p-2.5 focus:outline-none"
                >
                  <IoIosArrowForward size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedItems;
