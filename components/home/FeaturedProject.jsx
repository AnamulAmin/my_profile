"use client"
import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";


function FeaturedProject() {

    const [isOpenScreen, setIsOpenScreen] = useState();
    const [featuredData , setFeaturedData] = useState()
;
    // useEffect(() => {

    //     const boxImage = gsap.utils.toArray(".featuredCard");
    //     const gallery = document.getElementById("projectArea");
    //     const filledBox = document.querySelector(".projectModal");
    //     const goBack = document.querySelector(".goBack");

    //     console.log(filledBox)
    //     console.log(gallery)
    //     console.log(filledBox.children[0])

    //     goBack.addEventListener("click", () => {
    //         let backState = Flip.getState(".featuredCard");
    //         if (filledBox.children[0]) {
    //             gallery?.appendChild(filledBox.children[0]);
    //         }
    //         Flip.to(backState, { duration: 0.5, scale: true, nested: true });
    //     })


    //     boxImage.forEach((card, id) => {


    //         card.querySelector(".btn").addEventListener("click", (event) => {
    //             let state = Flip.getState(".featuredCard");

    //             const currentCard = gallery.querySelector(`#card-${card.getAttribute("id")}`)
    //             console.log("currentCard", currentCard)


    //             function imageBig() {
    //                 if (card.parentElement === gallery || filledBox.children[0] === null) {
    //                     filledBox.appendChild(card);
    //                 }

    //                 if (!filledBox.children[0]) {
    //                     filledBox.appendChild(card);

    //                 }
    //                 Flip.from(state, { duration: 0.5, scale: true, nested: true });
    //             }

    //             imageBig();
    //         })

    //     })

    //     // if(isScreen){
    //     //     gsap.to(".featuredCard", {
    //     //         width: "100vw",
    //     //         height: "100vh",
    //     //         duration: 1
    //     //     })
    //     // }else{
    //     //     gsap.to(".featuredCard", {
    //     //         width: "80%",
    //     //         height: "450px",
    //     //         duration: 1
    //     //     })
    //     // }
    // }, [isOpenScreen])


    // useEffect(()=> {
    //     gsap.to("#projectArea",{
    //         scrollTrigger: {
    //           trigger: "#projectArea",
    //           pin: ".heading",
    //           scrub: 1, 
              
    //         },
    //       });
    // },[])


    useEffect(()=> {
        const fetchData = async ()=> {
            const res = await fetch("/data/featuredProjectData.json");
            const data = await res.json()

            setFeaturedData(data);
        }
        fetchData()
    },[])
    return (
        <div className="container mx-auto py-28 flex flex-col md:flex-row gap-8">
            <h2 className='text-5xl text-white font-bold heading pt-36'>Featured <br /> <span className='ml-10 text-[5rem] text-lightGreen'>Project</span></h2>


            {/* <div className={` w-full min-h-screen fixed top-0 left-0 bg-yellow-100 transition-all duration-500 border-t-[100px] border-dark-300 ${isOpenScreen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} flex gap-6 `}>
                <div className="container mx-auto">
                    <div className="projectModal"></div>
                    <div className=""></div>

                </div>
            </div> */}

            
            <div className="space-y-36 w-[75%]" id="projectArea">
                {featuredData && featuredData.map((item, idx)=> (
                <FeaturedCard isOpenScreen={isOpenScreen} setIsOpenScreen={setIsOpenScreen} item={item} id={idx} key={idx} />

                ))}


            </div>
        </div>
    )
}

export default FeaturedProject