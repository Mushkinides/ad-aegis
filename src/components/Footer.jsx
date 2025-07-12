const Footer = () => {
  return (
    <footer className="w-full bottom-0 bg-gradient-to-r from-[#1a1a1a] to-[#204a20] rounded-tl-[125px] mt-7 pt-24 pb-7 text-sm ">
      <div className="w-[85%] m-auto flex flex-wrap items-start justify-between">
        <div className="basis-[25%] p-2">
          <h3 className="text-5xl">AD AEGIS</h3>
          <p className="mt-7">
            No more awkward ads! Handpick what appears on your site, ditch the
            drama, and keep your audience happy.
          </p>
        </div>
        <div className="col">
          <h3 className="font-semibold text-lg">FORTRESS HQ</h3>
          <ul className="mt-10">
            <li>Sentinel Way</li>
            <li>Blockade City, Defendia</li>
            <li>Guardian State, ZIP 90210, The Internet</li>
            <li className="w-fit border-b border-gray-300 my-5">
              info@ad-aegis.com
            </li>
            <li className="font-semibold">+972 541234567</li>
          </ul>
        </div>
        <div className="col">
          <h3 className="font-semibold text-lg">LINKS</h3>
          <ul className="mt-10">
            <li className="mt-3">
              <a href="#">Company</a>
            </li>
            <li className="mt-3">
              <a href="#">Features</a>
            </li>
            <li className="mt-3">
              <a href="#">Resources</a>
            </li>
            <li className="mt-3">
              <a href="#">Docs</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
