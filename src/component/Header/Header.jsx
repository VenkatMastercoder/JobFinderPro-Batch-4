const Header = () => {
  return <p>Header Component</p>;
};

// Default 
export default Header

/**
 * Import & Export
 * - Default [ only one function can be export ]
 *   - export default Header
 *     import Header from "./component/Header/Header"
 * 
 * - Named [ when you what to more then one ]
 *   - export const JobData2 = []
 *     import { JobData2 }  from "../../api/DummyData"
 *  */ 