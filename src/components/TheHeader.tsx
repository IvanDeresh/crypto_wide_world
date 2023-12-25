"use client";
import React, { useState } from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@/components/Button";
const TheHeader = () => {
  const [isActive, setIsactive] = useState(false);
  return (
    <div className="font-montserrat max-container">
      <div className="flex justify-around items-center mt-[40px]">
        <div className="text-[30px] font-montserrat">WideWorld</div>
        <ul className="flex max-xl:hidden justify-around w-[50%] font-montserrat text-[20px]">
          <Link href="/">Some</Link>
          <Link href="/">Some</Link>
          <Link href="/">Some</Link>
          <Link href="/">Some</Link>
          <Link href="/">Some</Link>
        </ul>
        <div className="flex max-xl:hidden">
          <Button lebel="Sign in" />
        </div>
        <div
          className="hidden max-xl:flex"
          onClick={() => setIsactive(!isActive)}
        >
          {isActive ? (
            <CloseIcon className="text-[40px]" />
          ) : (
            <MenuIcon className="text-[40px]" />
          )}
        </div>
        {isActive && (
          <nav className="hidden border-2 w-[250px] h-[350px] rounded-2xl bg-[#abbbd6] justify-around items-center absolute max-xl:flex max-xl:flex-col top-[100px] right-[250px] font-montserrat text-[20px]">
            <ul className="justify-around items-center max-xl:flex h-[60%] max-xl:flex-col">
              <Link href="/">Some</Link>
              <Link href="/">Some</Link>
              <Link href="/">Some</Link>
              <Link href="/">Some</Link>
              <Link href="/">Some</Link>
            </ul>
            <div className="hidden max-xl:flex">
              <Button lebel="Sign in" />
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default TheHeader;
