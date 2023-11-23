import image from "../images/icon-complete.svg";
function Submission({ setIsSubmitted }) {
  return (
    <div className="submission">
      <img src={image} alt="" />
      <h1>Thank You!</h1>
      <p>We have added your card detalis</p>
      <button onClick={() => setIsSubmitted(false)}>Continue</button>
    </div>
  );
}

export default Submission;
