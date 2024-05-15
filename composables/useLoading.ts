export function useLoading() {
  const isLoading = ref(false)

  function toggleLoading() {
    isLoading.value = !isLoading.value
  }

  return {
    isLoading,
    toggleLoading,
  }
}
