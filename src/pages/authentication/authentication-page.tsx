import React from "react";
import Image from "next/image";

import AdminAuthenticationForm from "@/components/roots/authentication/admin-authentication-form";

import Logo from "../../../public/logo-white.svg";

const AuthenticationPage = () => {
  return (
    <main className="h-screen w-screen bg-black md:py-12 py-8 flex flex-col items-center md:gap-16 gap-12 overflow-hidden">
      <Image
        src={Logo}
        alt="MessageMoment"
        className="lg:w-[500px] md:w-[450px] sm:w-[400px] w-[300px] h-fit"
        priority
      />

      <AdminAuthenticationForm />
    </main>
  );
};

export default AuthenticationPage;
