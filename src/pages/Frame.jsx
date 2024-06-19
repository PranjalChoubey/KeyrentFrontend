import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Frame = () => {
  const navigate = useNavigate();

  const onButtonChipsContainerClick = useCallback(() => {
    navigate("/tenant-page-rent-tab");
  }, [navigate]);

  return (
    <div className="w-[1200] relative h-[600px] text-left text-base text-secondary font-head5-2-23-med">
      <div className="absolute top-[0px] left-[0px] shadow-[0px_20px_30px_rgba(29,_94,_109,_0.2)] rounded-3xl bg-white flex flex-col items-center justify-center pt-14 px-14 pb-[60px]">
        <div className="w-[486px] relative h-[484px]">
          <div className="absolute top-[0px] left-[0px] text-7xl font-medium">
            Do you want to notify landlord?
          </div>
          <img
            className="absolute top-[7px] left-[462px] w-6 h-6 overflow-hidden"
            alt=""
            src="/menu--close.svg"
          />
          <div className="absolute top-[87px] left-[0px] w-[481px] h-[293px] text-text1">
            <div className="absolute top-[32px] left-[0px] rounded-2xl bg-background w-[481px] h-[261px]" />
            <div className="absolute top-[56px] left-[24px] tracking-[0.15px]">
              Message here...
            </div>
            <div className="absolute top-[0px] left-[0px] tracking-[0.15px] opacity-[0.5]">
              Message
            </div>
          </div>
          <div className="absolute h-[11.57%] w-[64.2%] top-[88.43%] right-[18.31%] bottom-[0%] left-[17.49%] text-center text-white">
            <div className="absolute h-full w-[50.64%] top-[0%] right-[0%] bottom-[0%] left-[49.36%] rounded-9xl bg-primary flex flex-row items-center justify-center py-4 px-14 box-border">
              <div className="relative leading-[24px] font-semibold">
                Notify
              </div>
            </div>
            <div
              className="absolute top-[0px] left-[0px] rounded-9xl flex flex-row items-center justify-center py-4 px-8 cursor-pointer text-secondary"
              onClick={onButtonChipsContainerClick}
            >
              <div className="relative leading-[24px] font-semibold">
                Cancel
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
