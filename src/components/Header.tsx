import logoImg from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="px-4 py-5 bg-white border-b-[1px] border-gray">
      <img src={logoImg} alt="logo svg" />
    </header>
  );
};

export default Header;
