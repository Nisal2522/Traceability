import { StopDetailDTO } from './StopDetailDTO'

export interface JourneyStopDTO {
  id: string
  stage: string
  location: string
  date: string
  icon: string
  color: string
  latlng: [number, number]
  details: StopDetailDTO[]
}
