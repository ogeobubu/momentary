import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./modal.module.scss";
import picture from "../../assets/picture.jpg";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { removeId } from "../../redux/urlSlice.js";
import axios from "axios";

const Modal = ({ id, setID }) => {
  const [image, setImage] = useState({});

  const handleClick = (e) => {
    if (e.target.classList.contains("_backdrop_b8c04_1")) {
      setID(null);
    }
  };

  useEffect(() => {
    if (id) {
      const getImage = async () => {
        const response = await axios.get(`/api/images/${id}`);
        setImage(response.data.message);
      };
      getImage();
    }
  }, [id]);

  return (
    <motion.div
      className={styles.backdrop}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={image.image}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
