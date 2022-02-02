import dayjs from "dayjs";

export function formatDate(dateString?: string) {
  if (!dateString) {
    return "";
  }
  const formattedDate = dayjs(dateString).format("MMM YYYY");
  return formattedDate;
}

export function formatUrl(url: string) {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("mailto:", "");
}
