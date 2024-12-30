import FilterPanel from "../../components/choose-template/filterPanel/FilterPanel";
import BuilderButton from "../../components/common/atomic/BuilderButton";
import BuilderHeading from "../../components/common/BuilderHeading";
import AllResumeTemplate from "../../resume/AllResumeTemplate";

const ChooseTemplate = () => {
  return (
    <>
      <div className="choose-template">
        <BuilderHeading headingValue="choose_template" />
        <div className="d-flex">
          <div className="left-side">
            <FilterPanel />
          </div>

          <div className="right-side">
            <AllResumeTemplate />
          </div>
        </div>
        <div className="d-flex justify-content-end me-3">
          <BuilderButton
          text="Choose Later"
          />
          <BuilderButton
          text="Choose Template"
          // onClick={}
          />
        </div>
      </div>
    </>
  );
};

export default ChooseTemplate;
