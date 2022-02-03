import { SectionContainer } from "./SectionContainer"
import { SectionHeader } from "./SectionHeader"

interface Props {
  header: string
  skills: {
    name: string
    keywords: string[]
  }[]
}

export function SkillsSection({ header, skills }: Props) {
  return (
    <SectionContainer>
      <SectionHeader>{header}</SectionHeader>
      <table>
        {skills.map((skill, index) => {
          return (
            <tr key={`skills-item-${index}`}>
              <td>
                <div className="py-4 print:py-2">
                  <p className="text-sm font-bold w-32">{skill.name}</p>
                </div>
              </td>
              <td className="px-4">
                <p className="text-sm text-gray-800">
                  {skill.keywords.join(" / ")}
                </p>
              </td>
            </tr>
          )
        })}
      </table>
    </SectionContainer>
  )
}
