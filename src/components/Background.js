import bgMobile from "../images/bg-main-mobile.png";
import bgDeskrop from "../images/bg-main-desktop.png";

export default function Background() {
  return (
    <div className="bg">
      <picture>
        <source media="(min-width: 400px )" srcSet={bgDeskrop} />
        <img src={bgMobile} alt="" />
      </picture>
    </div>
  );
}
