import {
  Switch,
  Route,
} from "react-router-dom";

import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { DcScreen } from '../components/Dc/DcScreen';
import { Navbar } from '../components/UI/NavBar';
import { HeroScreen } from "../components/Heroes/HeroScreen";
import { SearchScreen } from './../components/search/SearchScreen';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/dc" component={DcScreen} />
        <Route exact path="/marvel" component={MarvelScreen} />
        <Route exact path="/hero/:id" component={HeroScreen} />
        <Route exact path="/search" component={SearchScreen} />
      </Switch>
    </>
  );
};
