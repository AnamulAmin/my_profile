
function About() {

    // useEffect(() => {
    //     gsap.to("#aboutContent", {
    //         scrollTrigger: {
    //             trigger: "#aboutContent",
    //             pin: ".about-title",
    //             scrub: 1,

    //         },
    //     });
    // }, [])

    return (
        <div className="container mx-auto py-28 flex flex-col md:flex-row gap-8" >
            <h2 className='text-5xl text-white font-bold about-title pt-36'>Behind the<br /> <span className='ml-10 text-[5rem] text-lightGreen'>  Code</span></h2>
            <div className="space-y-36 w-[75%] text-white" id="aboutContent" >
                <div className='space-y-6'>
                    <h3 className="font-bold text-4xl underline uppercase mb-16 text-right">Core values and Beliefs</h3>

                    <ul className='space-y-8 text-xl'>
                        <li className="px-8 py-12 bg-dark-300 rounded">
                            <b className='text-2xl'>Respect for differences:</b>
                            <p>I value diversity in thought, culture, and perspective within the tech community. This fosters an environment where various ideas and backgrounds are appreciated and respected.</p>
                        </li>
                        <li className="px-8 py-12 bg-dark-300 rounded">
                            <b className='text-2xl'>Responsibility and Accountability:</b>
                            <p>taking responsibility for the impact of my work is a core principle. I ensure that my contributions meet ethical standards, and I hold myself accountable for the quality and reliability of the software I develop.</p>
                        </li>
                        <li className="px-8 py-12 bg-dark-300 rounded">
                            <b className='text-2xl'>Creating Useful Solutions:</b>
                            <p>my long-term goal is to leverage my technical skills to contribute meaningfully to Islamic website and software projects.</p>
                        </li>
                        <li className="px-8 py-12 bg-dark-300 rounded">
                            <b className='text-2xl'>Community Contribution:</b>
                            <p>my goal is to contribute to the Muslim community by using my skills to create educational apps and tools that address specific needs. This aligns with my commitment to making a positive impact through technology.</p>
                        </li>
                        <li className="px-8 py-12 bg-dark-300 rounded">
                            <b className='text-2xl'>Collaboration and Open Source:</b>
                            <p>I actively support collaboration within the tech community and believe in contributing to open-source projects. Sharing knowledge and resources is important for collective growth and innovation.</p>
                        </li>
                        <li className="px-8 py-12 bg-dark-300 rounded">
                            <b className='text-2xl'>Continuous Learning:</b>
                            <p>I have a passion for continuous learning. Whether it’s enhancing my technical skills or deepening my understanding of Islam, I believe that ongoing learning is essential for personal and professional growth.</p>
                        </li>
                        <li className="px-8 py-12 bg-dark-300 rounded">
                            <b className='text-2xl'>Islamic Values:</b>
                            <p>I prioritize following good behavior and morals based on Islamic teachings in my work. It’s crucial for me to ensure that the technology I contribute to has a positive impact on users and the community, aligning with ethical standards.</p>
                        </li>
                        <li className="px-8 py-12 bg-dark-300 rounded">
                            <b className='text-2xl'>Balancing Work and Faith:</b>
                            <p>Finding a balance between professional endeavors and spiritual growth is important to me. Success, in my view, involves not only achieving professional milestones but also making a positive impact on others and growing spiritually.</p>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default About