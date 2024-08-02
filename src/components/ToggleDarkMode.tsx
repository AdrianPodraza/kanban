import React, { forwardRef } from "react";
import iconDark from "../assets/icon-dark-theme.svg";
import iconLight from "../assets/icon-light-theme.svg";

interface PropsToggleDarkMode {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleDarkMode = forwardRef<HTMLInputElement, PropsToggleDarkMode>(
  ({ checked, onChange }, ref) => {
    return (
      <div className="pl-4">
        <div className=" flex  w-full items-center justify-center gap-2 rounded-lg bg-grey-light  py-3">
          <img src={iconDark} alt="icon-dark" />
          <label className="cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              ref={ref}
              onChange={onChange}
              checked={checked}
            />
            <div className={`h-5 w-14 rounded-full bg-violet-dark p-1 `}>
              <div
                className={`aspect-square h-full rounded-full bg-white p-0.5 shadow-sm transition-all duration-300 ${checked ? "translate-x-9 " : ""}`}
              ></div>
            </div>
          </label>
          <img src={iconLight} alt="icon-light" />
        </div>
      </div>
    );
  },
);

// Dodaj nazwę wyświetlaną
ToggleDarkMode.displayName = "ToggleDarkMode";

export default ToggleDarkMode;
