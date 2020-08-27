import React from 'react';
import {Card,StyledH1} from './PropsExampleFunctionComponent';
import {Text} from './PropsExampleClassComponent';

function App() {
    return (
        <div>
            <Card title="Welcome!" paragraph="To this example" >
                    <h1>Hello</h1>
                    <h2>My Name IS ALI</h2>
                    <StyledH1 style={{ fontSize: 100 }} color='pink'> Hasan Ali Yuzgec</StyledH1>
            </Card>
            <Text color="blue" style={{ fontSize: 50 }}>
                   <h1>Hello</h1>
                   <h1>Hello</h1>
            </Text>
        </div>
    
    );
  }
  
  export default App;
  