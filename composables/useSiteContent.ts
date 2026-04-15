import { siteContent } from '~/data/site-content'
import type { ServiceTime, SiteContent } from '~/types/content'

export type DataStatus = 'loading' | 'ready' | 'error'

export type DataState<T> = {
    status: DataStatus
    data: T
    errorMessage?: string
}

const clone = <T>(value: T): T => {
    return JSON.parse(JSON.stringify(value)) as T
}

export const useSiteContent = () => {
    const getContent = (): SiteContent => clone(siteContent)

    const getServiceTimesState = (): DataState<ServiceTime[]> => {
        return {
            status: 'ready',
            data: clone(siteContent.home.serviceTimes)
        }
    }

    return {
        getContent,
        getServiceTimesState
    }
}
