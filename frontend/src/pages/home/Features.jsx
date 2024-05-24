import { FiTruck } from "react-icons/fi";

const Features = () => {
  return (
    <>
      <section className="w-full bg-black">
        <div className="max-w-7xl mx-auto py-11">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 gap-y-7 lg:gap-5 sm:px-8 px-4 text-white">
            {/* BOX 1 */}
            <div className="box1 flex justify-center items-center flex-col">
              <FiTruck size={34} className="mb-2.5 text-yellow-400" />
              <h3 className="mb-1 text-md font-medium">
                FREE SHIPPING & RETURNS
              </h3>
              <p className="text-gray-300 text-sm">
                Lacus, egestas enim ut quis risus
              </p>
            </div>

            {/* BOX 2 */}
            <div className="box1 flex justify-center items-center flex-col">
              <FiTruck size={34} className="mb-2.5 text-yellow-400" />
              <h3 className="mb-1 text-md font-medium">
                GUARANTEE ORIGINAL ITEMS
              </h3>
              <p className="text-gray-300 text-sm">
                Lacus, egestas enim ut quis risus
              </p>
            </div>

            {/* BOX 3 */}
            <div className="box1 flex justify-center items-center flex-col">
              <FiTruck size={34} className="mb-2.5 text-yellow-400" />
              <h3 className="mb-1 text-md font-medium">100% SECURE CHECKOUT</h3>
              <p className="text-gray-300 text-sm">
                Lacus, egestas enim ut quis risus
              </p>
            </div>

            {/* BOX 4 */}
            <div className="box1 flex justify-center items-center flex-col">
              <FiTruck size={34} className="mb-2.5 text-yellow-400" />
              <h3 className="mb-1 text-md font-medium">24H CUSTOMER SERVICE</h3>
              <p className="text-gray-300 text-sm">
                Lacus, egestas enim ut quis risus
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
