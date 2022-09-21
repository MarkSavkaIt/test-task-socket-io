import Socket from "components/socket";
import React from "react";

interface IProps {}

const Content: React.FC<IProps> = () => {
  return (
    <div>
      {/* <div>Content :</div> */}
      <Socket />
    </div>
  );
};

export default Content;
