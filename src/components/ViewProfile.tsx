// import update from "../../assets/illustrations/updateInfo.svg";
// import AuthUI from "./AuthUI";
// // import InputField from "./InputField";
// // import InputImage from "../../components/InputImage";
// import { FormProvider, useForm } from "react-hook-form";
// import { useFormStore, useUserStore } from "../store/store";
// import { toast } from "react-hot-toast";
// import { ToTitleCase } from "../helpers/helpers";
// import axios from "axios";
// import { useState } from "react";
// import useFetchProfile from "../helpers/fetchUserHook";
// import logo from "../../assets/icons/logo.svg";
import skygradient from "../assets/icons/sky-gradient.png";
// import lightbulb from "../../assets/icons/lightbulb.svg";
import { BsFillTelephoneFill } from "react-icons/bs";
// import { FiEdit } from "react-icons/fi";
import { BsFillHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/store";
// import useFetchOutings from "../../helpers/fetchOutingHook";
import AvatarModal from "./AvatarModal";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { boysAvatars, girlsAvatars } from "../helpers/constants";
// import DateRange from "../../components/DateRange";
// import Dropdown from "./Dropdown";
import useFetchProfile from "../helpers/fetchUserHook";
const ViewProfile = () => {
  useFetchProfile("/profile");
  const { user } = useUserStore();
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAvatarSubmit = async (avatar: Avatar) => {
    try {
      await toast.promise(
        axios.patch("/update-profile", {
          profilePic: avatar.url,
        }),
        {
          loading: "Updating...",
          success: "Successful",
          error: (error) => error.response?.data || "Server Error",
        }
      );

      setTimeout(() => {
        window.location.reload();
      }, 10);
    } catch (error) {
      console.log(error);
    }
  };
//   const { user } = useUserStore();

  return (
    <div className="h-screen">
      <AvatarModal
        isOpen={isModalOpen}
        onClose={closeModal}
        avatars={user?.hostel === "GH" ? girlsAvatars : boysAvatars}
        onSubmit={handleAvatarSubmit}
      />
      {/* Desktop */}
      <div className="hidden md:flex flex-col px-5 space-y-8 bg-[#FCFFFF]">
        {/* <nav>
          <Navbar role="student" />
        </nav> */}

        <div className="flex space-x-6">
          <div className="flex flex-col relative lg:w-[500px]">
            <img src={skygradient} />

            <div className=" rounded-full absolute self-center top-[7%] lg:top-[9%] w-[50%]">
              <img
                title="Change avatar"
                onClick={openModal}
                src={user?.profilePic}
                className="border-[0.5rem] border-slate-100 rounded-full transition w-[100%] cursor-pointer hover:brightness-90"
              />
            </div>

            <div className="flex flex-col bg-white rounded-b-xl shadow-card-shadow space-y-4 pt-[25%] px-5 pb-4 items-center">
              <div className="flex flex-col items-center mt-2 xl:mt-0">
                <h2 className="text-h24 font-lexend font-bold">
                  {user?.name || user?.username}
                </h2>
                <h3 className="text-p14 font-medium text-slate-400">
                  {user?.name ? user?.username : user?.email}
                </h3>
              </div>
              <div className="flex w-[95%] justify-between py-1">
                <span className="flex items-center space-x-2">
                  <BsFillTelephoneFill style={{ fontSize: "18px" }} />
                  <p>{user?.mobile || "NA"}</p>
                </span>
                <span className="flex items-center space-x-2">
                  <BsFillHouseFill style={{ fontSize: "18px" }} />
                  <p>{user?.room ? `${user?.hostel} / ${user?.room}` : "NA"}</p>
                </span>
              </div>

              <hr className="h-px w-full bg-gray-200 border-0" />
              {/* {user?.isOutside ? (
                <Link
                  to="/student/success"
                  className="text-white text-p16 py-3 px-10 rounded-full transition-all font-semibold shadow-lg bg-amber-500 hover:bg-amber-400 lg:block shadow-gray-200"
                >
                  Outing Details
                </Link>
              ) : (
                <Link
                  to="/student/reason"
                  className="text-white text-p16 py-3 px-10 rounded-full  transition-all font-semibold shadow-lg lg:hidden bg-[#0EA5E9] hover:bg-sky-400 shadow-sky-200"
                >
                  Request Exit
                </Link>
              )} */}
              {/* </Link> */}
              <Link
                to={"/student/update"}
                className={`text-white text-p16 bg-[#0EA5E9]  py-3 px-10 rounded-full hover:bg-sky-400 transition-all font-semibold shadow-lg shadow-sky-200 hidden lg:block ${
                  user?.isOutside ? "lg:hidden" : ""
                }`}
              >
                Update Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
