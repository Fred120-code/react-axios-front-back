import FormTitle from "../../components/FromTitle";
import { Button } from "../../components/ui/Button";
import logo2 from "../../assets/logo2.svg"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../components/ui/input-otp";
import { Label } from "../../components/ui/Label";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const enter_otp = ()=>{
  const navigate = useNavigate();
  const { email } = useParams<{ email: string }>();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    //  API call
    setTimeout(() => {
      setLoading(false);
      if (otp.length === 4) {
        console.log("OTP:", otp);
        // API call

        navigate(`/auth/invite/`);
      } else {
        setError("Veuillez entrer un code OTP valide");
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-0">
      <div>
        <img src={logo2} alt="work-logo" />
      </div>

      <div className="w-full max-w-md p-6 space-y-4">
        <FormTitle
          title="Verification"
          comment={`Rentrez le code OTP envoyé à ${email}.`}
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-center">
            <Label htmlFor="otp" className="mb-3 text-left w-full">
            </Label>
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={setOtp}
              disabled={loading}
            >
              <InputOTPGroup className="space-x-3">
                <InputOTPSlot
                  index={0}
                  className="w-13 h-13 text-xl border-2 border-gray-200 outline-none rounded-lg focus:border-blue-700 focus:ring-0 transition-al bg-gray-50"
                />
                <InputOTPSlot
                  index={1}
                  className="w-13 h-13 text-xl border-2 border-gray-200 outline-none rounded-lg focus:border-blue-700 focus:ring-0 transition-all bg-gray-50"
                />
                <InputOTPSlot
                  index={2}
                  className="w-13 h-13 text-xl border-2 border-gray-200 outline-none rounded-lg focus:border-blue-700 focus:ring-0 transition-all bg-gray-50"
                />
                <InputOTPSlot
                  index={3}
                  className="w-13 h-13 text-xl border-2 border-gray-200 outline-none rounded-lg focus:border-blue-700 focus:ring-0 transition-all bg-gray-50"
                />
              </InputOTPGroup>
            </InputOTP>

            <div className="mt-4 text-sm text-gray-600">
              Vous n'avez pas reçu de code ?{" "}
              <button
                type="button"
                className="text-blue-500 hover:underline font-medium"
                onClick={() => {
                  // resend logic
                  console.log("Resend OTP");
                }}
              >
                Renvoyer
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-blue-700/70 hover:bg-blue-800 transition-colors duration-300 cursor-pointer text-[1rem] text-white font-semibold mt-4"
          >
            {loading ? "Vérification..." : "Vérifier le code OTP"}
        </Button>
        </form>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        {loading && (
          <div className="flex justify-center mt-4">
            <svg
              className="animate-spin h-6 w-6 text-worketblue"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 6.627 5.373 12 12 12a7.963 7.963 0 01-7.717-2.709z"
              ></path>
            </svg>
          </div>
        )}

        <p className="text-sm text-gray-500 mt-6 text-center">
          En cliquant sur continuer, vous acceptez nos{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Conditions d'utilisation
          </a>{" "}
          et{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Politique de confidentialité
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default enter_otp