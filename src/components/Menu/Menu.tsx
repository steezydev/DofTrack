//Icons
import { AiFillHome } from "react-icons/ai";
import { FaTrophy, FaMedal, FaUserAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

//Router
import { Link, useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <div className="absolute left-2 top-2">
      <div className="flex flex-col gap-2 text-2xl text-grey-darker">
        <IconContext.Provider value={{ color: "#6B6B6B" }}>
          <Link
            to="/"
            className="menuItem p-2 cursor-pointer rounded-full hover:bg-[#cccccc]"
          >
            <AiFillHome />
          </Link>
          <Link
            to="/dreams"
            className="menuItem p-2 cursor-pointer rounded-full hover:bg-[#cccccc]"
          >
            <FaTrophy />
          </Link>
          <Link
            to="/goals"
            className="menuItem p-2 cursor-pointer rounded-full hover:bg-[#cccccc]"
          >
            <FaMedal />
          </Link>
          <Link
            to="/profile"
            className="menuItem p-2 cursor-pointer rounded-full hover:bg-[#cccccc]"
          >
            <FaUserAlt />
          </Link>
        </IconContext.Provider>
      </div>
    </div>
  );
}
