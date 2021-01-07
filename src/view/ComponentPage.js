import React from "react";

function ComponentPage(props) {
  const { name } = props.location.state;
  console.log(name);
  return <div>sss</div>;
}

export default ComponentPage;
