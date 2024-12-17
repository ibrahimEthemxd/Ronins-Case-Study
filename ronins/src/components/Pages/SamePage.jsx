import Proptypes from "prop-types";
import "./SamePage.css";
const SamePage = ({
  media,
  icon,
  onNext,
  onBack,
  showNext,
  showBack,
  step,
}) => {
  return (
    <div className="step-content">
      <div className="top">
        <img src="../../../public/logo.svg" alt="logo" />
      </div>
      <div className="middle">
        <h1 className="title">
          Who are <p>you</p>
          <span className="question">?</span>
        </h1>
        {step < 4 && (
          <p className="count">
            <span className="question">{step}</span> / 3
          </p>
        )}
        <div className="icons">
          <img src={icon} alt="icon" className="icon icon-left" />
          <img src={icon} alt="icon" className="icon-middle" />
          <img src={icon} alt="icon" className="icon icon-right" />
        </div>
        <div className="text">
          how many <span>{media}</span> accounts do you have
          <strong className="question">?</strong>
        </div>
        <div className="number-input">
          <input maxLength={5} type="number" placeholder="Enter a number" />
        </div>
      </div>
      <div className="buttons">
        {showBack && (
          <button className="back-btn" onClick={onBack}>
            Back
          </button>
        )}
        {showNext && (
          <button className="next-btn" onClick={onNext}>
            Next
          </button>
        )}
      </div>
      <div className="bottom">
        <p>6127</p>
        <p>Twitter Accounts</p>
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
