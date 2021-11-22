import React from 'react';
import Ronaldo from './Fudbalis/Ronaldo';
import Messi from './Fudbalis/Messi';
import Benzema from './Fudbalis/Benzema';
import './App.css';


function App() {
  return (
    <div className="App">
      <Ronaldo surname={"Cristiano"} firstnami={"Ronaldo"} age={36} email={"CR@gmail.com"} phone={'+998 99 005-75-39'} name={"Ronaldo"} img={'https://c8.alamy.com/comp/TCFKWN/cristiano-ronaldo-portugal-TCFKWN.jpg'}/>
      <Messi fam='Lionel' ism='Messi' yosh='33' pochta='LM@gmail.com' tel='+998 90 314-56-56' rasim={'https://www.trollfootball.me/upload/full/2018/05/17/argentinas-russia-2018-world-cup-qualifiers-look-at-these-crazy-stats-absurd.jpg'}/>
      <Benzema f='Karim' i='Benzema' y='33' e='KB@gmail.com' t='+998 91 629-54-55' r={'https://upload.wikimedia.org/wikipedia/ru/9/98/Real_Madrid.png'}/>
    </div>
  );
}

export default App;
