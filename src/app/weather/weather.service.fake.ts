import { Observable, of } from 'rxjs'

import { ICurrentWeather } from '../interfaces'
import { Coordinates, IWeatherService } from './weather.service'

export const fakeWeather: ICurrentWeather = {
  city: 'Shanghai',
  country: 'CN',
  date: 1485789600,
  image: '',
  temperature: 280.32,
  description: 'light intensity drizzle',
}
export class WeatherServiceFake implements IWeatherService {
  getCurrentWeatherByCoords(coords: Coordinates): Observable<ICurrentWeather> {
    throw new Error('Method not implemented.')
  }
  public getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(fakeWeather)
  }
}
