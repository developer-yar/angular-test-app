import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ErrorService } from '../../services/error.service';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-global-error',
  standalone: true,
  imports: [AsyncPipe, ErrorComponent],
  templateUrl: './global-error.component.html',
})
export class GlobalErrorComponent implements OnInit {
  constructor(public errorService: ErrorService) {}

  ngOnInit(): void {}
}
