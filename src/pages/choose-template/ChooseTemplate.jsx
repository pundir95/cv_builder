import BuilderHeading from "../../components/common/BuilderHeading";
import AllResumeTemplate from "../../resume/AllResumeTemplate";

const ChooseTemplate = () => {
  return (
    <>
      <BuilderHeading headingValue="choose_template" />
      <div className="">
        <div className="left-side"></div>

        <div className="right-side">
          <AllResumeTemplate />
        </div>
      </div>
    </>
  );
};

export default ChooseTemplate;
