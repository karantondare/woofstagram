import { SiReact, SiTypescript, SiTailwindcss } from "react-icons/si";

const Footer = () => {
  return (
    <div className="flex justify-center bg-red-400 p-8 text-white text-4xl">
      <h3 className="">
        Created by <a href="https://github.com/karantondare">Karan Tondare</a>{" "}
        using{" "}
      </h3>
      <span className="font-bold flex items-center">
        <a className="px-2" href="https://reactjs.org">
          <SiReact />
        </a>
        ,
        <a className="px-2" href="https://www.typescriptlang.org">
          <SiTypescript />
        </a>
        and
        <a className="px-2" href="https://tailwindcss.com/">
          <SiTailwindcss />
        </a>
      </span>
    </div>
  );
};

export default Footer;
