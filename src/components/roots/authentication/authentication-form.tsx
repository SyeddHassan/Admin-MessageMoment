"use client";

// Later on shadcn form with zod validator will integrate here

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Eye, EyeOff, Loader2 } from "lucide-react";

const AuthenticationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // PASSWORD VISIBLITY HANDLER FUNCTION
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // LOGIN HANDLER FUNCTION
  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push("/admin-welcome");
    }, 1500);
  };

  return (
    <div className="flex-1 w-full flex-center">
      <Card className="bg-white sm:w-[400px] w-[90%]">
        <CardHeader>
          <CardTitle className="md:text-4xl text-3xl font-inter text-heading-color">
            Login
          </CardTitle>
          <CardDescription className="md:text-[13px] text-[12px] text-paragraph-color">
            Please enter your credentials to access the admin dashboard and
            manage the system.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col md:gap-6 gap-4 md:mt-2 md:mb-4 mb-2">
          <div className="flex flex-col gap-3">
            <Label htmlFor="email" className="text-heading-color font-inter">
              Username or Email Address
            </Label>
            <Input
              type="email"
              className="h-[55px] w-full rounded-[5px] bg-transparent focus-visible:ring-secondary-theme text-heading-color border border-border focus-visible:border-none transition-all ease-in-out duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-3 relative group">
            <Label htmlFor="password" className="text-heading-color font-inter">
              Password
            </Label>
            <Input
              type={showPassword ? "text" : "password"}
              className="h-[55px] w-full rounded-[5px] bg-transparent focus-visible:ring-secondary-theme text-heading-color border border-border focus-visible:border-none transition-all ease-in-out duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute right-4 top-[42px] cursor-pointer text-heading-color"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            className="w-full !h-[50px] text-theme-heading-color font-inter bg-primary-theme hover:bg-primary-theme-hover border-none text-[16px] font-semibold shadow-button-shadow"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin" />
                <p className="text-[16px]">Please wait</p>
              </span>
            ) : (
              "Login"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthenticationForm;
