import React from "react";
import Image from "next/image";

import Logo from "../../../public/logo-white.svg";

import AuthenticationForm from "@/components/roots/authentication/authentication-form";

const AuthenticationPage = () => {
  return (
    <main className="h-screen w-screen bg-black md:py-12 py-8 flex flex-col items-center md:gap-16 gap-12 overflow-hidden">
      <Image
        src={Logo}
        alt="MessageMoment"
        className="sm:w-[297px] w-[247px] h-fit"
        priority
      />

      <AuthenticationForm />
    </main>
  );
};

export default AuthenticationPage;
