import "./App.css";
import Footer01 from "./Pages/Shared/Footer/Footer01";
import Footer02 from "./Pages/Shared/Footer/Footer02";
import Footer03 from "./Pages/Shared/Footer/Footer03";
import Footer04 from "./Pages/Shared/Footer/Footer04";
import Footer05 from "./Pages/Shared/Footer/Footer05";
import Footer06 from "./Pages/Shared/Footer/Footer06";

function App() {
  return (
    <div>
      <section className="text-center my-10">
        <h1 className="text-2xl font-bold text-green-600">Top Footer List:</h1>
        <p className="text-xl text-blue-500">1. Footer - 03</p>
        <p className="text-xl text-blue-500">2. Footer - 04</p>
        <p className="text-xl text-blue-500">2. Footer-img - 05</p>
      </section>
      {/* <Footer01></Footer01> */}
      {/* <Footer02></Footer02> */}
      <Footer03></Footer03>
      {/* <Footer04></Footer04> */}
      {/* <Footer05></Footer05> */}
      {/* <Footer06></Footer06> */}
    </div>
  );
}

export default App;

/**
 * Others elements:
 * =========Link ==========
 * 1. https://tailwind-elements.com/docs/standard/navigation/footer/
 * 2.
 * 3.
 * 4.
 * .5.
 */
