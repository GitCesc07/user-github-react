import { useEffect } from "react";
import { useState } from "react";

function Header() {
  const [theme, setTheme] = useState(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "dark";

      return "dark";
    }

    localStorage.theme = "light";

    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      localStorage.removeItem("light");

      document.querySelector("html").classList.add("dark");
      document.getElementById("icon-1").classList.add("hidden");
      document.getElementById("icon-2").classList.remove("hidden");
    } else {
      localStorage.removeItem("dark");
      localStorage.setItem("theme", "light");

      document.querySelector("html").classList.remove("dark");
      document.getElementById("icon-1").classList.remove("hidden");
      document.getElementById("icon-2").classList.add("hidden");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="font-bold lg:text-3xl text-xl dark:text-white">
          CescDev
        </h2>
      </div>
      <div>
        <button
          id="icon-1"
          className="flex items-center gap-4 lg:text-xl text-base dark:text-white"
          onClick={handleChangeTheme}
        >
          LIGHT
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            className="dark:fill-white fill-black"
          >
            <path d="M12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z" />
          </svg>
        </button>

        <button
          id="icon-2"
          className="flex items-center gap-4 lg:text-xl text-base dark:text-white"
          onClick={handleChangeTheme}
        >
          DARK
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            className="dark:fill-white fill-black"
          >
            <path d="M14 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T4 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T14 2q.875 0 1.75.175t1.675.525q.3.125.45.387t.15.538q0 .225-.088.425t-.287.35q-1.75 1.375-2.7 3.375T14 12q0 2.25.925 4.25t2.7 3.35q.2.15.288.363T18 20.4q0 .275-.15.538t-.45.387q-.8.35-1.662.513T14 22" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
