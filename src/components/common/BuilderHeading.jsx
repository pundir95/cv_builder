import { BUILDER_HEADING } from "../../builderConstant/constant";

const BuilderHeading = ({ headingValue }) => {
    let headingItem = BUILDER_HEADING[headingValue];
  return (
    <>
    <div className="container m-auto">
    <div>{headingItem?.main}</div>
    <div>{headingItem?.para}</div>
    </div>
    </>
  );
};

export default BuilderHeading;
