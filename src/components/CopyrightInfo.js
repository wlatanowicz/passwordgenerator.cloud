import "./Copyright.css";

const CopyrightInfo = (props) => {
  return (
    <p className="copyright">
      &copy; <a href="https://github.com/wlatanowicz/">Wiktor Latanowicz</a>
      <br />
      Source available on{" "}
      <a href="https://github.com/wlatanowicz/passwordgenerator.cloud">
        GitHub
      </a>
    </p>
  );
};

export default CopyrightInfo;
