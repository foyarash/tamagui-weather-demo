export const getDayName = (date: Date) => {
  // Get day names in french from the date using an array
  const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  return dayNames[date.getDay()];
};
