import stew from "./assets/stew.jpg";
import noodles from "./assets/noodles.jpg";
import curry from "./assets/curry.jpg";
import { useState } from "react";

const App = () => {
  const [menu, setMenu] = useState(false);

  const clickEvent = () => setMenu((prevState) => !prevState);

  return (
    <main className="text-gray-600 font-body bg-gray-100 grid md:grid-cols-3">
      {/*content wrapper*/}
      <section className="bg-white md:col-span-1 md:flex md:justify-end">
        {" "}
        {/*begin nav*/}
        <nav className="text-right">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                <a
                  href="/"
                  className="text-green-500 sm:text-red-500 lg:text-blue-500 md:text-xl hover:text-gray-700"
                >
                  Food Ninja
                </a>
              </h1>
                <div
                  className="px-4 cursor-pointer md:hidden"
                  id="burger"
                  onClick={clickEvent}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                </div>
              </div>
              <ul
                className={`md:block ${menu ? "block" : "hidden"} text-sm mt-6`}
                id="menu"
              >
                <li className="text-gray-700 font-bold py-1">
                  <a
                    href="#"
                    className="px-4 flex justify-end border-r-4 border-primary"
                  >
                    <span className="px-1">Home</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5  inline-block ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="px-4 flex justify-end border-r-4 border-white"
                  >
                    <span className="px-1">About</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 inline-block ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="px-4 flex justify-end border-r-4 border-white"
                  >
                    <span className="px-1">Contact</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 inline-block ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
        </nav>
      </section>{" "}
      {/*end nav*/}
      <section className="px-16 py-6 md:col-span-2">
        <div className="pb-4 flex justify-center md:justify-end">
          <a
            href="#"
            className="text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white transition:ease-in-out duration-500"
          >
            Log in
          </a>
          <a
            href="#"
            className="text-primary ml-2 btn border-primary md:border-2  hover:bg-primary hover:text-white transition:ease-in-out duration-500"
          >
            Sign up
          </a>
        </div>

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-gray-700 text-2xl font-semibold py-3">
            For Ninjas
          </h3>
        </header>

        <section>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>

          <div className="mt-8 grid md:grid-cols-3 gap-10 ">
            {/* cards go here */}
            <div className="card">
              <img
                src={stew}
                alt="stew"
                className="w-full h-32 sh:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chili Stew</span>
                <span className="block text-gray-400 text-sm">
                  Recipe by Mario
                </span>
              </div>
              <div className="badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="px-1">25 mins</span>
              </div>
            </div>
            <div className="card">
              <img
                src={noodles}
                alt="stew"
                className="w-full h-32 sh:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">Veggie Noodles</span>
                <span className="block text-gray-400 text-sm">
                  Recipe by Mario
                </span>
              </div>
              <div className="badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="px-1">25 mins</span>
              </div>
            </div>
            <div className="card">
              <img
                src={curry}
                alt="stew"
                className="w-full h-32 sh:h-48 object-cover"
              />
              <div className="m-4">
                <span className="font-bold">Curry</span>
                <span className="block text-gray-400 text-sm">
                  Recipe by Mario
                </span>
              </div>
              <div className="badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="px-1">25 mins</span>
              </div>
            </div>
          </div>

          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Most Popular
          </h4>

          <div className="mt-8">
            <div>{/* cards go here */}</div>
          </div>

          <div className="flex justify-center">
            <div className="bg-secondary-100 text-secondary-200 btn hover:shadow-inner transform hover:scale-125 transition:ease-in-out duration-300">
              Load More
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default App;
