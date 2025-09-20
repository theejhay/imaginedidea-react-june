import { useEffect, useState } from "react";

function HelloEffect() {
//useState 
  const [likes, setLikes] = useState(0);
  const [seconds, setSeconds] = useState(0);

//  UseEffect for Likes count
  useEffect(() => {
    if (likes >= 10) {
      console.log(`You now have  10+ likes`);
    } else {
      console.log(`Someone likes your post and you now have  ${likes} likes`);
    }
  }, [likes]);

  // UseEffect for Timers
  useEffect(()=>{
    const timer = setInterval(() => {
        setSeconds( s=> s + 1);
    }, 1000);

    // cleanup when component unmounts
    return () => clearInterval(timer);

  }, [])

  return (
    <>
      <div className="text-center">
        <span>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          ipsum a repudiandae eum quidem saepe? Eum quos autem sint commodi
          magni fugiat doloribus, iste odio reiciendis cumque quod nemo
          accusamus?≈
        </span>
        <p> Likes: {likes}</p>
        <button onClick={() => setLikes(likes + 1)}> 👍 Like </button>


        {/* Timers  */}
        <h3> Timer:  {seconds} seconds</h3>
      </div>
    </>
  );
}

export default HelloEffect;
