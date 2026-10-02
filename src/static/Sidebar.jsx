import { NavLink } from "react-router-dom";

const Sidebar = ({ toggle }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
      className=" h-screen w-full fixed"
    >
      <section className=" bg-white w-80 h-screen flex flex-col gap-2 font-medium ">
        <NavLink onClick={toggle} to="/">
          <nav className=" py-4 pl-5 hover:bg-gray-100">Home</nav>
        </NavLink>
        <NavLink onClick={toggle} to="/about">
          <nav className=" py-4 pl-5 hover:bg-gray-100">About</nav>
        </NavLink>
        <nav className=" py-4 pl-5 hover:bg-gray-100">Contact</nav>
        <nav className=" py-4 pl-5 hover:bg-gray-100">Buy</nav>
      </section>
    </div>
  );
};

export default Sidebar;
