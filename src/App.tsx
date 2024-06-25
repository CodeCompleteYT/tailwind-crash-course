import { useState } from "react";
import cn from "classnames";
import Menu from "./components/Menu";

type Props = {};

const App = (props: Props) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={cn({ dark: isDark })}>
      <div className="w-screen h-screen bg-slate-50 flex flex-col items-center justify-center dark:bg-black">
        <button
          onClick={() => setIsDark((prev) => !prev)}
          className="bg-blue-500 dark:bg-blue-900 text-white p-2 rounded mb-8"
        >
          Toggle Dark Mode
        </button>
        <Menu />
      </div>
    </div>
  );
};

export default App;
