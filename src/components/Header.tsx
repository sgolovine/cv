import { formatUrl } from "../helpers"

interface Props {
  name: string
  url: string
  email: string
  phone: string
  profiles: {
    network: string
    url: string
  }[]
}

export function Header({ name, url, email, phone, profiles }: Props) {
  return (
    <>
      <h1 className="text-2xl print:text-xl font-bold">{name}</h1>
      <table className="my-2">
        <td className="pr-6">
          <tr>
            <td className="pr-2">
              <p className="text-sm font-bold">Website</p>
            </td>
            <td>
              <a
                className="text-sm text-blue-600 font-bold hover:underline"
                href={url}
              >
                {formatUrl(url)}
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
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </td>
          </tr>
          <tr>
            <td className="pr-2">
              <p className="text-sm font-bold">Phone</p>
            </td>
            <td>
              <a
                href={`tel:${phone}`}
                className="text-sm text-blue-600 font-bold hover:underline"
              >
                {phone}
              </a>
            </td>
          </tr>
        </td>
        <td className="pl-6">
          {profiles.map(profile => {
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
    </>
  )
}
