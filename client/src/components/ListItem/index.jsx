import React, { useState } from "react";
import styles from "./listItem.module.scss";
import svg from "../../assets/jpg-svgrepo-com.svg";
import { Delete } from "@mui/icons-material";
import Modal from "../Modal/Modal";

const ListItem = ({ image, handleDelete }) => {
  const [id, setID] = useState(null);
  return (
    <>
      <div className={styles.listItem}>
        <div className={styles.left}>
          <img src={svg} alt="svg" />
        </div>
        <div className={styles.middle}>
          <h3 className={styles.title}>{image?.title}</h3>
          {/*<div className={styles.progress}>
          <div className={styles.progressInner}></div>
  </div>*/}
          <span onClick={() => setID(image?._id)} className={styles.small}>
            View Thumbnail
          </span>
        </div>
        <div onClick={() => handleDelete(image?._id)} className={styles.right}>
          <Delete style={{ color: "white" }} />
        </div>
      </div>
      {id && <Modal id={id} setID={setID} />}
    </>
  );
};

export default ListItem;
