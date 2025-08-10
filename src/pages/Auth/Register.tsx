import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo2 from '../../assets/logo2.svg'
import FromTitle from "../../components/FromTitle"
import {Label} from "../../components/ui/Label"
import {Input} from "../../components/ui/Input"


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

const Register = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
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
    <div className="flex flex-col items-center m-20 gap-4 h-full px-10 w-full">
      <div>
          <img src={logo2} alt="logo2" />
      </div>
      <div className="w-full flex items-center flex-col max-w-lg p-1">
        <FromTitle 
          title="Creation de compte" 
          comment="Rentrez vos infos pour creer votre compte." 
          style="w-full"/>
      </div>
      <form action="" onSubmit={handleSubmit} className="space-y-1 w-1/2">
        <div className="">
            <Label htmlFor="name">Name</Label>
            <Input id="name"
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full focus:right-0 focus:border-blue-700 transition-all"
            />
        </div>
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
        </div>
        <div className="mt-2 flex items-center space-x-1 w-full">
          {
            [1,2,3,4,5].map((segment,index)=>(
              <div
                key={index}
                className={`w-full h-1 ${
                  index <strength 
                      ? index === 0
                        ?"bg-red-500"
                        :index === 1
                        ?"bg-orange-500"
                        :index === 2
                        ?"bg-yellow-500"
                        :index === 3
                        ? "bg-green-500"
                        :"bg-blue-500"
                      :"bg-gray-300"
                } rounded-b-full transition-colors duration-300`} >
              </div>
            ))
          }
        </div>
      </form>
    </div>
  )
}


export default Register