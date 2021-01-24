

  
  // let addComp = {
  //   mounted(){
  //       console.log('addjs mounted')
  //   },
  //   template: '<p>PlanPickerComponent</p>',
  //   data() {
  //     return {
  //       plans: ['The Single', 'The Curious', 'The Addict']
  //     }
  //   }
  // }
  
  const studentDB = localforage.createInstance({
    name        : 'studenstList',
    storeName   : 'students',
});
  
  new Vue({
    el: '#app',
    // data:{
    //     name1:'sreeram',
    //     name:'',
    //     studentName:'',
    //     stuName:'',
    // },
    components: {
      'list-view': listView
    },
    template:
            `<div>
                <list-view ></list-view>
            </div>`

  });

let studentInfo  ={'id':0,'name':'Sreeram','joindate':'2019-01-01','amount':'4000','totalclasses':'16','currentClasses':'0'};
studentDB.setItem('details',JSON.stringify([studentInfo]));




  window.addEventListener('load',()=>{
    registerSW();
});

async function registerSW(){
    if('serviceWorker' in navigator){
        try{
            await navigator.serviceWorker.register('./sw.js');
        }
        catch(e){
            console.log('Service registration failed: ',e);
        }
    }
};
