import { getDayOfTheWeek } from './getDayOfTheWeek';

export function getRandomDayOfTheWeek() {
  const dayNumber = Math.floor(Math.random() * 6);
  getDayOfTheWeek(dayNumber);
}
