import FormTitle from "../../components/FromTitle";

import { Button } from "../../components/ui/Button";
import { Link } from "react-router-dom";
import image2 from "../../assets/images 2.svg"
import logo2 from "../../assets/logo2.svg"

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div>
        <img src={logo2} alt="work-logo" />
      </div>

      <FormTitle
        title="Bienvenue"
        comment="Plus que 3 petites minutes..."
      />

      <div className="mt-8 max-w-[25rem] lg:max-w-max">
        <img
          src={image2}
          alt="Welcome Image"
          className="w-full max-w-md rounded-lg shadow-md"
        />
      </div>

      <Link to={"/"}>
        <Button
          type="submit"
          className="w-full bg-blue-700/70 hover:bg-blue-800 transition-colors duration-300 cursor-pointer text-white font-semibold mt-4"
        >
          Créer le compte
        </Button>
      </Link>

      <p className="text-sm text-gray-500 mt-6 text-center px-12 lg:px-0">
        By clicking continue, you agree to our{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

export default Welcome;
