// Assuming you have a CSS file for boxicons or a similar icon library imported globally
import "boxicons/css/boxicons.min.css";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
        {/* Column 1: Logo and About Text */}
        <div className="flex-1 min-w-[200px]">
          {/* Replace with your actual logo component or image */}
          <h2 className="text-2xl font-bold mb-4">YourLogo</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="flex-1 min-w-[150px]">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Web Design
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Development
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                SEO
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Social Media */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-2 mb-6">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-grow p-3 rounded-md bg-[#2a2a2a] border border-[#3a3a3a] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#63e963]"
            />
            <button
              type="submit"
              className="bg-[#63e963] text-black font-semibold py-3 px-6 rounded-md hover:bg-opacity-80 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>

          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {/* Social Media Icons with Hover Animation */}
            <a
              href="#"
              className="text-gray-400 hover:text-white text-2xl transition-transform duration-300 hover:scale-110"
            >
              <i className="bx bxl-facebook"></i>{" "}
              {/* Replace with actual icon component */}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-2xl transition-transform duration-300 hover:scale-110"
            >
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-2xl transition-transform duration-300 hover:scale-110"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white text-2xl transition-transform duration-300 hover:scale-110"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-[#3a3a3a] mt-12 pt-8 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
