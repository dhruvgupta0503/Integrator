import Img1 from "../assets/download/appstore.svg";
import Img2 from "../assets/download/googleapp.svg";

function Download() {
  return (
    <>
      <h2 className="text-white text-2xl md:text-3xl font-serif mb-4 text-center px-2 md:px-0">
        Download our app to get the most out of it
      </h2>
      <section className="download-section flex flex-col md:flex-row items-center bg-[#6D7179] bg-opacity-50 mx-4 p-4 md:mx-[3.5%] md:p-6 rounded-lg">
        <div className="download-container text-center md:text-left w-full md:w-1/2 mb-4 md:mb-0">
          <p className="text-white font-serif mb-6 leading-relaxed">
            Unlock the freedom of the open road with ease. Download our app now
            and embark on your next adventure hassle-free. Experience seamless
            car rides at your fingertips, offering convenience, reliability,
            and unparalleled service.
          </p>
        </div>

        <div className="download-text__btns flex flex-row gap-4 justify-center w-full md:w-1/2">
          <img alt="google_play" src={Img2} className="w-32 md:w-48" />
          <img alt="apple_app" src={Img1} className="w-32 md:w-48" />
        </div>
      </section>
    </>
  );
}

export default Download;
