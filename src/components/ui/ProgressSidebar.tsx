import React from 'react'
import { useLocation, matchPath, Link } from "react-router-dom";
import { Mail, MoveLeft, Rocket, UserRound, UserRoundPlus } from "lucide-react";
import type { Step } from '../../types/index';
import logo from "../../assets/logo.svg";
const steps: Step[] = [
  {
    path: "/auth/register",
    title: "Inscription",
    descrip: "Entrez vos informations personelles.",
    icon: <UserRound />
  },
  {
    path: "/auth/login",
    title: "Connexion",
    descrip: "Connectez-vous à votre compte",
    icon: <MoveLeft />
  },
  {
    path: "/auth/enter-otp",
    title: "Entrer OTP",
    descrip: "Entrez le code OTP envoyé à votre email",
    icon: <Mail />
  },
  {
    path: "/auth/invite",
    title: "Inviter",
    descrip: "Invitez vos amis",
    icon: <UserRoundPlus />
  },
  {
    path: "/auth/welcome",
    title: "Bienvenue",
    descrip: "Bienvenue dans notre application",
    icon: <Rocket />
  }
];
const ProgressSidebar = () => {
    const location = useLocation();
  return (
    <div className=' flex flex-col w-full h-full justify-between spac-y-8'>
        <div className=' flex flex-col w-full h-auto gap-10 p-6 relative'>
            <img src={logo} alt="Logo" 
                className='self-start mb-6'
                />
                {
                    steps.map((step, index)=>{
                        const isActive = !!matchPath(step.path, location.pathname)
                        return(
                            <div 
                                key={step.path}
                                className={`flex gap-4 items-start transition-colors relative ${isActive ? "text-gray-900 " : "text-gray-400"
                                }`}                        
                                >{
                                    index < steps.length - 1 && (
                                        <div
                                        className="absolute left-[1.9rem] top-[4rem] w-[2px] bg-gray-300"
                                        style={{ height: "2.25rem" }}
                                        >
                                        </div>
                                    )
                                }
                                <div className='p-4 border rounded-2xl flex-center'>
                                    <div className={`mt-1 ${isActive ? "text-gray-900 " : "text-gray-400"
                                        }`}>{step.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className={`font-semibold text-lg ${isActive? "font-bold text-gray-900" : "text-gray-400"}`}>
                                        {step.title}
                                    </h3>
                                    <p className='text-md mt-1'>
                                        {step.descrip}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
        <div className='w-full flex justify-between'>
            <Link to={"/"} className='flex justify-center items-center gap-1'>
                <MoveLeft className='text-blue-600'/>
                <h1 className='text-blue-600'>your details</h1>
            </Link>
            <Link to={"/auth/login"} className='text-blue-600'>
                Sign in
            </Link>
        </div>
    </div>
  )
}

export default ProgressSidebar