import { useState } from "react";
import JoinBtn from "../Button/JoinBtn";
import "./SamePage.css";
import "./FinalPage.css";
import "../Button/Button.css";
import { motion } from "framer-motion";
import Proptypes from "prop-types";

const FinalPage = ({ onNext }) => {
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    if (validateEmail(inputEmail)) {
      setIsDisabled(false);
      setError("");
    } else {
      setIsDisabled(true);
      setError("Lütfen geçerli email adresi girin!");
    }
  };

  const handleInputBlur = () => {
    if (!validateEmail(email) && email) {
      setError("Lütfen geçerli email adresi girin!");
    }
  };

  const handleNext = () => {
    console.log("selam");
    if (onNext) onNext();
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="step-content"
    >
      <img
        src="../../../public/UNIQUE.svg"
        alt="unique"
        className="unique-background"
        width={"1540px"}
        style={{ marginTop: "120px", position: "absolute" }}
      />
      <div className="top">
        <img src="../../../public/logo.svg" alt="logo" />
      </div>
      <div className="value-counts">
        <div className="counts">
          <p className="second-number">7</p>
          <p className="second-text">Metamask Accounts</p>
        </div>
        <div className="counts">
          <p className="second-number">7</p>
          <p className="second-text">Twitter Accounts</p>
        </div>
        <div className="counts">
          <p className="second-number">7</p>
          <p className="second-text">Telegram Accounts</p>
        </div>
      </div>
      <div className="text-content">
        <h2>
          BUT STILL <br />
          <span>UNIQUE</span>
        </h2>
        <p>Join the Waitlist. Earn points for Airdrop.</p>
      </div>
      <div className="email">
        <input
          type="email"
          placeholder="Enter an Email"
          value={email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}{" "}
      </div>
      <div className="buttons">
        <div className="border">
          <button
            style={{ zIndex: 15000, position: "relative" }}
            className={`next-btn btn ${isDisabled ? "disabled" : ""}`}
            disabled={isDisabled}
            onClick={handleNext}
          >
            <JoinBtn />
          </button>
        </div>
      </div>
      <div className="bottom">
        <div className="first">
          <p className="num-count">526131528</p>
          <p className="text-count">Twitter Accounts</p>
        </div>
        <div className="first">
          <p className="num-count">503161317</p>
          <p className="text-count">Twitter Accounts</p>
        </div>
        <div className="first">
          <p className="num-count">503140064</p>
          <p className="text-count">Twitter Accounts</p>
        </div>
        <div className="first last">
          <p className="num-count">17</p>
          <p className="text-count">Unique Users</p>
        </div>
      </div>
    </motion.div>
  );
};
export default FinalPage;

FinalPage.propTypes = {
  onNext: Proptypes.func.isRequired,
};
