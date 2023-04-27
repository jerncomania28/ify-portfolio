import { useEffect } from "react";

const Coverly = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full relative ">
      <div className="w-full relative bg-white">
        <div className="w-[90%] mx-auto flex justify-center items-center py-[70px] max-w-[1500px]">
          <h1 className="font-figtree text-[50px] md:text-[70px]">
            Coming Soon...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Coverly;
