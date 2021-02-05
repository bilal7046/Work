import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/Services/category.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {

  Data: any;
  constructor(private service: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.service.GetCategories(localStorage.getItem('token')).subscribe(response => {
      this.Data = response;

    },
      error => {
        alert(JSON.stringify(error));
      });
  }

  OpenCategoryForm() {
    return this.router.navigate(['category/new_category']);
  }

}
