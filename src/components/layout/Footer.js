import React from "react";
import "../../../src/App.css";

const Footer = () => {
  return (
    <footer className="page-footer font-small special-color-dark pt-4">
      <div className="container">
        <ul className="list-unstyled list-inline text-center">
          <li className="list-inline-item">
            <a
              href="https://www.facebook.com/sumityadav802"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-floating btn-fb mx-1"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://twitter.com/logsumit28"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-floating btn-tw mx-1"
            >
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.instagram.com/sumit8150/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-floating btn-insta mx-1"
            >
              <i className="fab fa-instagram"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://www.linkedin.com/in/sumit-yadav-7b311510b/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-floating btn-li mx-1"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="https://github.com/sumitkumar1207"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-floating btn-github mx-1"
            >
              <i className="fab fa-github"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a
              href="http://binarynumbers.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-floating btn-company mx-1"
            >
              <i className="fas fa-globe fa-2x"> </i>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2018 Copyright:
        <a
          href="https://sumitkumar1207.github.io/my-portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Sumit Yadav
        </a>
      </div>
    </footer>
  );
};
export default Footer;
