import React, {
  Suspense, lazy, useState, useEffect,
} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import swal from '@sweetalert/with-react';
import SideNav from '../components/sideNav';
import TopNav from '../components/topNav';
import WelcomeScreen from '../components/welcomeScreen';

const Cards = lazy(() => import('./Cards'));
const Dashboard = lazy(() => import('./Dashboard'));
const NotFound = lazy(() => import('../components/notFound'));

const Layout = ({ Loader }: { Loader: Function }) => {
  const [showSideNav, setShowSideNav] = useState(true);

  useEffect(() => {
    swal({
      buttons: false,
      closeOnClickOutside: false,
      content: (<WelcomeScreen close={() => swal.close()} />),
    });
    return () => swal.close();
  }, []);

  useEffect(() => {
    const updateShowSideNav = () => {
      if (window.innerWidth < 768) return setShowSideNav(false);
      return setShowSideNav(true);
    };
    updateShowSideNav();
    window.addEventListener('resize', updateShowSideNav);
    return () => window.removeEventListener('resize', updateShowSideNav);
  }, []);

  return (
    <Router>
      <div className="flex">
        {showSideNav && <SideNav />}
        <div className="w-full md:w-9/12 lg:w-10/12 ml-auto">
          <TopNav toggleShowSideNav={() => setShowSideNav(!showSideNav)} />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Redirect exact from="/" to="/dashboard" />
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/cards">
                <Cards />
              </Route>
              <Route exact path="*" component={NotFound} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default Layout;
