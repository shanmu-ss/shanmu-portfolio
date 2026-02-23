// FooterComponent.js
import '../Footer.css';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <span>
        &lt;/<span className="footer-brand">Shanmu</span>&gt; &nbsp;·&nbsp; Cloud &amp; DevOps Engineer &nbsp;·&nbsp;
        Built with React &amp; ☁️ &nbsp;·&nbsp; © {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default FooterComponent;

