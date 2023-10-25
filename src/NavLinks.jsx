import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import tabs from "./tabs.json";

const CustomNavLinks = () => {

    tabs.sort((a,b)=>a.order - b.order);

  return (
    <ul className="flex h-20 px-10 items-center justify-evenly text-xl">
      {tabs.map((tab) => (
        <li key={tab.id} className="text-blue-700 font-medium hover:scale-110">
          <NavLink to={tab.id} activeClassName="underline">
            {tab.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default CustomNavLinks;
