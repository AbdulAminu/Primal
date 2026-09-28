import { NavBar } from "../../components/NavBar/NavBar";
import "./About.css";
import { Link } from "react-router-dom";
export function About() {
  return (
    <div className="About-page  min-h-screen">
      <NavBar />
      <div>
        <section className="heroA">
          <div className="contA">
            <div className="ttxt">
              <h1>Who We Are</h1>{" "}
            </div>
            <div className="subttxt">
              <hr className="hwr"></hr>
              <p>
                Primal Wallpapers is a visual platform created for people who
                love beautiful screens. Whether you're into stunning anime
                artwork, breathtaking nature scenes, sleek cars, dark
                aesthetics, or creative abstract designs, we bring a wide
                collection of wallpapers together in one place.
              </p>
            </div>
          </div>
        </section>
        <section className="heroB">
          <div className="contB">
            <div className="li">
              <h1 className="t">
                Why Primal Wall<span>papers</span>
              </h1>
              <h2 className="ty">
                We don't just provide wallpapers, we create a visual experience.
              </h2>
              <hr className="hwr"></hr>
              <ul className="te">
                <li className="te">
                  🎨 Thousands of wallpapers across different styles
                </li>
                <li className="te"> 

📱 Crisp, high-quality wallpapers for your screen

</li>
                <li className="te">⚡ Fast and seamless navigation</li>
                <li className="te">✨ Fresh designs for every personality</li>
                <li className="te">
                  
🌍 Discover and download anytime, anywhere, on any device
                </li>
              </ul>
            </div>
            <div className="le">
              <h1 className="xt">🚀 Our Mission</h1>
              <hr className="hwr"></hr>
              <p className="tx">
               
To build a platform where wallpaper lovers can effortlessly discover, download, and enjoy incredible visuals without the hassle. Whether you're customizing your phone, tablet, or desktop, Primal Wallpapers is designed to make every screen feel more personal, stylish, and unique.

              </p>
            </div>
          </div>
        </section>
        <section className="heroC">
          <div>
            <div className="rr">
              <h1 className="cc">Ready to transform your screen?</h1>
              <p className="nt">
                Create your account today and start exploring the world of
                Primal Wall<span>papers</span>.{" "}
                <Link
                  to="/create-account"
                  className="font-semibold text-indigo-400 hover:text-indigo-300 at"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
