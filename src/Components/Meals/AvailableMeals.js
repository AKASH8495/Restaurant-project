import Card from '../UI/Card';
import classes from './Available.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Palak Paneer',
    description: ' A classic vegetarian dish',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Masala Dosa',
    description: ' A popular South Indian dish',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Butter Chicken',
    description: 'A popular North Indian dish',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Chole Bhature',
    description: ' A popular Punjabi dish',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  let mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  return (
    <section className={classes.meals}>
      <Card>
        {mealsList}
      </Card>

    </section>
  );
};

export default AvailableMeals;
