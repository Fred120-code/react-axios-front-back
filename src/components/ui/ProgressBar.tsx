import { useLocation } from "react-router-dom";

const steps = [
  { path: "/auth/register", color: "bg-red-500" },
  { path: "/auth/login", color: "bg-orange-500" },
  { path: "/auth/enter-otp", color: "bg-yellow-500" },
  { path: "/auth/invite", color: "bg-blue-500" },
  { path: "/auth/welcome", color: "bg-green-500" },
];

function getStepIndex(pathname: string) {
  if (pathname.startsWith("/auth/enter-otp")) return 2;
  return steps.findIndex(step => pathname.startsWith(step.path));
}

const ProgressBar = () => {
  const location = useLocation();
  const currentStep = getStepIndex(location.pathname);

  return (
    <div className="flex w-1/3 px-8 py-4 gap-2 bottom-0 left-0 z-50 bg-white">
      {steps.map((step, idx) => (
        <div
          key={step.path}
          className={`flex-1 h-2 rounded-full transition-colors duration-300
            ${idx <= currentStep ? step.color : "bg-gray-300"}
          `}
        />
      ))}
    </div>
  );
};

export default ProgressBar;