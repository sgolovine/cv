import resumeData from "../resume.json";
export function App() {
  return (
    <div className="max-w-2xl p-4">
      {/* Header */}
      <h1 className="text-2xl font-bold">{resumeData.basics.name}</h1>
      <table className="my-2">
        {resumeData.basics.profiles.map((profile) => {
          return (
            <tr>
              <td className="pr-2">
                <p className="text-sm font-bold">{profile.network}</p>
              </td>
              <td>
                <a className="text-blue-600 hover:underline" href={profile.url}>
                  {profile.username}
                </a>
              </td>
            </tr>
          );
        })}
      </table>

      {/* Introduction */}
      <p>{resumeData.basics.summary}</p>

      <div className="py-4">
        {/* Skills */}
        <h2 className="text-xl font-bold">Skills</h2>
        <table>
          {resumeData.skills.map((skill) => {
            return (
              <tr>
                <td>
                  <div className="py-4">
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

      <div className="py-4">
        {/* Work */}
        <h2 className="text-xl font-bold">Work</h2>
        {resumeData.work.map((item) => (
          <div>
            <p>
              <span className="text-lg font-bold">{item.position}</span> -{" "}
              <span className="text-sm text-gray-800 font-medium">
                {item.name}
              </span>
            </p>
            <p>{item.summary}</p>
            <ul className="px-6 py-4">
              {item.highlights.map((highlight) => {
                return (
                  <li className="list-disc pb-2 text-sm text-gray-800">
                    {highlight}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
