import { CatchData } from '~/types/catchTypes'

export async function usePostCatch(url: string, body: any) {
  const { baseURL } = useRuntimeConfig()
  const { data, error } = await useFetch<CatchData>(url, {
    baseURL: baseURL + '/catches',
    // @ts-ignore
    method: 'POST',
    body,
  })

  if (error.value) {
    showError({ message: 'Something went wrong', statusCode: 500 })
  }

  return data
}

export async function useGetCatches(url: string) {
  const { baseURL } = useRuntimeConfig()
  const { data, error } = await useFetch<CatchData[]>(url, {
    baseURL: baseURL + '/catches',
  })

  if (error.value) {
    showError({ message: 'Something went wrong', statusCode: 500 })
  }

  return data
}
