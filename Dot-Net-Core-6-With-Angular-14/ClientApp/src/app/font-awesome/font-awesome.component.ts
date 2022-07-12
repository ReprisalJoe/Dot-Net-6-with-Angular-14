import { Component, OnInit } from '@angular/core';
import { faGalacticRepublic } from '@fortawesome/free-brands-svg-icons';
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons';
import { faBroom } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-font-awesome',
  templateUrl: './font-awesome.component.html',
  styleUrls: ['./font-awesome.component.scss']
})
export class FontAwesomeComponent implements OnInit {

  faGalacticRepublic = faGalacticRepublic;
  faMoneyBill1 = faMoneyBill1;
  faBroom = faBroom;


  constructor() { }

  ngOnInit(): void {
  }

}
