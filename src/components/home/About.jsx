// function About() {

//     // useEffect(() => {
//     //     gsap.to("#aboutContent", {
//     //         scrollTrigger: {
//     //             trigger: "#aboutContent",
//     //             pin: ".about-title",
//     //             scrub: 1,

//     //         },
//     //     });
//     // }, [])

//     return (
//         <div className="container mx-auto py-28 flex flex-col md:flex-row gap-8" >
//             <h2 className='text-5xl text-white font-bold about-title pt-36'>Behind the<br /> <span className='ml-10 text-[5rem] text-lightGreen'>  Code</span></h2>
//             <div className="space-y-36 w-[75%] text-white" id="aboutContent" >
//                 <div className='space-y-6'>
//                     <h3 className="font-bold text-4xl underline uppercase mb-16 text-right">Core values and Beliefs</h3>

//                     <ul className='space-y-8 text-xl'>
//                         <li className="px-8 py-12 bg-dark-300 rounded">
//                             <b className='text-2xl'>Respect for differences:</b>
//                             <p>I value diversity in thought, culture, and perspective within the tech community. This fosters an environment where various ideas and backgrounds are appreciated and respected.</p>
//                         </li>
//                         <li className="px-8 py-12 bg-dark-300 rounded">
//                             <b className='text-2xl'>Responsibility and Accountability:</b>
//                             <p>taking responsibility for the impact of my work is a core principle. I ensure that my contributions meet ethical standards, and I hold myself accountable for the quality and reliability of the software I develop.</p>
//                         </li>
//                         <li className="px-8 py-12 bg-dark-300 rounded">
//                             <b className='text-2xl'>Creating Useful Solutions:</b>
//                             <p>my long-term goal is to leverage my technical skills to contribute meaningfully to Islamic website and software projects.</p>
//                         </li>
//                         <li className="px-8 py-12 bg-dark-300 rounded">
//                             <b className='text-2xl'>Community Contribution:</b>
//                             <p>my goal is to contribute to the Muslim community by using my skills to create educational apps and tools that address specific needs. This aligns with my commitment to making a positive impact through technology.</p>
//                         </li>
//                         <li className="px-8 py-12 bg-dark-300 rounded">
//                             <b className='text-2xl'>Collaboration and Open Source:</b>
//                             <p>I actively support collaboration within the tech community and believe in contributing to open-source projects. Sharing knowledge and resources is important for collective growth and innovation.</p>
//                         </li>
//                         <li className="px-8 py-12 bg-dark-300 rounded">
//                             <b className='text-2xl'>Continuous Learning:</b>
//                             <p>I have a passion for continuous learning. Whether it’s enhancing my technical skills or deepening my understanding of Islam, I believe that ongoing learning is essential for personal and professional growth.</p>
//                         </li>
//                         <li className="px-8 py-12 bg-dark-300 rounded">
//                             <b className='text-2xl'>Islamic Values:</b>
//                             <p>I prioritize following good behavior and morals based on Islamic teachings in my work. It’s crucial for me to ensure that the technology I contribute to has a positive impact on users and the community, aligning with ethical standards.</p>
//                         </li>
//                         <li className="px-8 py-12 bg-dark-300 rounded">
//                             <b className='text-2xl'>Balancing Work and Faith:</b>
//                             <p>Finding a balance between professional endeavors and spiritual growth is important to me. Success, in my view, involves not only achieving professional milestones but also making a positive impact on others and growing spiritually.</p>
//                         </li>
//                     </ul>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default About

"use client";
import { ReactLenis } from "lenis/react";
export default function About() {
  return (
    // <ReactLenis root>
    // </ReactLenis>
    <main className="">
      <section className="text-white   w-full   ">
        <div className="flex justify-between px-16">
          <div className="grid gap-2">
            <figure className="sticky top-0 h-screen grid place-content-center ">
              <article className="bg-green-500 h-72 w-[30rem] rounded-lg rotate-6 p-4 grid place-content-center gap-4">
                <h1 className="text-2xl font-semibold">
                  Respect for differences:
                </h1>
                <p>
                  I value diversity in thought, culture, and perspective within
                  the tech community. This fosters an environment where various
                  ideas and backgrounds are appreciated and respected.
                </p>
              </article>
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <article className="bg-red-400 h-72 w-[30rem] rounded-lg p-4 grid place-content-center gap-4">
                <h1 className="text-2xl font-semibold">
                  Responsibility and Accountability:
                </h1>
                <p>
                  taking responsibility for the impact of my work is a core
                  principle. I ensure that my contributions meet ethical
                  standards, and I hold myself accountable for the quality and
                  reliability of the software I develop.
                </p>
              </article>
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <article className="bg-orange-400 h-72 w-[30rem] p-4 rounded-lg -rotate-6 grid place-content-center gap-4">
                <h1 className="text-2xl font-semibold">
                  Creating Useful Solutions:
                </h1>
                <p>
                  my long-term goal is to leverage my technical skills to
                  contribute meaningfully to Islamic website and software
                  projects.
                </p>
              </article>
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <article className="bg-blue-400 h-72 w-[30rem] p-4 rounded-lg grid place-content-center gap-4">
                <h1 className="text-2xl font-semibold">
                  Community Contribution:
                </h1>
                <p>
                  my goal is to contribute to the Muslim community by using my
                  skills to create educational apps and tools that address
                  specific needs. This aligns with my commitment to making a
                  positive impact through technology.
                </p>
              </article>
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <article className="bg-gray-400 h-72 w-[30rem] p-4 rounded-lg grid rotate-6 place-content-center gap-4">
                <h1 className="text-2xl font-semibold">Continuous Learning:</h1>
                <p>
                  I have a passion for continuous learning. Whether it’s
                  enhancing my technical skills or deepening my understanding of
                  Islam, I believe that ongoing learning is essential for
                  personal and professional growth.
                </p>
              </article>
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <article className="bg-yellow-400 h-72 w-[30rem] p-4 rounded-lg grid place-content-center gap-4">
                <h1 className="text-2xl font-semibold">Islamic Values:</h1>
                <p>
                  I prioritize following good behavior and morals based on
                  Islamic teachings in my work. It’s crucial for me to ensure
                  that the technology I contribute to has a positive impact on
                  users and the community, aligning with ethical standards.
                </p>
              </article>
            </figure>
            <figure className="sticky top-0 h-screen grid place-content-center">
              <article className="bg-green-400 h-72 w-[30rem] p-4 rounded-lg grid -rotate-6 place-content-center gap-4">
                <h1 className="text-2xl font-semibold">
                  Balancing Work and Faith:
                </h1>
                <p>
                  Finding a balance between professional endeavors and spiritual
                  growth is important to me. Success, in my view, involves not
                  only achieving professional milestones but also making a
                  positive impact on others and growing spiritually.
                </p>
              </article>
            </figure>
          </div>
          <div className="sticky top-0 h-screen grid place-content-center mr-36">
            <h2 className="text-5xl text-white font-bold about-title pt-20">
              Behind the
              <br />{" "}
              <span className="ml-10 text-[5rem] text-lightGreen"> Code</span>
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}
