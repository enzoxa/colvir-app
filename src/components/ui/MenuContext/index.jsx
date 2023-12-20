import React, { useState, useEffect } from "react";


const Menu = ({ title, key }) => {
  return (
    <>
      <div key={key}>{title}</div>
    </>
  );
};


const MenuContext = ({ data }) => {
   return (
    <div>
      {data.map((item, idx) => (
        <div
        key={idx}
          onContextMenu={(e) => {
            e.preventDefault();
            console.log("Right Click", e.pageX, e.pageY);
          }}
        >
          <Menu key={item.id} title={item.title} />
        </div>
      ))}
    </div>
  );
};
export default MenuContext;