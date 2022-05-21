import "./App.css";
import Login01 from "./Pages/Authentication/Login01";
import Login02 from "./Pages/Authentication/Login02";
import Login03 from "./Pages/Authentication/Login03";
import Login04 from "./Pages/Authentication/Login04";
import Login05 from "./Pages/Authentication/Login05";
import Footer01 from "./Pages/Shared/Footer/Footer01";
import Footer02 from "./Pages/Shared/Footer/Footer02";
import Footer03 from "./Pages/Shared/Footer/Footer03";
import Footer04 from "./Pages/Shared/Footer/Footer04";
import Footer05 from "./Pages/Shared/Footer/Footer05";
import Footer06 from "./Pages/Shared/Footer/Footer06";

function App() {
  return (
    <div>
      <section>

        <h1 className="text-center my-10 text-2xl font-bold text-green-600">
          Login Page
        </h1>

        <div className="text-center my-10">
          <h1 className="text-2xl font-bold text-green-600">
            Top Login Page List:
          </h1>
          <p className="text-xl text-blue-500">1. Login - 01</p>
          <p className="text-xl text-blue-500">1. Login - 03</p>
        </div>

        <h2 className="text-2xl text-blue-900 font-bold text-center my-10">
          1. Login - 01
        </h2>
        <Login01></Login01>

        <h2 className="text-2xl text-blue-900 font-bold text-center mt-10 ">
          2. Login - 02
        </h2>
        <Login02></Login02>

        <h2 className="text-2xl text-blue-900 font-bold text-center my-10 ">
          3. Login - 03
        </h2>
        <Login03></Login03>

        <h2 className="text-2xl text-blue-900 font-bold text-center my-10 ">
          4. Login - 04
        </h2>
        <Login04></Login04>

        <h2 className="text-2xl text-blue-900 font-bold text-center my-10 ">
          5. Login - 05
        </h2>
        <Login05></Login05>

      </section>

      <footer>
        <div className="text-center my-10">
          <h1 className="text-2xl font-bold text-green-600">
            Top Footer List:
          </h1>
          <p className="text-xl text-blue-500">1. Footer - 03</p>
          <p className="text-xl text-blue-500">2. Footer - 04</p>
          <p className="text-xl text-blue-500">2. Footer-img - 05</p>
        </div>
        <h2 className="text-2xl text-blue-900 font-bold text-center my-5">
          1. Footer 01
        </h2>
        <Footer01></Footer01>
        <h2 className="text-2xl text-blue-900 font-bold text-center my-5">
          2. Footer 02
        </h2>
        <Footer02></Footer02>
        <h2 className="text-2xl text-blue-900 font-bold text-center my-5">
          3. Footer 03
        </h2>
        <Footer03></Footer03>
        <h2 className="text-2xl text-blue-900 font-bold text-center my-5">
          4. Footer 04
        </h2>
        <Footer04></Footer04>
        <h2 className="text-2xl text-blue-900 font-bold text-center my-5">
          5. Footer _image_ 05
        </h2>
        <Footer05></Footer05>
        <h2 className="text-2xl text-blue-900 font-bold text-center mt-10">
          6. Footer 06
        </h2>
        <Footer06></Footer06>
      </footer>
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
