import type { CatchData } from '~/types/catchTypes'

export async function usePostCatch(url: string, body: any) {
  const config = useRuntimeConfig()
  const { data, error } = await useFetch<CatchData>(url, {
    baseURL: config.public.baseURL + '/catches',
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
  const config = useRuntimeConfig()
  const { data, error } = await useFetch<CatchData[]>(url, {
    baseURL: config.public.baseURL + '/catches',
  })

  if (error.value) {
    showError({ message: 'Something went wrong', statusCode: 500 })
  }

  return data
}
