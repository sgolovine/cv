import resumeData from "../resume.json";
import { formatDate, formatUrl } from "./helpers";

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
          {resumeData.basics.profiles.map((profile) => {
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
            );
          })}
        </td>
      </table>

      {/* Introduction */}
      <p className="print:text-sm">{resumeData.basics.summary}</p>

      <div className="py-4 print:py-2">
        {/* Skills */}
        <h2 className="text-xl print:text-lg font-bold">Skills</h2>
        <table>
          {resumeData.skills.map((skill) => {
            return (
              <tr>
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
            );
          })}
        </table>
      </div>

      <div className="py-4 print:py-2">
        {/* Work */}
        <h2 className="text-xl print:text-lg font-bold py-2">Work</h2>
        {resumeData.work.map((item) => (
          <div>
            <p>
              <span className="text-lg print:text-md font-bold">
                {item.position}
              </span>{" "}
              -{" "}
              <span className="text-sm text-gray-800 font-medium">
                {item.name}
              </span>
            </p>
            <p className="text-sm text-blue-700 font-bold">
              {formatDate(item.startDate)} -{" "}
              {item.current ? "Present" : formatDate(item.endDate)}
            </p>
            {/* <p>{item.summary}</p> */}
            <ul className="px-6 py-4">
              {item.highlights.map((highlight) => {
                return (
                  <li className="list-disc pb-2 print:pb-0 text-sm text-gray-800 avoid-break-inside">
                    {highlight}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="py-4 print:py-2">
        {/* Projects */}
        <h2 className="text-xl print:text-lg font-bold py-2">Side Projects</h2>
        {resumeData.projects.map((item) => {
          return (
            <div>
              <p className="text-lg print:text-md font-bold">{item.name}</p>
              <p className="text-sm text-blue-700 font-bold">
                {formatDate(item.startDate)} -{" "}
                {item.current ? "Present" : formatDate(item.endDate)}
              </p>
              <p className="print:text-sm">{item.description}</p>
              <ul className="px-6 py-4">
                {item.highlights.map((highlight) => {
                  return (
                    <li className="list-disc pb-2 print:pb-0 text-sm text-gray-800">
                      {highlight}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="py-4 print:py-2">
        {/* Education */}
        <h2 className="text-xl print:text-lg font-bold py-2">Education</h2>
        {resumeData.education.map((item) => {
          return (
            <div>
              <p>
                <span className="text-lg print:text-md font-bold">
                  {item.institution}
                </span>{" "}
                -{" "}
                <span className="text-sm text-gray-800 font-medium">
                  {item.studyType} in {item.area}
                </span>
              </p>
              <p className="text-sm text-blue-700 font-bold">
                Graduated {formatDate(item.endDate)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
