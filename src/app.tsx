import resumeData from "../resume.json"
import { ItemHeader } from "./components/ItemHeader"
import { ItemList } from "./components/ItemList"
import { SectionContainer } from "./components/SectionContainer"
import { SectionHeader } from "./components/SectionHeader"
import { SkillsSection } from "./components/SkillsSection"
import { formatDate, formatDateRange, formatUrl } from "./helpers"

export function App() {
  return (
    <div className="max-w-2xl print:max-w-full print:p-0 p-4">
      {/* Header */}
      <h1 className="text-2xl print:text-xl font-bold">
        {resumeData.basics.name}
      </h1>
      <table className="my-2">
        <td className="pr-6">
          <tr>
            <td className="pr-2">
              <p className="text-sm font-bold">Website</p>
            </td>
            <td>
              <a
                className="text-sm text-blue-600 font-bold hover:underline"
                href={resumeData.basics.url}
              >
                {formatUrl(resumeData.basics.url)}
              </a>
            </td>
          </tr>
          <tr>
            <td className="pr-2">
              <p className="text-sm font-bold">Email</p>
            </td>
            <td>
              <a
                className="text-sm text-blue-600 font-bold hover:underline"
                href={`mailto:${resumeData.basics.url}`}
              >
                {resumeData.basics.email}
              </a>
            </td>
          </tr>
          <tr>
            <td className="pr-2">
              <p className="text-sm font-bold">Phone</p>
            </td>
            <td>
              <a
                href={`tel:${resumeData.basics.phone}`}
                className="text-sm text-blue-600 font-bold hover:underline"
              >
                {resumeData.basics.phone}
              </a>
            </td>
          </tr>
        </td>
        <td className="pl-6">
          {resumeData.basics.profiles.map(profile => {
            return (
              <tr>
                <td className="pr-2">
                  <p className="text-sm font-bold">{profile.network}</p>
                </td>
                <td>
                  <a
                    className="text-sm text-blue-600 font-bold hover:underline"
                    href={profile.url}
                  >
                    {formatUrl(profile.url)}
                  </a>
                </td>
              </tr>
            )
          })}
        </td>
      </table>

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
