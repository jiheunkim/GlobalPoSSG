import { AxiosResponse } from 'axios'

import { EditResponse } from '../../interfaces/Interfaces'
import { possgAxios } from '../axiosInstance'

export const postEditInfo = async (
  token: string,
  nickname: string,
  job: string,
): Promise<AxiosResponse<EditResponse> | null> => {
  console.log('Request data:', { nickname, job })
  const response = await possgAxios.post(
    'members/edit',
    { nickname, job },
    { headers: { Authorization: `Bearer ${token}` } },
  )
  console.log('Request data:', { nickname, job })
  return response
}
