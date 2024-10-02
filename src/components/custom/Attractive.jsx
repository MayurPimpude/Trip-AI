import { BsHexagonFill } from "react-icons/bs";

function Attractive() {
  return (
    <section className="relative pt-[120px] pb-[250px] w-full overflow-hidden" id="most">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/b2.jpg')] bg-cover bg-center"></div>
      
      {/* Black overlay with opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content with a relative z-index to appear above the overlay */}
      <div className="relative z-10 text-center">
        <h2 className="text-[#42a8bb] text-[76px] font-DancingScript">Why you visit?</h2>
        <h2 className="text-white font-Montserrat font-[500] text-[54px] leading-[50px]">
          Most Attractive Place <br />
        </h2>
      </div>

      <section className="relative z-10 flex justify-center mt-10">
        <div className="bg-white w-[1px] h-[750px] flex flex-col justify-around items-center">
          <div className="relative flex items-center">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#2FA8B9]" />
            <p className="absolute w-[400px] left-[70px] text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sunt quo aliquid iste, quidem animi a ipsum
              dignissimos minima corrupti! Cupiditate modi eos aspernatur dolor fugiat nobis sit porro ipsa.
            </p>
          </div>

          <div className="relative flex items-center">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#2FA8B9]" />
            <p className="absolute w-[400px] left-[70px] text-white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sunt quo aliquid iste, quidem animi a ipsum
              dignissimos minima corrupti! Cupiditate modi eos aspernatur dolor fugiat nobis sit porro ipsa.
            </p>
          </div>

          <img src='/1.png' alt="2"
            className="absolute top-[8%] left-[-100px] w-[400px] h-[350px] transition duration-[2000ms] ease-in-out"
            />

          <div className="relative flex items-center">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#2FA8B9]" />
            <p className="absolute w-[400px] right-[70px] text-white text-right">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sunt quo aliquid iste, quidem animi a ipsum
              dignissimos minima corrupti! Cupiditate modi eos aspernatur dolor fugiat nobis sit porro ipsa.
            </p>
          </div>

          <div className="relative flex items-center">
            <BsHexagonFill className="text-[30px] rotate-[90deg] text-[#2FA8B9]" />
            <p className="absolute w-[400px] right-[70px] text-white text-right">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis sunt quo aliquid iste, quidem animi a ipsum
              dignissimos minima corrupti! Cupiditate modi eos aspernatur dolor fugiat nobis sit porro ipsa.
            </p>
          </div>

          <img src='/3.png' alt="2"
            className="absolute top-[50%] right-[-5%] w-[30%] h-[38%]"
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="1000" />

        </div>
      </section>
    </section>
  );
}

export default Attractive;
