import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/httpClient.service'

interface Experience {
  _id: String,
  date: String,
  companyName: String,
  title: String,
  role: String,
  description: String,
  workDetail1: String,
  workDetail2: String,
  workDetail3: String,
  workDetail4: String,
  workDetail5: String,
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent implements OnInit {

  experiences : any

  constructor(private httpClientService : HttpService) { }

  ngOnInit(): void {
    this.experiences = this.httpClientService.getDataFromServer('experience')

    const experienceObservable = this.httpClientService.getDataFromServer('experience')

    experienceObservable.subscribe(
      (data) => {
        const experienceData : [Experience] = data
        experienceData.sort(this.sortById)
        this.experiences = experienceData;
      },
      (err) => {
        console.log("ERROR");
      }
    )
  }

  sortById(a: Experience, b: Experience) {
    let id1 = a._id
    let id2 = b._id
    return a._id > b._id ? 1 : -1
  }

}
