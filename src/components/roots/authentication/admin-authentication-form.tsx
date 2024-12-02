"use client";

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

const AdminAuthenticationForm = () => {
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
          <CardTitle className="text-4xl font-inter text-[#000000]">
            Login
          </CardTitle>
          <CardDescription className="text-[13px] text-[#6b7483]">
            Please enter your credentials to access the admin dashboard and
            manage the system.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-8 mt-3 mb-6">
          <div className="flex flex-col gap-3">
            <Label htmlFor="email" className="text-[#363c4f] font-inter">
              Username or Email Address
            </Label>
            <Input
              type="email"
              className="h-[55px] w-full rounded-[5px] bg-transparent focus-visible:ring-primary-theme text-[#000000]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-3 relative">
            <Label htmlFor="password" className="text-[#363c4f] font-inter">
              Password
            </Label>
            <Input
              type={showPassword ? "text" : "password"}
              className="h-[55px] w-full rounded-[5px] bg-transparent focus-visible:ring-primary-theme text-[#000000]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              className="absolute right-4 top-[42px] cursor-pointer text-[#363c4f]"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            className="w-full !h-[50px] text-theme-heading-color font-inter bg-primary-theme hover:bg-primary-theme-hover border text-[16px] font-semibold"
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

export default AdminAuthenticationForm;
