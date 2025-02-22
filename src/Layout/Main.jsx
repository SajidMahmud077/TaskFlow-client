import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className='bg-gradient-to-r from-black via-gray-900 to-gray-800 min-h-screen w-full '>
        <Outlet />
    </div>
  );
};

export default Main;
