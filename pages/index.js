import Head from "next/head";
import HeaderSection from "../src/HeaderSection";
import Services from "../src/Services";
import LatestWork from "../src/LatestWork";
import WorkFlow from "../src/WorkFlow";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ANALABS | Home</title>
        <meta
          name="description"
          content="The official website for the ANAlabas team. we are computer scientist with divers background in the feild. we make your ideas concret and solve your problems. we develop mobile apps, web apps and AI solutions"
        />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ANALABS | Home" />
        <meta
          property="og:description"
          content="The official website for the ANAlabas team. we are computer scientist with divers background in the feild. we make your ideas concret and solve your problems. we develop mobile apps, web apps and AI solutions"
        />
        <meta property="og:image" content="/favicon.ico" />
      </Head>
      <header>
        <HeaderSection />
      </header>
      <main style={{ margin: "60px 0" }}>
        <Services />
        <WorkFlow />
        <LatestWork />
      </main>
    </div>
  );
}
