import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import About from './components/About';
import ContactUs from './components/ContactUs';
import License from './components/License';
import Checkout from './components/Checkout'

export default (
  <Route>
    <Route path='/' component={App} >
      <IndexRoute component={About} />
      <Route path='/about_us' component={About}/>
      <Route path='/contact_us' component={ContactUs}/>
      <Route path='/license' component={License}/>
      <Route path='/license/:license_id/checkout/:id' component={Checkout}/>
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
