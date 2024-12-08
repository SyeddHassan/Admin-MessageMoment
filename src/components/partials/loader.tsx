import React from "react";

import { LoadingProps } from "@/interfaces/partial-components-interface";

const Loading = ({ containerClassName, Icon, iconClassName }: LoadingProps) => {
  return (
    <div className={`flex-center ${containerClassName}`}>
      {<Icon className={`${iconClassName}`} />}
    </div>
  );
};

export default Loading;
