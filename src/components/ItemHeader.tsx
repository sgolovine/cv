interface Props {
  header: string
  headerRight?: string
  subheader?: string
}

export function ItemHeader({ header, headerRight, subheader }: Props) {
  return (
    <>
      <p>
        <span className="text-lg print:text-md font-bold">{header}</span>
        {headerRight && (
          <span className="text-sm text-gray-800 font-medium">
            {"- "}
            {headerRight}
          </span>
        )}
      </p>
      {subheader && (
        <p className="text-sm text-blue-700 font-bold">{subheader}</p>
      )}
    </>
  )
}
