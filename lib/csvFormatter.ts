export function formatCSV(text: string) {
  return text
    .split('\n')
    .filter(Boolean)
    .map(line => "")
    .join('\n');
}
