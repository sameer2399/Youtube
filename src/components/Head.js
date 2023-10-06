import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="md:grid md:grid-flow-col md:p-5 md:m-2 md:shadow-lg py-4 md:w-[100%] w-[370px]">
      <div className="flex md:col-span-1 md:shadow-none">
        <img
          onClick={toggleMenuHandler}
          className="h-10 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
        />
        <a href="/">
        <img
          className="h-10 md:mx-2 mx-[35%]"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          alt="youtube logo"
        /></a>
      </div>
      <div className="md:col-span-10 md:px-10 ml-[15vw] md:mx-0 mt-[5%] md:mt-0">
        <input
          type="text"
          className="md:w-1/2 border border-gray-400 p-2 rounded-l-full"
        />
        <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div className="md:col-span-1">
        <img
          className="h-10 md:mt-0 -mt-[26%] md:ml-0 ml-[93%]"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
