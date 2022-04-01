import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { HomeComponent } from './home/home.component';
import { Comp1Component } from './comp1/comp1.component';
import { TestdirectiveDirective } from './appdirective/testdirective.directive';
import { ProductComponent } from './product/product.component';
import { DropdownDirective } from './appdirective/dropdown.directive';
import { PipeComponent } from './pipe/pipe.component';
import { waterpipe } from './apppipes/water.pipe';
import { FilterPipe } from './apppipes/filter.pipe';
import { FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ShreehariproductsService } from './appservices/shreehariproducts.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ManageUserComponent } from './manage-user/manage-user.component';

const approutes:Routes=[
  {path:'',component:ParentComponent},
  {path:'child',component:ChildComponent},
  {path:'table',component:TableComponent},
  {path:'parent2',component:Parent2Component},
  {path:'child2',component:Child2Component},
  {path:'home',component:HomeComponent},
  {path:'comp1',component:Comp1Component},
  {path:'product',component:ProductComponent},
  {path:'pipe',component:PipeComponent},
  {path:'form',component:FormComponent},
  {path:'form2',component:Form2Component},
  {path:'form3',component:Form3Component},
  {path:'manage-products',component:ManageProductsComponent},
  {path:'manage-user',component:ManageUserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TableComponent,
    Parent2Component,
    Child2Component,
    HomeComponent,
    Comp1Component,
    TestdirectiveDirective,
    ProductComponent,
    DropdownDirective,
    PipeComponent,
    waterpipe,
    FilterPipe,
    FormComponent,
    Form2Component,
    Form3Component,
    ManageProductsComponent,
    ManageUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ShreehariproductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
