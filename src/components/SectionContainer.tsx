import { FunctionComponent } from "preact"

export const SectionContainer: FunctionComponent = ({ children }) => {
  return <div className="py-4 print:py-2">{children}</div>
}
