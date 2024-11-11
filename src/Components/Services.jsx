import image from "../assets/SaveOnEveryRide/SaveOnRide.jpg";

function Services() {
  const style1 = "flex flex-col sm:flex-row sm:gap-24 sm:ml-[4%]";
  const cardStyle = "bg-[#1D3244] p-4 w-full sm:w-2/6 rounded-lg";
  const titleStyle = "text-white text-3xl text-center mb-4 font-serif";

  return (
    <>
      <div className={titleStyle}>
        Save on Every ride!
      </div>
      <div
        className="bg-[#6D7179] mx-[4%] rounded-md p-16 flex flex-col gap-2 sm:gap-6 text-white font-serif font-bold mb-6"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={style1}>
          <div className={`${cardStyle} mb-[2%]`}>
            Compare Prices Across Providers
          </div>
          <div className={`${cardStyle} mt-[2%] sm:ml-[20%]`}>
            Transparent Pricing
          </div>
        </div>
        <div className={style1}>
          <div className={`${cardStyle} mb-[2%] sm:ml-[4%]`}>
            Exclusive Discounts and Offers
          </div>
          <div className={`${cardStyle} mt-[2%] sm:ml-[22%]`}>
            Personalized Ride Suggestions
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
