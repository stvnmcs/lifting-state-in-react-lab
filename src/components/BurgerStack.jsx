const BurgerStack = ({ myBurgerToppings, removeFromBurger }) => {
    return (
      <div className ='burger-cards'>
      <ul>
        {myBurgerToppings.map((myBurgerTopping, index) => (
          <li
            key={index + myBurgerTopping}
            style={{ backgroundColor: `${myBurgerTopping.color}` }}
          >
            {myBurgerTopping.name}
  
            <button
              onClick={function () {
                removeFromBurger(myBurgerTopping, index);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      </div>
    );
};
  
export default BurgerStack;