import Link from "../router/components/Link";

const About = () => {
  return (
    <div>
      <h1>Tentang</h1>

      <div style={{ display: "flex", gap: 12 }}>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default About;
