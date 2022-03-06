// import logo from './logo.svg';
import './App.css';
import Piles from './Piles';
import {Welcome} from './welcome';
import {Message} from './Message'
import {Counter} from './Counter'
import {EventBinders} from './EventBinders'
import {Button} from './Button'



function App() {
  return (
    <div className="App">

      {/* <Piles came="name: Kolawole" herName="gold"/> */}
      
      {/* <Welcome came="name: Oke Kolawole sunday" herName="golder" /> */}
      {/* <Message /> */}
      {/* <br /> */}
      {/* <Counter /> */}
      {/* <EventBinders /> */}
      <div className='Body'>
        <div className="div1">
                <br/>
                
              <Button content="Default" variant="outline"/>
              <br/>
              <Button content="Default" variant="red" />

              <br/>
              <Button content="Default" variant="green"/>
              <br/>
              <Button content="Default" variant="blue"/>
              <br/>
              <Button content="Disabled" variant="disabled"/>
              <br/>
              <Button content="Disabled" variant="disabled2"/>
              <br/>
              <Button content="Default" variant="default"/>
              

              <br/>
              <Button content="Default" variant="hover"/>

              <br/>

              <Button content="golds" variant="gold"/>
          </div>
        <div className="div2">
              <br/>
            {/* <Button content="Default" variant="outline"/> */}
            <br/>
            {/* <Button content="Default" variant="red" /> */}
            <br/>
            <br />
            <br/>
            <br />
            <br/>
            <Button content="Default" variant="green"/>
            <br/>
            <Button content="Default" variant="blue"/>
            <br/>
            <Button content="Disabled" variant="disabled"/>
            <br/>
            <Button content="Disabled" variant="disabled2"/>
            <br/>
            <Button content="Default" variant="default"/>
            

            <br/>
            <Button content="Default" variant="hover"/>

            <br/>

            <Button content="golds" variant="gold"/>
            </div>

            <div className="div2">
              <br/>
            <Button content="Default" variant="outline"/>
            <br/>
            <Button content="Default" variant="red" />

            <br/>
            <Button content="Default" variant="green"/>
            <br/>
            <Button content="Default" variant="blue"/>
            <br/>
            <Button content="Disabled" variant="disabled"/>
            <br/>
            <Button content="Disabled" variant="disabled2"/>
            <br/>
            <Button content="Default" variant="default"/>
            

            <br/>
            <Button content="Default" variant="hover"/>

            <br/>

            <Button content="golds" variant="gold"/>
            </div>
        </div>


    </div>
  );
}

export default App;
