import { Component, effect, signal,WritableSignal, Signal, computed} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Profile} from './profile/profile';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('counter');

  // count:number=0

  // handleCounter(val:string){
  //   if (val=='minus' && this.count>0) {
  //     this.count=this.count-1
  //   }else if (val=='plus') {
  //     this.count=this.count+1
  //   }else{
  //     this.count=0
  //   }
  // }

  /*---------------------------------------------------------------------------*/

  // EVENT in Angular
  // handleEvent(event:Event) {
  //   console.log("FUNCTION CALLED", event.type);
  //   console.log("FUNCTION CALLED", (event.target as Element).className);
  //   console.log("value",(event.target as HTMLInputElement).value);
  // }

  /*-----------------------------------------------------------------------------*/
  //Get and Set value
  // name=''
  // displayName="";
  // email='';
  // getName(event:Event){
  //   const name=(event.target as HTMLInputElement).value;
  //   this.name=name;
  // }
  // showName(){
  //   this.displayName=this.name;
  // }
  // setName(){
  //   this.name="Sri";
  // }
  // getEmail(val:string){
  //   console.log(val);
  //   this.email=val;
  // }
  // setEmail(){
  //   this.email="default@gmail.com";
  // }
  /*-------------------------------------------------------------*/
  // display=true;
  // toggleDiv=true;
  // hide(){
  //   this.display=false;
  // }
  // show(){
  //   this.display=true;
  // }
  // toggle(){
  //   this.display=!this.display;
  // }
  // toggleTwo(){
  //   this.toggleDiv=!this.toggleDiv;
  // }
  /*------------------------------------------------------------------------*/
  // color=1

  // handleColor(val:number){
  //   this.color=val
  // }
  // handleInput(event:Event){
  //   this.color=parseInt((event.target as HTMLInputElement).value)
  // }
/*----------------------------------------------------------------------------*/
// color='red'

// handleColor(val:string){
//   this.color=val
// }
// changeColor(event:Event){
//   this.color=(event.target as HTMLInputElement).value
// }
/*------------------------------------------------------------------------------------*/
// users=["Swetha", "Sri", "Ayinam", "Surya", "Kala"]
// students=[
//   {name:'Swetha', age:24, email:'swetha@gamil.com'},
//   {name:'Sri', age:24, email:'sari@gamil.com'},
//   {name:'Surya', age:24, email:'surya@gamil.com'},
//   {name:'Kala', age:24, email:'kala@gamil.com'},
// ]

// getName(name:string){
//   console.log(name);
// }
/*------------------------------------------------------------------------------------*/
// count=signal(10);
// x=20

// constructor(){
//   effect(()=>{
//     console.log(this.count());
//   })
// }

// updateValue(val:string){
  // this.count.set(this.count()+1)
  // this.x=this.x+1

//   if (val=='inc') {
//     this.count.set(this.count()+1)
//   }else {
//     this.count.set(this.count()-1)
//   }
// }
/*-----------------------------------------------------*/
// data:WritableSignal<number | string> /*To get the value of signal*/ =signal(10); //To have multiple data types of signal
// count:Signal<number> = computed(()=>20)
// updateSignal(){
//   this.data.set("Hello");
// }
/*-----------------------------------------------------------------------------------------------------------*/
// x=signal(10);
// y=signal(20);
// z=computed(()=>this.x()+this.y());

// showValue(){
//   console.log(this.z());
//   this.x.set(100)
//   console.log(this.z());
// }
/*-----------------------------------------------------------------------------------------------------------*/
// userName=signal('swetha');
// count=signal(0);
// displayHeading=false;

// constructor(){
//   effect(()=>{
//     if (this.count()==2) {
//       this.displayHeading=true;
//       setTimeout(() => {
//         this.displayHeading=false;
//       }, 2000);
//     }else{
//       this.displayHeading=false;
//     }
//   })
// }

// toggleValue(){
//   this.count.set(this.count()+1)
// }
/*-----------------------------------------------------------------------------------------------------------*/
// users=['Swetha', 'Sri', 'Ayinam', 'Surya', 'Kala','Sai', 'Mohan', 'Rao', 'AVR']
// users=[]
/*-----------------------------------------------------------------------------------------------------------*/
name=''
}
