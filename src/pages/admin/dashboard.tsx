import Dropdown from "../../components/Dropdown";
import Navbar from "../../components/Navbar";
import Searchbar from "../../components/Searchbar";
import Table from "../../components/Table";
import logo from "../../assets/icons/logo.svg";
import Filter from "../../components/Filter";

const adminDashboard = () => {
  return (
    <div className="bg-[#FCFFFF] h-screen">
      <div className="hidden md:flex flex-col px-5 space-y-8">
        <nav>
          <Navbar />
        </nav>
        <div className="flex space-x-6">
          <div className="flex flex-col bg-white rounded-xl shadow-card-shadow w-[230px] space-y-4 p-5 pb-6 items-center h-full">
            <span className="font-lexend font-bold text-h24">Filters</span>
            <Dropdown title="Hostel" isHeading={false} />
            <Dropdown title="Deadline" isHeading={false} />
          </div>

          <div className="overflow-auto mb-5 flex flex-col bg-white rounded-xl shadow-card-shadow w-full space-y-4 p-5">
            <span className="flex items-center justify-between">
              <h1 className="font-lexend font-bold text-h24">Overview</h1>
              <Dropdown title="Today" isHeading={false} />
            </span>
            <Table />
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col space-y-4 px-4 pb-3">
        <nav className="flex flex-row pt-4 items-center justify-between ">
          <Searchbar isMobile={true} />
          <Dropdown title="admin" isHeading={true} />
        </nav>

        <hr />

        <div className="flex flex-row justify-between items-center">
          <h1 className="font-lexend text-p18 font-bold">Overview</h1>
          <span className="flex space-x-4 items-center">
            <Filter />
            <Dropdown title="Today" isHeading={false} />
          </span>
        </div>

        <div className="shadow-lg bg-white border border-slate-200 px-4 py-2 rounded-lg">
          <Table />
        </div>

        <hr />

        <img src={logo} className="w-[32px] self-center" />
      </div>
    </div>
  );
};

export default adminDashboard;