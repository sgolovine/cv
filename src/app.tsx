// import resumeData from "../resume.json"
import resumeData from "@data/resume.json"
import {
  Header,
  ItemHeader,
  ItemList,
  SectionContainer,
  SectionHeader,
  SkillsSection,
} from "~/components"
import { formatDate, formatDateRange } from "~/helpers"

export function App() {
  return (
    <div className="max-w-2xl print:max-w-full print:p-0 p-4">
      {/* Header */}
      <Header
        name={resumeData.basics.name}
        url={resumeData.basics.url}
        email={resumeData.basics.email}
        phone={resumeData.basics.phone}
        profiles={resumeData.basics.profiles}
      />

      {/* Introduction */}
      <p className="print:text-sm">{resumeData.basics.summary}</p>

      <SkillsSection header="Skills" skills={resumeData.skills} />

      {/* Work */}
      <SectionContainer>
        <SectionHeader>Work</SectionHeader>
        {resumeData.work.map(item => (
          <>
            <ItemHeader
              header={item.position}
              headerRight={item.name}
              subheader={formatDateRange(
                item.startDate,
                item.endDate,
                item.current
              )}
            />
            <ItemList data={item.highlights} keyNamespace="work" />
          </>
        ))}
      </SectionContainer>

      {/* Projects */}
      <SectionContainer>
        <SectionHeader>Side Projects</SectionHeader>
        {resumeData.projects.map(item => {
          return (
            <>
              <ItemHeader
                header={item.name}
                subheader={formatDateRange(
                  item.startDate,
                  item.endDate,
                  item.current
                )}
              />
              <p className="print:text-sm">{item.description}</p>
              <ItemList data={item.highlights} keyNamespace="side-projects" />
            </>
          )
        })}
      </SectionContainer>

      {/* Education */}
      <SectionContainer>
        <SectionHeader>Education</SectionHeader>
        {resumeData.education.map(item => {
          return (
            <ItemHeader
              header={item.institution}
              headerRight={`${item.studyType} in ${item.area}`}
              subheader={`Graduated ${formatDate(item.endDate)}`}
            />
          )
        })}
      </SectionContainer>
    </div>
  )
}
