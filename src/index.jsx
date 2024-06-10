import "./index.css";
import ReactDOM from "react-dom/client";
import { v4 as uuidv4 } from "uuid";

// Tailwind
const paragraphElement = <p className="bg-green-500">Hello World</p>; // React Element

// External CSS
const heading = <h1 className="para">Heading</h1>;

// Inline CSS
const spanElement = <span style={{ color: "red" }}>Inline css</span>;

const Header = () => {
  return <p>Header Component</p>;
};

const Footer = () => {
  return <p>Footer Component</p>;
};

const Card = (props) => {
  console.log(props);

  console.log(props.jobTile);
  console.log(props.companyName);

  return (
    <>
      <div className="shadow-lg p-5 rounded-3xl">
        <img
          src="https://production-cuvette.s3.ap-south-1.amazonaws.com/company/646db8439348312136cf4766/logo.jpg?d=1684912626052"
          alt="company-logo"
          className="h-10"
        />
        <p>{props.jobTile}</p>
        <p>{props.companyName}</p>
        <p>Tags: {props.tags}</p>
        <p>Job Offer : {props.jobOffer}</p>
        <p>Start Date : {props.startDate}</p>
        <p>Experience : {props.experience}</p>
      </div>
    </>
  );
};

// How to Create A Props - jobTile={"Full Stack"}
// How to Rec A Props - (props) ==> props.jobTile , props.companyName
// How to Render a Prop Values

// List

// WARN - backend data - uniq data
// - index or - uuid

const JobData = [
  {
    id: 1,
    jobTile: "Full Stack",
    companyName: "Kuvi Networks | Bangalore, India",
    tags: "React",
    jobOffer: "14 LPA",
    startDate: "15-06-24",
    experience: "0-1 Year",
  },
  {
    id: 2,
    jobTile: "SDE 2",
    companyName: "Kuvi Networks | Bangalore, India",
    tags: "React",
    jobOffer: "10 LPA",
    startDate: "15-06-24",
    experience: "0-1 Year",
  },
  {
    id: 3,
    jobTile: "MERN STACK Developer",
    companyName: "Kuvi Networks | Bangalore, India",
    tags: "React",
    jobOffer: "12 LPA",
    startDate: "15-06-24",
    experience: "0-1 Year",
  },
];

const Body = () => {
  return (
    <>
      <p>Search Bar</p>
      <div className="2xl:container mx-auto">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {JobData.map((e) => {
            return (
              <>
                <div key={uuidv4()}>
                  <Card
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

const add = (r, b) => {
  console.log(r + b);
};

add(5, 5); // Arg 10
add(6, 5); // 11

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
