import { IoIosArrowForward } from "react-icons/io";
import "./SelectedItem.css";
import { Link, useParams } from "react-router-dom";
import { ProductOverviewTwo } from "./ProductDetails";
import { FaHome } from "react-icons/fa";
import RelatedItems from "../shop/RelatedItems";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { useEffect } from "react";
import { getProductByIdAsync } from "../../features/productSlice";
import { useDispatch, useSelector } from "react-redux";

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
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview2-300x300.jpg?v=1714171786",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "6",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview3-300x300.jpg?v=1714171786",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "7",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview4-300x300.jpg?v=1714171785",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "8",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview11-300x300.jpg?v=1714171786",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "9",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview2-300x300.jpg?v=1714171786",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "10",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview3-300x300.jpg?v=1714171786",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "11",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview4-300x300.jpg?v=1714171785",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "12",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview11-300x300.jpg?v=1714171786",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "13",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview2-300x300.jpg?v=1714171786",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "14",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview3-300x300.jpg?v=1714171786",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "15",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview4-300x300.jpg?v=1714171785",
    name: "Crystal Wave",
    rating: 4,
    price: "88",
    sale_price: "49",
  },
  {
    id: "16",
    image:
      "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/product-clearview11-300x300.jpg?v=1714171786",
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

const SelectedItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.singleProduct);
  console.log(product);

  useEffect(() => {
    dispatch(getProductByIdAsync(id));
  }, [id]);

  const selectedItem = data?.filter((item) => item.id === id);
  console.log("selectedItem", selectedItem);

  const ToDown = () => {
    window.scrollTo({
      top: 470,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="selectedSectionbg relative">
        <div className="px-5 md:px-7 xl:px-0 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <div className="pt-24 lg:pt-10 grid place grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 min-h-[65vh]">
            {/* LEFT SIDE */}
            <div className="flex items-end lg:items-center justify-center lg:justify-start">
              <div className="content text-center lg:text-start">
                <span
                  style={{ letterSpacing: "4px" }}
                  className="py-1 px-1.5 font-medium text-black bg-[#DEC344] text-[11px] lg:text-[13px]"
                >
                  SHOP
                </span>

                <h2 className="Noto mt-4 mb-6 text-4xl md:text-5xl font-medium text-white tracking-normal">
                  Product Details
                </h2>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="-mt-10 lg:mt-0 flex items-start lg:items-center justify-center lg:justify-end">
              <h2 className="mt-6 flex items-center gap-2 text-left font-normal text-white text-md md:text-lg">
                <Link
                  to="/"
                  className="flex items-center gap-1 hover:underline hover:underline-offset-4"
                >
                  <FaHome />
                  Home
                </Link>{" "}
                <IoIosArrowForward />
                <Link
                  to="/shop"
                  className="flex items-center gap-1 hover:underline hover:underline-offset-4"
                >
                  Shop
                </Link>{" "}
                <IoIosArrowForward /> SingleProduct
              </h2>
            </div>
          </div>
        </div>
        <div className="arrow absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={ToDown}>
            <TfiArrowCircleDown
              size={30}
              className="text-gray-50 font-semibold cursor-pointer"
            />
          </button>
        </div>
      </section>

      <ProductOverviewTwo product={product} id={id} />

      <RelatedItems />
    </>
  );
};

export default SelectedItem;
