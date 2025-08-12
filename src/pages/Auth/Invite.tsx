import React, { useState } from "react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import FormTitle from "../../components/FromTitle";
import { useNavigate } from "react-router-dom";
import logo2 from "../../assets/logo2.svg"

const Invite = () => {

  const navigate = useNavigate();
  const [phoneNumbers, setPhoneNumbers] = useState(["", "", "", ""]);


  const handlePhoneNumberChange = (index: number, value: string) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index] = value;
    setPhoneNumbers(newPhoneNumbers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Phone Numbers:", phoneNumbers);
    //api call
    navigate(`/auth/welcome/`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div>
        <img src={logo2} alt="work-logo" />
      </div>

      <div className="w-full max-w-md p-6 space-y-4">
        <FormTitle
          title="Finalisation"
          comment="Veuillez Inviter 04 amis pour finaliser l’inscription "
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <Label htmlFor="phone-numbers">Numéros de Téléphone</Label>
          {[1, 2, 3, 4].map((index) => (
            <Input
              key={index}
              id={`whatsapp-${index}`}
              type="tel"
              placeholder="Numero whatsapp"
              value={phoneNumbers[index - 1]}
              onChange={(e) =>
                handlePhoneNumberChange(index - 1, e.target.value)
              }
              className="w-full focus:ring-0 focus:border-blue-700 transition-all"
            />
          ))}

          <Button
            type="submit"
            className="w-full bg-blue-700/70 hover:bg-blue-800 transition-colors duration-300 cursor-pointer text-white font-semibold mt-4"
          >
            Créer le compte
          </Button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
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
    </div>
  );
};

export default Invite;
