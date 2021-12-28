export const getApiResource = async (url) => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      console.error('Could not fetch ', response.status)
      return false
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}