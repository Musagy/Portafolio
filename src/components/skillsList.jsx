import Image from 'next/image'

const TextCol = ({col, children}) => {
  const style = {color: col}
  return <span style={style} >{children}</span>
}
const LineCol = ({ col, nivel, children }) => {
  const style =({backgroundColor: col, borderRadius:"100px", width: nivel})
  return <div style={style} >{children}</div>
}

const SkillsList = ({json, nameList}) => {
  return (
    <div>
      <h2 className="text-3xl font-medium text-blueGray-700 dark:text-white
        ml-7 mt-7 mb-4
      ">
        {nameList}
      </h2>
      <div className="
        grid grid-cols-2 gap-10
        max-w-3xl w-full mx-auto
      ">

        {/* renderizado de tarjetas */}
        {
          json.map(skill =>{
            return(
              <div
              key={skill.index}
              className ="container-ani containerSkill
                flex flex-col gap-2
              bg-white drop-shadow-lg
                rounded-xl overflow-hidden
              ">
                <div className="content content-ani">
                  <div className="flex items-center gap-2">
                    <Image
                      src={skill.icon}
                      height={36}
                      width={36}
                      objectFit="contain"
                      alt={skill.name}
                    />
                    <h3 className="font-semibold text-2xl">
                      <TextCol col={skill.col1} >
                        {skill.name}
                      </TextCol>
                    </h3>
                  </div>
                </div>
                <p className="content content-ani">
                  <TextCol col={skill.col1} >
                    {skill.desc}
                  </TextCol>
                </p>
                <div className="container-line line-ani lineBG-ani">
                  <LineCol col={skill.col1} >
                    <div className="w-full h-3 rounded-full relative">
                      <div className="container-line level-ani line-ani">
                        <LineCol col={skill.col2} nivel={skill.level}>
                          <div className="h-3" />
                        </LineCol>
                      </div>
                    </div>
                  </LineCol>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default SkillsList
