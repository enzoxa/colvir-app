import React, { useState } from "react";
import styles from './styles.module.css';

import ico_folder from './assets/ico_folder.svg';
import ico_folder_open from './assets/ico_folder_open.svg';
import ico_program from './assets/ico_program.svg';
import ico_bookmark from "./assets/ico_bookmark.svg";

function TreeNode({ node }) {
  const { children, label, bookmark, href } = node;

  const [showChildren, setShowChildren] = useState(false);

  const handleClick = (e) => {
    console.log(e);
    if (children) {
      setShowChildren(!showChildren);
    }
  };

  return (
    <>
      <div className={styles.TreeLabel} onClick={handleClick}>
        <div className={styles.TreeLabelContainer}>
          {showChildren ? <img src={ico_folder_open} alt="folder_open" /> : !children ? <img  src={ico_program} alt="program" /> : <img src={ico_folder} alt="folder" />}
          {/* {fHref(href,label)} */}
          <a href={href}>{label}</a>
        </div>
        {!bookmark ? null : <img src={ico_bookmark} alt="bookmark" />}
      </div>
      <ul style={{ paddingLeft: "14px" }}>
        {showChildren &&
          <div>
            <TreeList treeData={children} />
          </div>
        }
      </ul>
    </>
  );
}

export function TreeList({ treeData }) {
  return (
    <ul>
      {!treeData ? null : treeData.map((node) => (
        <TreeNode node={node} key={node.key} />
      ))}
    </ul>
  );
}

