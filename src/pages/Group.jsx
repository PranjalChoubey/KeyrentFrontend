import Property1Admin from "../components/Property1Admin";

const Group = () => {
  return (
    <div className="w-full relative h-[37px]">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
        <div className="absolute h-[2.7%] w-[101.47%] top-[100%] right-[-1.47%] bottom-[-2.7%] left-[0%] box-border border-t-[1px] border-solid border-primary" />
        <Property1Admin
          admin="Property"
          property1AdminWidth="100%"
          property1AdminHeight="78.38%"
          property1AdminPosition="absolute"
          property1AdminTop="0%"
          property1AdminRight="0%"
          property1AdminBottom="21.62%"
          property1AdminLeft="0%"
          adminFontWeight="600"
          adminColor="#00d095"
        />
      </div>
    </div>
  );
};

export default Group;
