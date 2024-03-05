import { useEffect, useState } from "react";
import TechBox from "./TechBox";

function Skills() {
    const [mySkills, setMySkills] = useState();

    // useEffect(() => {
    //     // gsap.to({
    //     //     scrollTrigger: {
    //     //         trigger: "#skillContent",
    //     //         pin: ".skill-title",
    //     //         scrub: 1,
    //     //         start: "top top",

    //     //     },
    //     // });

    //     ScrollTrigger.create({
    //         trigger: "#skillContent",
    //         pin: ".skill-title",
    //         scrub: 1,
    //         start: "top bottom",
    //     })
    // }, [])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data/technicalData.json");
            const techSkills = await res.json();
            setMySkills(techSkills)
            console.log(techSkills)

        }
        fetchData();
    }, [])
    return (
        <div className="flex flex-col md:flex-row gap-6 container mx-auto py-16">
            <div className="text-center skill-title text-white w-[30%] px-3 pt-28">
                <h2 className='text-3xl text-white font-bold   mb-6'>Technical <span className=' text-lightGreen'>   Abilities:</span></h2>

                <p className="text-xl">Enthusiastic MERN stack developer with a focus on simplicity and user-centric design. Proficient in React.js, Node.js, and MongoDB. Familiar with Git, npm. Eager to learn and contribute to innovative projects.</p>

            </div>

            <div className="space-y-36 w-[75%]" id="skillContent">
                <div className="w-full rounded-lg text-neutral bg-white p-10 grid grid-cols-1 md:grid-cols-2 gap-16">
                    {
                        mySkills && mySkills.map((skill, idx) => (
                            <TechBox skill={skill} key={idx} />

                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Skills