import React from "react";

const Links = ({ route }) => {
  const { name, path } = route;
  return (
    <li className="mb-5 lg:mb-0 ms-5">
      <a className="hover:text-white" href={path}>
        {name}
      </a>
    </li>
  );
};

export default Links;
