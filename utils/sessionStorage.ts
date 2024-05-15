export function getSessionItem(key: string) {
  return sessionStorage.getItem(key) ?? ''
}

export function setSessionItem(key: string, value: string) {
  sessionStorage.setItem(key, value)
}
