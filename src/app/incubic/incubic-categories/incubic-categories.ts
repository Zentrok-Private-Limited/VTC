import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { INCUBIC_CATEGORIES } from '../incubic.data'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incubic-categories',
  imports: [RouterModule,CommonModule],
  templateUrl: './incubic-categories.html',
  styleUrl: './incubic-categories.css',
})
export class IncubicCategories {
categories = INCUBIC_CATEGORIES;
}
