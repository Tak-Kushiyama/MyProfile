import { Component, OnInit } from '@angular/core'
import { HttpService } from '../service/httpClient.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  coreSkills : any
  otherSkills : any

  constructor(private httpClientService : HttpService) { }

  ngOnInit(): void {
    this.coreSkills = this.httpClientService.getDataFromServer('core-skill')

    const coreSkillObservable = this.httpClientService.getDataFromServer('core-skill')

    coreSkillObservable.subscribe(
      (data) => {
        this.coreSkills = data;
      },
      (err) => {
        console.log("ERROR");
      }
    )
  

    this.otherSkills = this.httpClientService.getDataFromServer('other-skill')

    const otherSkillObservable = this.httpClientService.getDataFromServer('other-skill')

    otherSkillObservable.subscribe(
      (data) => {
        this.otherSkills = data;
      },
      (err) => {
        console.log("ERROR");
      }
    )
  }

}
