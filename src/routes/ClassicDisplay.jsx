import "../style/classic-display.css";

export default function ClassicDisplay() {
  return (
    <div className="classic-display">
      <h1>Arnaud LEDUC</h1>
      <h2>Creative Developer</h2>
      <p>Creative developer and 3D graphic designer living in Agen, France</p>

      <h3>CONTACT</h3>
      <ul className="classic-display-list-container">
        <li>
          <a href="https://twitter.com/LeBigTesti">TWITTER</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/arnaudleduc/">LINKEDIN</a>
        </li>
        <li>
          <a href="https://github.com/arnaudleduc">GITHUB</a>
        </li>
      </ul>

      <h3>EXPERIENCES</h3>
      <h4>
        FREELANCER / CREATIVE DEVELOPER <span>AT </span>ZDK WEB AGENCY
      </h4>
      <p>
        2023<span>&gt;</span>Aujourd&apos;hui
      </p>
      <h4>
        FRONTEND DEVELOPER <span>AT </span>SKILLEOS
      </h4>
      <p>
        2022<span>&gt;</span>2023
      </p>
      <h4>
        CEO / 3D GRAPHIC DESIGNER <span>AT </span>TROISIEME ANGLE
      </h4>
      <p>
        2018<span>&gt;</span>2019
      </p>
      <h4>
        GRAPHIC DESIGNER <span>AT </span>MAESTRO CORPORATION
      </h4>
      <p>
        2017<span>&gt;</span>2018
      </p>

      <h3>PROJECTS</h3>
      <h4>IMMERSIVE WEBSITES</h4>
      <ul className="classic-display-list-container immersive-websites">
        <li>
          <a href="https://abandoned-house.vercel.app/">
            (NOT SO) ABANDONED HOUSE
          </a>
        </li>
        <li>
          <a href="https://zdk-web-agency.vercel.app/">ZDK WEB AGENCY</a>
        </li>
      </ul>
      <h4>COMMON WEBSITES</h4>
      <ul className="classic-display-list-container">
        <li>
          <a href="https://www.skilleos.com/">SKILLEOS</a>
        </li>
      </ul>
      <h4>GRAPHIC DESIGN</h4>
      <ul className="classic-display-list-container">
        {/* <li>
          <a href="https://www.behance.net/arnaudleduc">BEHANCE</a>
        </li> */}
        <li>
          <a href="https://www.artstation.com/zdk">ARTSTATIoN</a>
        </li>
      </ul>
    </div>
  );
}
