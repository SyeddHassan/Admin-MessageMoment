import withTM from "next-transpile-modules";
import type { NextConfig } from "next";

const withTranspileModules = withTM(["@amcharts/amcharts5"]);

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withTranspileModules(nextConfig);
