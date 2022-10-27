import React from "react";
import "./dashboard.css";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import images from "./images";

export default function Dashboard() {
  console.log(images);
  return (
    <div>
      <motion.div className="carousel">
        <motion.div className="inner-carousel">
          {images.map((image) => {
            return (
              <motion.div className="item">
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
