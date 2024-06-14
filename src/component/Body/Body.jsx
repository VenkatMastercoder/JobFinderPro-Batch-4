import { v4 as uuidv4 } from "uuid";
import JobData from "../../api/DummyData";
import JobCard from "../JobCard/JobCard";
const Body = () => {
  return (
    <>
      <p>Search Bar</p>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {JobData.map((e) => {
            return (
              <>
                <div key={uuidv4()}>
                  <JobCard
                    jobTile={e.jobTile}
                    companyName={e.companyName}
                    tags={e.tags}
                    jobOffer={e.jobOffer}
                    startDate={e.startDate}
                    experience={e.experience}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
