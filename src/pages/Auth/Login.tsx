import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo2 from '../../assets/logo2.svg'
import FromTitle from "../../components/FromTitle"
import {Label} from "../../components/ui/Label"
import {Input} from "../../components/ui/Input"
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {Button} from "../../components/ui/Button"
import { AiFillGoogleCircle } from "react-icons/ai";


// fonction permettant de calculer la force du mots de passe
const getPasswordStrength = (password:string)=>{
  let score = 0

  //possede la taille minimun
  if (password.length >= 8 ) score += 1
  //possede au moins une lettre majuscule
  if(/[A-Z]/.test(password)) score += 1
  //possede au moins une lettre majuscule
  if(/[a-z]/.test(password)) score += 1
  //possed au moins un chiffre
  if(/\d/.test(password)) score += 1
  //possede au moins un caractere special
  if(/[^a-zA-Z\d]/.test(password)) score += 1

  return Math.min(score, 5) // retoune un nombre qui est inferieur à 5
}

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    //API call
    navigate(`/auth/verify-otp/${email}`);
  };

  const strength = getPasswordStrength(password);

  return (
    <div className="flex flex-col items-center m-20 gap-7 h-full px-10 w-7/8">
      <div className="flex flex-col justify-center items-center">
        <div>
          <img src={logo2} alt="logo2" />
        </div>
        <div className="w-full flex items-center flex-col max-w-lg p-1">
          <FromTitle 
            title="Connexion" 
            comment="Rentrez vos infos pour vous connecter." 
            style="w-full"/>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit} className="space-y-1 w-100 flex flex-col gap-3">
        <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="abc@example.com"
                    className="w-full focus:right-0 focus:border-blue-700 transition-all"
            />
        </div>
        <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password"
                    type="password"
                    value={password}
                    placeholder="****"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full focus:right-0 focus:border-blue-700 transition-all"
            />
            <div className="mt-2 flex items-center space-x-1 w-full">
              {
                [1, 2, 3, 4, 5].map((segment,index)=>(
                  <div
                    key={index}
                    className={`w-full h-1 ${
                      index < strength 
                          ? index === 0
                            ? "bg-red-500"
                            : index === 1
                            ? "bg-orange-500"
                            : index === 2
                            ? "bg-yellow-500"
                            : index === 3
                            ? "bg-green-500"
                            : "bg-blue-500"
                          : "bg-gray-300"
                    } rounded-b-full transition-colors duration-300`} >
                  </div>
                ))
              }
            </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-full h-[1px] bg-gray-300"></div>
          <span className="text-sm text-gray-500 whitespace-nowrap">OU AVEC</span>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>

        <div className="space-y-2">
          <Button variant="outline" className="w-full space-x-2 cursor-pointer">
            <GitHubLogoIcon/>
            <h1 className="font-semibold">GitHub</h1>
          </Button>
          <Button variant="outline" className="w-full space-x-2 cursor-pointer">
            <AiFillGoogleCircle className=""/>
            <h1 className="font-semibold">Google</h1>
          </Button>
        </div>

        <Button
            type="submit"
            className="w-full bg-blue-700/70 hover:bg-blue-800 transition-colors duration-300 cursor-pointer text-white font-semibold mt-4"
          >
            Se connecter
        </Button>

        <p className="text-sm text-gray-500 mt-4 text-center">
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
      </form>
    </div>
  )
}


export default Login