import Background from "./Components/Background/Background";
import Hero from "./Components/Hero/Hero";
import { useState ,useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playstatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000);
  },[]);

  return (
    <div>
      <Background playstatus={playstatus} heroCount={heroCount} />
      <Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playstatus={playstatus}
      />
    </div>
  );
};

export default App;
