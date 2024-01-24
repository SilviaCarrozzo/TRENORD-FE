import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import CheckListService from 'src/app/_services/checkList.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  constructor(private checkListService: CheckListService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
}
