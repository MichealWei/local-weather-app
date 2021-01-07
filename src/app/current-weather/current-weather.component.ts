import { Component, OnInit } from '@angular/core'

import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  // template: ` <p>current-weather works!</p> `,
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor(private weatherService: WeatherService) {
    this.current = {
      city: '',
      country: '',
      date: 0,
      image: '',
      temperature: 0,
      description: '',
    }
  }

  ngOnInit() {
    this.weatherService
      .getCurrentWeather('Shanghai', 'CN')
      .subscribe((data) => (this.current = data))
  }

  getOrdinal(date: number) {
    const n = new Date(date).getDate()
    return n > 0 // see the following interpretation
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : ''
  }
}

// interpret the above line
/* const getOrdinalNum = (number) => {
  let selector

  if (number <= 0) {
    selector = 4
  } else if ((number > 3 && number < 21) || number % 10 > 3) {
    selector = 0
  } else {
    selector = number % 10
  }

  return number + ['th', 'st', 'nd', 'rd', ''][selector]
}
 */
