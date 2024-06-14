import { Banknote, Calendar, Share2, UsersRound } from "lucide-react";

/* eslint-disable react/prop-types */
const JobCard = (props) => {
  return (
    <>
      <div className="shadow-lg p-5 rounded-md border border-gray-200 ">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center ">
            <img
              src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/646db8439348312136cf4766/logo.jpg?d=1684912626052"
              alt="company-logo"
              className="h-10 rounded-full"
            />
            <div className="">
              <p className="font-['Poppins'] text-lg font-semibold">
                {props.jobTile}
              </p>
              <p className="font-['Poppins'] text-base font-normal text-gray-400">
                {props.companyName}
              </p>
            </div>
          </div>

          <div>
            <Share2 />
          </div>
        </div>

        <div className="space-x-4 py-4">
          <span className="font-['Poppins'] bg-[#f7f8fa] px-4 py-1 rounded-md text-[#76828e]">
            {props.tags}
          </span>
          <span className="font-['Poppins'] bg-[#f7f8fa] px-4 py-1 rounded-md text-[#76828e]">
            {props.tags}
          </span>
          <span className="font-['Poppins'] bg-[#f7f8fa] px-4 py-1 rounded-md text-[#76828e]">
            {props.tags}
          </span>
          <span className="font-['Poppins'] bg-[#f7f8fa] px-4 py-1 rounded-md text-[#76828e]">
            {props.tags}
          </span>
        </div>

        <div className="grid grid-cols-3 py-2">
          <div className="border border-gray-500 border-l-0 border-y-0 flex flex-col justify-start items-start">
            <p className="flex justify-start items-center gap-1">
              <Banknote />{" "}
              <span className="font-['Poppins'] text-sm font-normal text-gray-400">
                Start Date
              </span>
            </p>
            <p>{props.startDate}</p>
          </div>

          <div className="border border-gray-500 border-l-0 border-y-0 flex flex-col justify-start items-start">
            <p className="flex justify-start items-center gap-1">
              <UsersRound />{" "}
              <span className="font-['Poppins'] text-sm font-normal text-gray-400">
                Experience
              </span>
            </p>
            <p>{props.experience}</p>
          </div>
        </div>

        <div className=" flex justify-end py-2">
          <button className="bg-[#142683] text-white py-2 px-4 rounded-md font-['Poppins']">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default JobCard;
