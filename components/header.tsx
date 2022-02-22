import React from "react";

type Props = {
  name?: string;
};

const Header = ({ name }: Props) => {
  return (
    <div>
      <h1>Thi is Header</h1>
    </div>
  );
};

export default Header;
