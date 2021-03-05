export function handleLongText(text: string, maxLength: number = 75) {
  return text ? (text.length > maxLength ? text.substr(0, maxLength) + " ..." : text) : "";
}
