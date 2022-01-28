import React from "react";
import styles from "./list.module.scss";
import ListItem from "../ListItem";

const List = ({ images, handleDelete }) => {
  return (
    <section className={styles.listSection}>
      <h3 className={styles.title}>Uploaded Files</h3>
      <div className={styles.list}>
        {images?.map((image) => (
          <ListItem image={image} handleDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
};

export default List;
