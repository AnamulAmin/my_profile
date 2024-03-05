import Image from 'next/image'
import { useState } from 'react'

function FeaturedCard({item, isOpenScreen, setIsOpenScreen, id}) {
    const [isScreen, setIsScreen] = useState(false)
    
  return (
    <div className={ `featuredCard transition-all duration-500 relative overflow-auto group ${isScreen ? "" : ""}` } id={`card-${id}`} >
            
            {/* <button onClick={()=> {setIsScreen(false); setIsOpenScreen(false)}} className={`absolute top-3 left-16 text-4xl text-neutral goBack z-50 ${isScreen ? "opacity-100 visible": "opacity-0 invisible "}`}><IoArrowBackOutline /></button>*/}

            
            <div className={ `transition-all duration-500 ${isScreen ? "opacity-0 invisible h-0 p-0 hidden" : " block w-full h-full sticky top-0 left-0 text-white p-12 transition-all duration-500 space-y-10 opacity-0 group-hover:opacity-100 z-30"}`}> 
            
                    <h3 className="text-3xl font-bold ">{item.title}</h3>
                    <p className="text-xl">Explore comfort and style at FurniVista. Discover handcrafted furniture that transforms spaces into havens. From plush sofas to elegant tables, our curated collection blends craftsmanship with contemporary design. Elevate your home with FurniVista – where comfort meets style in every piece</p>
                    <div className="flex gap-4">
                        {/* <button className="btn btn-white" data-btn="viewBtn" onClick={()=> {setIsScreen(true); setIsOpenScreen(true)}}>View Detail</button> */}


                        <a target='_blank' href={item.link} className="btn btn-outline btn-warning">Visit the site</a>

                        <a target='_blank' href={item.githubLink} className="btn  btn-warning">Go to Github</a>
                    </div>
                </div>

                <div className={ `transition-all duration-500 max-h-[70vh] ${!isScreen ? "w-full mt-0": "w-[450px] overflow-auto mt-20" } ` }>
                <Image src={item.image} className={isScreen  ? `w-full` : `w-full group-hover:brightness-[0.3] transition-all duration-500 -mt-[27rem] `} width="1000" height="400" alt="project image" />

                </div>
                
            </div>
  )
}

export default FeaturedCard