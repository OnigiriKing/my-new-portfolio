import "./style.css";

export default function PageFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-wrapper">
      <p>© {currentYear} Nikita Zamyshliaev. All rights reserved.</p>
    </footer>
  );
}
