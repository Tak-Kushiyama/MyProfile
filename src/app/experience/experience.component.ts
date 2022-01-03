import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/httpClient.service'


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
        this.experiences = data;
      },
      (err) => {
        console.log("ERROR");
      }
    )
  }

}
