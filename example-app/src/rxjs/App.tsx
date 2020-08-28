import React from 'react';
import {Observable} from 'rxjs';

const observable = new Observable(subscriber =>{
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() =>{
        subscriber.next(4);
        subscriber.complete();
    },1000);
})



function App() {
    console.log(" just before subscribe");
    observable.subscribe({
            next(x){console.log('got value'+ x);},
            error(error){console.log('got error'+ error);},
            complete(){console.log('done');}
    });

    console.log('just after subscribe');
    return (
        <div>
          
        </div>
    
    );
  }
  
  export default App;
  