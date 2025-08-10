import { cn } from '../lib/utils'
interface TitleProps{
    title: string;
    comment?: string;
    style?: string;
}
const FromTitle = ({title, comment, style}:TitleProps) => {
  return (
    <div className={cn("flex flex-col in-checked: xl:text-center", style)}>
        <h1 className='text-[1.8rem] lg:text-[3rem] w-full font-semibold text-center'>
            {title}
        </h1>
        <h6 className="text-[1rem] md:text-[1.2rem] font-normal text-gray-600 text-center">
            {comment}
        </h6>
    </div>
  )
}

export default FromTitle