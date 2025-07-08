// import partnership_img from "@/assets/images/partnership_bg_1.png";


const page = ({ id, title,
  description,
  features,
  buttonText, img }) => {

    const stylingcard = id % 2 == 0  
  return <>


    <div className={`partner_box relative px-5 pt-5 md:px-10 md:pt-5  h-full   ${stylingcard ? "bg-[#1C2000]" : "bg-[#F0F6B3]"}   before:absolute before:h-[150px] before:w-[75%] before:bg-[url(/img/partnership_bg_1.png)] before:top-0 before:left-0    rounded-lg shadow-lg`}>

      <h2 className={` ${stylingcard ? "text-[#F0F6B3]" : "text-heading-c1"} mb-5  text-3xl text-pretty`}>{title}</h2>
      <p className={` ${stylingcard ? "text-para-dark" : "text-[#797e4a]"} mb-5`}>{description}</p>
      <ul className="mb-5" >
        {features.map((feature, index) => (
          <li key={index} className={`inline-block relative   ${index !== features.length - 1 ? "before:absolute before:h-full before:w-[2px] before:right-0 before:top-0" : ""}  ${index == 0 ? "pe-3" : "px-3"} ${stylingcard ? "text-white before:bg-white" : "text-black before:bg-black"} `}>{feature}</li>
        ))}
      </ul>
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div>

          {buttonText && (
            <button className={`  ${stylingcard ? "text-black bg-[#F0F6B3]" : "text-white bg-heading-c1"} rounded-full active:scale-[.98] cursor-pointer px-4 py-2 `}>
              {buttonText}
            </button>
          )}
        </div>
        <div>
          <img src={img} alt={title} className=" w-full  h-auto   rounded" />

        </div>
      </div>
    </div>
  </>
}

export default page 
