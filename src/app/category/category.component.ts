import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { strict } from 'assert';
import { CategoryService } from 'src/Services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private service: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }
  Save(data) {
    console.warn(data);
    this.service.Save(localStorage.getItem('token'), data).subscribe(
      response => {
        if (response.status === 'success') {
this.router.navigate(['category/categories']);
        }
      },
      error => {
        if (error.status === 400) {
          alert('server error!');
        }
      });
  }
}
