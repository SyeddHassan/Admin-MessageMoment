import React from "react";

import { LoadingProps } from "@/interfaces/partials-components-interfaces";

const Loading = ({ containerClassName, Icon, iconClassName }: LoadingProps) => {
  return (
    <div className={`flex-center ${containerClassName}`}>
      {<Icon className={`${iconClassName}`} />}
    </div>
  );
};

export default Loading;
