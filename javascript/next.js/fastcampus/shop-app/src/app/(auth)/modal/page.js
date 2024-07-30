"use client";
import React from "react";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

const modalWrapperStyle = {
  position: "relative",
  zIndex: 1,
};

const higherIndexWrapperStyle = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "blue",
  padding: "10px",
};

const Container = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div style={modalWrapperStyle}>
        <button onClick={() => setIsModalOpen(true)}>modal open</button>
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          modal 내용
        </Modal>
      </div>
      <div style={higherIndexWrapperStyle}>Z-index 2</div>
    </div>
  );
};

export default Container;
