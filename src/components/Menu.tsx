import cn from "classnames";
import React, { useState } from "react";
import { LineChart, Menu as MenuIcon, Settings, User } from "lucide-react";
import MenuItem from "./MenuItem";

type Props = {};

const Menu = (props: Props) => {
  const [menuOpen, setMenuOepn] = useState(false);

  return (
    <div className="flex flex-col items-start gap-4 relative">
      <div
        onClick={() => setMenuOepn((prev) => !prev)}
        className="bg-slate-50 rounded p-2 shadow-md hover:cursor-pointer hover:shadow-lg transition-all ease-in-out duration-100 dark:bg-slate-800 dark:text-white"
      >
        <MenuIcon />
      </div>
      <div
        className={cn(
          "absolute top-14 left-0 bg-slate-50 rounded p-2 shadow-lg min-w-[200px] flex flex-col gap-1 transition-all ease-in-out duration-100 dark:bg-slate-800 dark:text-white",
          {
            "opacity-0 scale-95": !menuOpen,
            "opacity-100 scale-100": menuOpen,
          }
        )}
      >
        <MenuItem icon={<User />}>User Details</MenuItem>
        <MenuItem icon={<LineChart />}>Analytics</MenuItem>
        <MenuItem icon={<Settings />}>Settings</MenuItem>
        <button className="bg-warning text-white font-bold rounded p-2">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Menu;
