import "@/styles/components/_footer.scss";
import GitLogo from "@/assets/github-mark-white.svg";
import LinkedinLogo from "@/assets/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer>
      <div className="leftContainer">
        <p>Grill ride it's not a real brand</p>
        <p>@Gabriel Trujillo 2023</p>
      </div>
      <div className="rightContainer">
        <a href="https://github.com/DeikuModder">
          <img
            src={GitLogo}
            alt="Cuenta de github"
            loading="lazy"
            className="footerLogo"
          />
        </a>

        <a href="https://www.linkedin.com/in/gabriel-trujillo-315927274/">
          <img
            src={LinkedinLogo}
            alt="Cuenta de Linkedin"
            loading="lazy"
            className="footerLogo linkedin"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
