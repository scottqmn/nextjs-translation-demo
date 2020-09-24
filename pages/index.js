import Hero from "../components/Hero";
import Counter from "../components/Counter";
import { withTranslation } from "../i18n";

const Home = () => {
  return (
    <div>
      <Hero />
      <Counter />
    </div>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "footer"],
});

export default Home;
