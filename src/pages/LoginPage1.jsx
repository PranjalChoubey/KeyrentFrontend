import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Variant from "../components/Property1Variant";
import Footer from "../components/Footer1";

const LoginPage1 = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/tenant-page-landlord-tab");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[1080px] overflow-hidden text-left text-base text-text1 font-head5-2-23-med">
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(121.51deg,_#e1f4f5,_#e1f4f5_47.1%,_#d6ebf0_85.04%)] w-[1920px] h-[1080px]" />
      <img
        className="absolute top-[0px] left-[620px] w-[1300px] h-[893px]"
        alt=""
      />
      <b className="absolute top-[48px] left-[216px] text-45xl tracking-[-0.5px] capitalize text-secondary text-center">
        Login
      </b>
      <div className="absolute top-[68px] left-[1361px] w-[343px] h-14">
        <Property1Variant
          startYourProject="Sign up"
          property1Variant3BackgroundColor="#1d5e6d"
          property1Variant3Position="absolute"
          property1Variant3Height="unset"
          property1Variant3Width="unset"
          property1Variant3Top="0px"
          property1Variant3Right="unset"
          property1Variant3Bottom="unset"
          property1Variant3Left="218px"
          startYourProjectColor="#fff"
        />
        <div className="absolute top-[16px] left-[0px] tracking-[0.15px]">
          Don’t have an account?
        </div>
      </div>
      <div className="absolute top-[349px] left-[216px] tracking-[0.15px] font-medium opacity-[0.5]">
        Email
      </div>
      <div className="absolute top-[450px] left-[216px] tracking-[0.15px] font-medium opacity-[0.5]">
        Password
      </div>
      <div className="absolute top-[385.3px] left-[215.3px] box-border w-[601.5px] h-[1.5px] border-t-[1.5px] border-solid border-text1" />
      <div className="absolute top-[486.3px] left-[215.3px] box-border w-[601.5px] h-[1.5px] border-t-[1.5px] border-solid border-text1" />
      <div className="absolute top-[500px] left-[680px] [text-decoration:underline] tracking-[0.15px] font-medium text-primary text-right">
        Forgot Password
      </div>
      <img
        className="absolute top-[452px] left-[776px] w-6 h-6 overflow-hidden"
        alt=""
        src="/password-eye.svg"
      />
      <Property1Variant
        startYourProject="Login"
        property1Variant3BackgroundColor="#00d095"
        property1Variant3Position="absolute"
        property1Variant3Height="unset"
        property1Variant3Width="unset"
        property1Variant3Top="591px"
        property1Variant3Right="unset"
        property1Variant3Bottom="unset"
        property1Variant3Left="216px"
        startYourProjectColor="#fff"
        onButtonContainerClick={onButtonContainerClick}
      />
      <Footer emailIcon="/emailicon@2x.png" propTop="893px" />
      <img
        className="absolute top-[922px] left-[907px] w-20 h-20 object-cover"
        alt=""
        src="/whatsapp-image-20240512-at-1004-1@2x.png"
      />
      <a
        className="absolute top-[91.39%] left-[12.92%] tracking-[0.15px] font-semibold text-aliceblue [text-decoration:none] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#fff6f6]"
        href="mailto:support@keyrent.com"
        target="_blank"
      >
        support@keyrent.com
      </a>
    </div>
  );
};

export default LoginPage1;
