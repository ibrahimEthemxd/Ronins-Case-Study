import { useState } from "react";
import Proptypes from "prop-types";
import "./SamePage.css";
import NextBtn from "../Button/NextBtn";
import PrevBtn from "../Button/PrevBtn";
import { motion } from "framer-motion";

const SamePage = ({
  media,
  icon,
  onNext,
  onBack,
  showNext,
  showBack,
  step,
}) => {
  // Birden fazla adımın değerini tutan dizi
  const [stepValues, setStepValues] = useState(["", "", "", ""]); // Varsayılan olarak 4 adım için boş değerler

  const handleInputChange = (e) => {
    const value = e.target.value;
    const updatedValues = [...stepValues];
    updatedValues[step - 1] = value; // Şu anki adımın değerini güncelle
    setStepValues(updatedValues); // Değeri güncelle
  };

  const handleNext = () => {
    if (onNext) onNext(); // Next işlevini çağır
  };

  const handleBack = () => {
    if (onBack) onBack(); // Back işlevini çağır
  };

  const isDisabled = stepValues[step - 1] === ""; // Eğer şu anki adımda değer yoksa Next butonunu disabled yap

  return (
    <div className="step-content">
      <div className="top">
        <img src="../../../public/logo.svg" alt="logo" />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="middle"
      >
        <h1 className="title">
          Who are <p>you</p>
          <span className="question">?</span>
        </h1>
        {step < 4 && (
          <p className="count">
            <span className="question">{step}</span> / 3
          </p>
        )}
        <motion.div className="icons">
          <motion.img
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            key={step + "-left"}
            transition={{ duration: 0.4, ease: "easeOut" }}
            src={icon}
            alt="icon"
            className="icon icon-left"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            key={step}
            src={icon}
            alt="icon"
            className="icon-middle"
          />
          <motion.img
            initial={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            key={step + "-right"}
            transition={{ duration: 0.4, ease: "easeOut" }}
            src={icon}
            alt="icon"
            className="icon icon-right"
          />
        </motion.div>
        <motion.div className="text">
          how many{" "}
          <motion.span
            key={step}
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.05 }}
          >
            {media}
          </motion.span>{" "}
          accounts do you have
          <strong className="question">?</strong>
        </motion.div>
        <div className="number-input">
          <input
            type="text"
            placeholder="Enter a number"
            value={stepValues[step - 1]} // Şu anki adımın değerini göster
            onChange={handleInputChange}
          />
        </div>
      </motion.div>

      <div className="buttons">
        {showBack && (
          <button className="back-btn" onClick={handleBack}>
            <PrevBtn />
          </button>
        )}
        {showNext && (
          <div className="border">
            <button
              className={`next-btn btn ${isDisabled ? "disabled" : ""}`}
              onClick={handleNext}
              disabled={isDisabled}
            >
              <NextBtn />
            </button>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="first">
          <p className="num-count">6127</p>
          <p className="text-count">Twitter Accounts</p>
        </div>
        <div className="first">
          <p className="num-count">6127</p>
          <p className="text-count">Twitter Accounts</p>
        </div>
        <div className="first">
          <p className="num-count">6127</p>
          <p className="text-count">Twitter Accounts</p>
        </div>
        <div className="first last">
          <p className="num-count">6127</p>
          <p className="text-count">Unique Users</p>
        </div>
      </div>
    </div>
  );
};

export default SamePage;

SamePage.propTypes = {
  media: Proptypes.string.isRequired,
  icon: Proptypes.string.isRequired,
  onNext: Proptypes.func.isRequired,
  onBack: Proptypes.func.isRequired,
  showNext: Proptypes.bool.isRequired,
  showBack: Proptypes.bool.isRequired,
  step: Proptypes.number.isRequired,
};
