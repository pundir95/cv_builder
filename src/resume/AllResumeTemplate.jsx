import CareerCatalyst from "./careerCatalyst/CareerCatalyst";
import ProfessionalPathway from "./professionalPathway/ProfessionalPathway";

const AllResumeTemplate = () => {
  return (
    <div className="d-flex">
      <div>
        <CareerCatalyst />
      </div>
      <div>
        <ProfessionalPathway />
      </div>
    </div>
  );
};

export default AllResumeTemplate;
