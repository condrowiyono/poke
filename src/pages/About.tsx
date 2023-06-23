import Link from "../router/components/Link";
import useOutlet from "../router/hooks/useOutlet";

const Outlet = () => {
  return useOutlet();
};

const About = () => {
  return (
    <div>
      <h1>Tentang</h1>
      <Outlet />
      <hr />
      <div style={{ display: "flex", gap: 12 }}>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
        <Link to="/pokemon/venusaur/evolution/bulbasaursdasdasd">
          Detail Pokemon
        </Link>
      </div>
    </div>
  );
};

export default About;
