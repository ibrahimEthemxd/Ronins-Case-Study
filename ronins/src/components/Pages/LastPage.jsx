import "./LastPage.css";
const LastPage = () => {
  return (
    <div className="step-content">
      <img
        src="../../../public/Group 1.svg"
        className="last-img"
        alt="blabla"
      />
      <div className="left-side">
        <div className="value-counts">
          <div className="counts">
            <p className="second-number">100328</p>
            <p className="second-text">Metamask Accounts</p>
          </div>
          <div className="counts">
            <p className="second-number">161317</p>
            <p className="second-text">Twitter Accounts</p>
          </div>
          <div className="counts">
            <p className="second-number">140064</p>
            <p className="second-text">Telegram Accounts</p>
          </div>
        </div>
        <div className="title-61">
          <h3>
            BUT STILL 61 <br /> <span>UNIQUE USERS</span>
          </h3>
        </div>
      </div>
      <div className="bottom taban">
        <div className="first">
          <p className="num-count">100328</p>
          <p className="text-count">Metamask Accounts</p>
        </div>
        <div className="first">
          <p className="num-count">161317</p>
          <p className="text-count">Twitter Accounts</p>
        </div>
        <div className="first">
          <p className="num-count">140064</p>
          <p className="text-count">Telegram Accounts</p>
        </div>
        <div className="first last">
          <p className="num-count">61</p>
          <p className="text-count">Unique Users</p>
        </div>
      </div>
    </div>
  );
};

export default LastPage;
