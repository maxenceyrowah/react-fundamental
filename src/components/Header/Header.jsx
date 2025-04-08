import { Logo } from "../Logo";
import { Navigation } from "../Navigation";

const Header = ({ items }) => {
  return (
    <header>
      {/* navigation */}
      <section className="wrapper">
        <section className="wrapper_nav">
          <Logo />
          <Navigation {...{ items }} />
        </section>
      </section>
    </header>
  );
};
export default Header;
