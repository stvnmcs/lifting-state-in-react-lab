const IngredientList = ({ availableIngredients, addToBurger }) => {
    return (
      <ul>
        {availableIngredients.map((availableIngredient, index) => (
          <li
            key={index}
            style={{ backgroundColor: `${availableIngredient.color}` }}
          >
            {availableIngredient.name}
            <button
              onClick={function () {
                addToBurger(availableIngredient);
              }}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    );
};

export default IngredientList;