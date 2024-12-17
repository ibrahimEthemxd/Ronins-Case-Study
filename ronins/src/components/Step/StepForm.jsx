import { useState } from "react";
import SamePage from "../Pages/SamePage";
import FinalPage from "../Pages/FinalPage";
import Metamask from "../../../public/metamask.svg";
import Twitter from "../../../public/twitter-x.svg";
import Telegram from "../../../public/telegram.svg";
import "./StepForm.css"

const StepForm = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const getContent = () => {
    switch (step) {
      case 1:
        return { media: "Metamask", icon: Metamask };
      case 2:
        return { media: "Twitter(X)", icon: Twitter };
      case 3:
        return { media: "Telegram", icon: Telegram };
      case 4:
        return { finalPage: true };
      default:
        return {};
    }
  };

  const { media, icon, finalPage } = getContent();

  return (
    <div className="containerr">
      <img src="../public/download.svg" alt="xd" className="striped-picture-one stripted-picture" />
      <img src="../public/download.svg" alt="xd" className="striped-picture-two stripted-picture" />
      {finalPage ? (
        <FinalPage />
      ) : (
        <SamePage
          media={media}
          icon={icon}
          onNext={handleNext}
          onBack={handleBack}
          showNext={step < 4}
          showBack={step > 1}
          step={step}
        />
      )}
    </div>
  );
};

export default StepForm;
