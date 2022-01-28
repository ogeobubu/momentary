import React from "react";
import styles from "./loading.module.scss";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <section className={styles.loading}>
      <CircularProgress styles={{ fontSize: "5rem" }} />
      <p className={styles.para}>Uploading...</p>
    </section>
  );
};

export default Loading;
