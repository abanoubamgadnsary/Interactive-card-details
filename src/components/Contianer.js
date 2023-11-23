import logo from "../images/card-logo.svg";
import { useState } from "react";
import Submission from "./Submission";
export default function Container() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(null);
  // const numberArry = Array.from(cardNumber, (num) => {
  //   return Number(num);
  // });

  // let isSmallRendered = false;

  // numberArry.map((num) => {
  //   if (!isSmallRendered && isNaN(num)) {
  //     isSmallRendered = true;
  //   }
  //   return null;
  // });

  function handleSubmit(e) {
    e.preventDefault();

    if (!cardNumber || !cardHolderName || !month || !year || !cvc) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
  }
  return (
    <div className="container">
      <div className="card">
        <article className="front">
          <img src={logo} alt="" />
          <div className="info">
            <h2>{!cardNumber ? "0000 0000 0000 0000" : cardNumber}</h2>
            <div className="details">
              <p>{!cardHolderName ? "Abanoub Amgad" : cardHolderName}</p>
              <p>
                {!month ? "00" : month}/{!year ? "00" : year}
              </p>
            </div>
          </div>
        </article>
        <article className="back">
          <p className="cvc">{!cvc ? "000" : cvc}</p>
        </article>
      </div>

      {!isSubmitted && (
        <form onSubmit={handleSubmit}>
          <label>CardHolder name </label>
          <input
            type="text"
            value={cardHolderName}
            placeholder="e.g Abanoub Amgad"
            onChange={(e) => setCardHolderName(e.target.value)}
          />

          <label>card Number</label>
          <input
            className={/[a-z]/gi.test(cardNumber) && "input-error"}
            value={cardNumber
              .replace(/\s/g, "")
              .replace(/(\d{4})/g, "$1 ")
              .trim()}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength={19}
            type="text"
            placeholder="e.g 0000 0000 0000 0000"
          />
          {/[a-z]/gi.test(cardNumber) && (
            <small className="error">Wrong format.numbers only</small>
          )}

          <div className="data">
            <div className="exp-date">
              <label>Exp.date (mm/yy)</label>
              <div className="two-inp">
                <div>
                  <input
                    className={
                      !month && isSubmitted === false ? "input-error" : ""
                    }
                    type="text"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    placeholder="MM"
                    maxLength={2}
                  />
                </div>

                <div>
                  <input
                    className={
                      !year && isSubmitted === false ? "input-error" : ""
                    }
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="YY"
                    maxLength={2}
                  />
                </div>
              </div>
              {(!month || !year) && isSubmitted === false && (
                <small className="error">Can't be blank</small>
              )}
            </div>

            <div className="cvc-data">
              <label>cvc</label>
              <input
                className={!cvc && isSubmitted === false ? "input-error" : ""}
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                type="text"
                maxLength={3}
                placeholder="e.g 000"
              />
              {!cvc && isSubmitted === false && (
                <small className="error">Can't be blank</small>
              )}
            </div>
          </div>
          <button>Confirm</button>
        </form>
      )}
      {isSubmitted && <Submission setIsSubmitted={setIsSubmitted} />}
    </div>
  );
}
