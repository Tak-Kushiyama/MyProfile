import { Component, OnInit } from '@angular/core'
import { HttpService } from '../service/httpClient.service'

interface Skill {
  _id: String,
  skillName: String,
}

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
        const coreSkillData : [Skill] = data
        coreSkillData.sort(this.sortById)
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
        const otherSkillData : [Skill] = data
        otherSkillData.sort(this.sortById)
        this.otherSkills = data;
      },
      (err) => {
        console.log("ERROR");
      }
    )
  }

  sortById(a: Skill, b: Skill) {
    let id1 = a._id
    let id2 = b._id
    return a._id > b._id ? 1 : -1
  }

}
