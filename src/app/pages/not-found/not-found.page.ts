import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';

@Component({
  standalone: true,
  selector: 'not-found-app',
  templateUrl: './not-found.page.html',
  providers: [],
  imports: [TitleComponent, NotFoundComponent],
})
export class NotFoundPage {}
