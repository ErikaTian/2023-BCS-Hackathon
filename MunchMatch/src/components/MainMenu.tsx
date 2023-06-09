import Button from "./Button";
import "./MainMenu.css";
import image1 from '../tobs.jpg'
import image2 from '../image2.png'
import image3 from '../image3.png'
import { useState } from 'react';

// 1interface FullName {
//   2    firstName: string;
//   3    lastName: string;
//   4}
//   5function FunctionalComponent(props:FullName){
//   6    // props.firstName
//   7    // props.lastName
//   8}


function MainMenu() {

  // props.page

  const foodImages : string[] = []
  foodImages.push(image1);
  foodImages.push(image2);
  foodImages.push(image3);

  const [food, setFood] = useState(0);

  const foodHandlerLike = () => {
    // call to save api
    if (food < 11 && food >= 0)
      setFood(food+1);

  }

  const foodHandlerDislike = () => {
      setFood(food+1);
    
    
  }


  const css = "./MainMenu.css";

  //need to fix styling to space out
  //   add more filters
  //   implement button onCLick properly
  return (
    <div className="main">
      {/* <div className="heading">Munch Match</div> */}

      <div className="image">
      <img src={foodImages[food]} className="logo" alt="" />
      {/* <img src={foodImages[1]} className="logo" alt="" />
      <img src={foodImages[2]} className="logo" alt="" /> */}

      </div>

      Food: {food}
      <div className="like-button">
        <Button color="primary" onClick={foodHandlerLike} >
          Like
        </Button>
      </div>

      <div className="dislike-button">
        <Button color="primary" onClick={foodHandlerDislike}>
          Dislike
        </Button>
      </div>


    </div>
  );
}

export default MainMenu;
