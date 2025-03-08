
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white text-center mt-3">
      &copy; {currentYear} MoumenNajjar
    </footer>
  );
};

export default Footer;
