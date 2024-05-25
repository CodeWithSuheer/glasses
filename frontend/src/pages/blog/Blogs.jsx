const Blogs = () => {
  return (
    <>
      <div>
        <div className="max-w-3xl px-4 pt-6 lg:pt-32 pb-12 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-2xl">
            {/* Content */}
            <div className="space-y-5 md:space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Ohms Too Low on a Vape: What Does It Mean?
                </h2>
                <p className="text-lg text-gray-800">
                  If your vape mod displays the error “Ohms Too Low” when you
                  press the fire button, it means that your device can’t work
                  safely because the detected resistance of the atomizer coil
                  installed in the tank is too low.The best vapes always have
                  built-in protection circuits that manage power delivery to
                  ensure that you can vape safely
                </p>
              </div>
              <p className="text-lg text-gray-800">
                In some cases, a vape mod may also display the “Ohms Too Low”
                error when it detects a short circuit. Whatever the reason for
                the error may be, you can’t vape until you’ve resolved it
              </p>
              <figure>
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Ohms_too_low.jpg?v=1713553714"
                  alt="Image Description"
                />
              </figure>
              <p className="text-lg text-gray-800">
                Before you get too deep into troubleshooting your vape mod’s
                “Ohms Too Low” error, you should check your device’s
                specifications because it’s possible that the coil’s resistance
                actually is too low. When you check the specifications of a
                device like the Kroma 217 at Innokin.com, you’ll see the
                device’s supported coil resistances at the bottom of the page
                next to “Resistance range.” In this case, the Kroma 217 supports
                coils with resistances as low as 0.1 ohm. You’re not likely to
                find a pre-built coil with a resistance lower than that – but if
                you do, it won’t work with this device.
              </p>
              <p className="text-lg text-gray-800">
                Every vape mod has a minimum supported coil resistance. If you
                can’t find your device’s minimum resistance online, you should
                be able to find it in the instruction manual.
              </p>
              <blockquote className="text-center p-4 sm:px-7">
                <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal">
                  You can usually find the resistance of a vape coil on its box
                  and etched into the side of the coil itself.
                </p>
              </blockquote>
              <figure>
                <img
                  className="w-full object-cover rounded-xl"
                  src="https://cdn.shopify.com/s/files/1/0649/1399/8024/files/Kroma_217-Apr-18-2024-08-53-15-3416-AM.webp?v=1713554018"
                  alt="Image Description"
                />
              </figure>
            </div>
            {/* End Content */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
