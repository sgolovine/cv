interface Props {
  // Key namespace for list keys
  // So we don't get any name collisions
  keyNamespace: string
  data: string[]
}

export function ItemList({ data, keyNamespace = "default" }: Props) {
  return (
    <ul className="px-6 py-4">
      {data.map((item, index) => {
        const key = `item-${keyNamespace}-${index}`
        return (
          <li
            key={key}
            className="list-disc pb-2 print:pb-0 text-sm text-gray-800 avoid-break-inside"
          >
            {item}
          </li>
        )
      })}
    </ul>
  )
}
