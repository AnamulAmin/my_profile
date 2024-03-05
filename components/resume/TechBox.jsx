import TechCard from './TechCard'

function TechBox({skill}) {
  return (
    <div>
        <h3 className='text-3xl border-b-2 border-neutral mb-8 mt-12 font-bold'>{skill.category}</h3>
        {
          skill.skills && skill.skills.map((technology, idx)=> (
            <TechCard technology={technology} key={idx} />

          ))
        }
    </div>
  )
}

export default TechBox