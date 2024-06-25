import React from "react";

type Props = {
  children: string;
  icon: any;
};

const MenuItem = ({ children, icon }: Props) => {
  return (
    <div className="flex gap-2 items-center text-xl rounded w-full px-2 py-2 hover:bg-blue-100 dark:hover:bg-blue-900">
      <div className="hidden sm:block">{icon}</div>
      {children}
    </div>
  );
};

export default MenuItem;
