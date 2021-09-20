import { heroes } from "../data/heroes";

const publishersEnabled = ['DC Comics', 'Marvel Comics']

export const getHeroesByPublisher = (publisher) => {

  if(!publishersEnabled.includes(publisher)) throw new Error('The publisher does not exists');

  return heroes.filter((heroe) => heroe.publisher === publisher);

}