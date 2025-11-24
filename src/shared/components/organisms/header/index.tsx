"use client";

import { useState } from "react";
import ThemeSwitcher from "../../atoms/themeSwitcher";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between bg-blue-700 text-white p-4">
        <div className="flex items-center md:gap-4 gap-1">
          <h1 className="md:text-xl text-lg font-bold">Aawiz Project</h1>
        </div>

        <ThemeSwitcher />
      </header>
    </>
  );
};

export default Header;
