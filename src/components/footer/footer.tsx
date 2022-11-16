import "./footer.css";

const FooterComponent = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <a
            href="https://github.com/ChrismoNL/redis-explorer/wiki"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://github.com/ChrismoNL/redis-explorer/issues"
            rel="noopener noreferrer"
          >
            Issues
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://github.com/ChrismoNL/redis-explorer"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
        <div className="footer-right">
          Redis Exporer is an tool developed by{" "}
          <a href="https://chrismo.nl" title="Chrismo B.V.">
            Chrismo B.V.
          </a>
        </div>
      </div>
    </footer>
  );
};

export { FooterComponent };
