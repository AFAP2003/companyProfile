import Image from "next/image"

type CardProp={
    image:string,
    name:string,
    desc:string,
    title:string
}

export default function Card({image,name,desc,title}:CardProp){
    return(
      <div className="flex flex-col gap-4">
          <div>
          <Image src={image}  className="rounded-[20px]"alt="" width={300} height={300}/>
        </div>
        <div className="flex flex-col max-w-[302px]">
            <span className="font-bold">{name}</span>
            <span className="font-semibold">{title}</span>
            <p>{desc}</p>
        </div>
      </div>
    )
}

type CardProps ={
  image:string,
  name:string,
  position:string,
  desc:string
}

export function CardTeam({image,name,position,desc}:CardProps){

  return(
    <div className="border rounded-[10px] sm:max-w-[300px] ">
      <div>
        <img src={image} className="rounded-t-[10px]"  alt="" />
      </div>
     <div className="flex flex-col gap-2  p-[20px]">
     <div>
        <span className="font-semibold text-[20px]">{name}</span>
      </div>
      <div>
        <span>{position}</span>
      </div>

      <div className="flex flex-col gap-4">
        <p>
        {desc}
        </p>
         <div className="flex gap-3">
        <div className="bg-[#F8F8F8] rounded-full p-2">
        <Image src='/facebook.png' alt="" height={10} width={13}/>

        </div>
        <div className="bg-[#F8F8F8] rounded-full p-2">
        <Image src='/instagram.png' alt="" height={20} width={13}/>

        </div>
        <div className="bg-[#F8F8F8] rounded-full p-2">
        <Image src='/twitter.png' alt="" height={20} width={13}/>

        </div>
      </div>
      </div>
     </div>
   
     
    </div>
  )
}