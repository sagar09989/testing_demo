import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { user } from './user.model';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  @ViewChild('userform') userform:any;

  url = 'https://shree-hari-cbfa2-default-rtdb.firebaseio.com/user.json'
  users:any = [
    // {name:'pankaj',technology:'angular'},
    // {name:'manan',technology:'html,css'}
  ]
  fetching = false;
  editmode:boolean = false;
  edituserid:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchuser();
  }
  onadduser(userdata:user){
    if(this.userform.valid){
      if(this.editmode){
        // console.log('https://shree-hari-cbfa2-default-rtdb.firebaseio.com/user/'+this.edituserid+'.json');
        this.http.put('https://shree-hari-cbfa2-default-rtdb.firebaseio.com/user/'+this.edituserid+'.json',userdata).subscribe(
          (response) => {
            console.log(response);  
            this.fetchuser() 
          }
        )
      }else{
        console.log(userdata);
        this.users.push(userdata);
        this.http.post(this.url,userdata).subscribe(
          (response) => {
            console.log(response);   
          }
        )
      }
    }else{
        let key = Object.keys(this.userform.controls);
      }
  }
  
  fetchuser(){
    this.fetching = true;
    this.http.get<any>(this.url)
    .pipe(map(resdata=>{
      // console.log(resdata);
      const userarray:any = [];
      for(const key in resdata){
        // console.log(resdata[key]);
        if(resdata.hasOwnProperty(key)){
          userarray.push({userid:key, ...resdata[key]})
        }
      }
      return userarray
    }))
    .subscribe(users =>{
      // console.log(users);
      this.users = users;
      this.fetching = false;
    })   
  }

  ondeleteuser(userid:any){
    if(confirm ('do you want to delete this user ?')){
      
    // console.log(userid);
    this.http.delete('https://shree-hari-cbfa2-default-rtdb.firebaseio.com/user/'+userid+'.json')
    .subscribe(()=>{
      this.fetchuser()
    })
    }
  }

  onedituser(userid:any,index:any){
    this.editmode=true;
    console.log(userid);
    this.edituserid=userid
    
    // console.log(this.users[index]);
    this.userform.setValue({
      name:this.users[index].name,
      technology:this.users[index].technology
    })
    
  }

}
