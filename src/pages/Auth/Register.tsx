import { useState } from "react"
import { useNavigate } from "react-router-dom"
import logo2 from '../../assets/logo2.svg'
import FromTitle from "../../components/FromTitle"
import { Label } from "../../components/ui/Label"


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

const AuthRegister = ()=>{
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  //fonction handleSubmit

}


const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-10">
      <div>
          <img src={logo2} alt="logo2" />
      </div>
      <div className="w-full flex items-center flex-col max-w-lg space-y-4">
        <FromTitle 
          title="Creation de compte" 
          comment="Rentrez vos infos pour creer votre compte." 
          style="w-full"/>
      </div>
      <form action="" className="space-y-4">
        <div>
            <Label >Email</Label>
            <Input/>
        </div>
      </form>
    </div>
  )
}

export default Register