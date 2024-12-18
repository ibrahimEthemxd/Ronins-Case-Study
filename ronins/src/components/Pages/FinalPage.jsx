import { useState } from "react";
import JoinBtn from "../Button/JoinBtn";
import "./SamePage.css";
import "./FinalPage.css";

const FinalPage = () => {
  const [email, setEmail] = useState(""); // Email state
  const [isDisabled, setIsDisabled] = useState(true); // Buton durumu
  const [error, setError] = useState(""); // Hata mesajı için state

  // Email geçerliliğini kontrol eden regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Input değiştikçe çalışacak fonksiyon
  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail); // Email state'ini güncelle

    if (validateEmail(inputEmail)) {
      setIsDisabled(false); // Email geçerliyse buton aktif olur
      setError(""); // Hata mesajını temizle
    } else {
      setIsDisabled(true); // Email geçerli değilse butonu devre dışı bırak
      setError("Please enter a valid email address."); // Hata mesajı göster
    }
  };

  // Input'tan çıktığında email'i kontrol et
  const handleInputBlur = () => {
    if (!validateEmail(email) && email) {
      setError("Please enter a valid email address.");
    }
  };

  return (
    <div className="step-content">
      <img
        src="../../../public/UNIQUE.svg"
        alt="unique"
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
      <div className="number-input">
        <input
          type="email" // Email tipi
          placeholder="Enter an Email"
          value={email} // State ile input'u bağladık
          onChange={handleInputChange} // Değişim event'i
          onBlur={handleInputBlur} // Blur event'i
        />
        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}{" "}
        {/* Hata mesajı */}
      </div>
      <div className="buttons">
        <div className="border">
          <button
            className={`next-btn btn ${isDisabled ? "disabled" : ""}`}
            disabled={isDisabled} // Butonu kontrol ediyoruz
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
    </div>
  );
};

export default FinalPage;
