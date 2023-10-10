import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user);
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-between py-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-green-600 text-md sm:text-3xl md:text-4xl font-semi cursor-pointer ml-3 outline">
          WATCHNOW
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-gray-300 pr-4">Account</button>
          </Link>
          <button onClick={handleLogout} className="text-gray-300 bg-green-600 px-6 py-2 rounded cursor-pointer">
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-gray-300 pr-4">Log In</button>
          </Link>
          <Link to="/signup">
            <button className="text-gray-300 bg-green-600 px-6 py-2 rounded cursor-pointer mr-2">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
