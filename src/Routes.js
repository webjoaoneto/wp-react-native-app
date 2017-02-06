import React from 'react';

import {Scene, Router} from 'react-native-router-flux';

import Home      from '@containers/Home';
import Post      from '@containers/Post';
import Categoria from '@containers/Categoria';

import MenuDrawer from './MenuDrawer.js';

export default class Routes extends React.Component {
  render() {
    return(
        <Router>
            <Scene key="root">  
                <Scene key="menu" component={MenuDrawer} title="Noivas Fortaleza" initial={true} tabs={true}>
                    <Scene key='home' component={Home} title='Noivas Fortaleza' initial={true} />
                </Scene>
                <Scene key='categoria' component={Categoria} title='Noivas Fortaleza'  />
                <Scene key="post" component={Post}  />
            </Scene>
        </Router>
        )
  }
}
