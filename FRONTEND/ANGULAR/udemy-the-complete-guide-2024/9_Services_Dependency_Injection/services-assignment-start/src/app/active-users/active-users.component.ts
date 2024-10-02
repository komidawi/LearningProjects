import { Component, Input, OnInit } from '@angular/core'
import { UsersService } from '../services/users.service'

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[]

  constructor (private usersService: UsersService) {}

  ngOnInit () {
    this.users = this.usersService.activeUsers
  }

  onSetToInactive (id: number) {
    this.usersService.setToInactive(id)
  }
}
