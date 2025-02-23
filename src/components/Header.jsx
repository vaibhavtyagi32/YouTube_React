import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
const Header = () => {
    const dispatch=useDispatch();
    const handleMenu=()=>{
        dispatch(toggleMenu());
    }
    return (
      <div className="h-20 flex items-center shadow-lg px-6 bg-white justify-between">

        <div className="flex items-center gap-3">
          <a href="/">
          <img
          onClick={()=>handleMenu()}
            className="h-9 cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"
            alt="menu"
          />
          </a>
          <a href="/">
          <img
            className="h-8 cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9hZYWwcSGZOnxtzxUQ32JYnh5eu5bPR8dA&s"
            alt="logo"
          />
          </a>
        </div>

        <div className="flex items-center w-[500px] border rounded-full overflow-hidden shadow-sm">
          <input
            type="text"
            className="w-full p-2 px-4 outline-none"
            placeholder="Search"
          />
          <button className="bg-gray-200 p-2 px-4 hover:bg-gray-300">🔍</button>
        </div>

        <div className="flex items-center">
          <img
            src="https://i.pinimg.com/564x/3f/9f/5b/3f9f5b8c9f31ce16c79d48b9eeda4de0.jpg"
            alt="profile"
            className="h-10 w-10 rounded-full cursor-pointer border border-gray-300 shadow-sm"
          />
        </div>
      </div>
    );
  };
  
  export default Header;
  