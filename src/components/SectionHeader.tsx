interface Props {
  children: string
}

export function SectionHeader({ children }: Props) {
  return <h2 className="text-xl print:text-lg font-bold py-2">{children}</h2>
}
