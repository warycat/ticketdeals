/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './CheckoutPage.scss';
import withStyles from '../../decorators/withStyles';
import Griddle from 'griddle-react';

const title = 'Checkout';

var fakeData =  [
  {
    "id": 1
  , "ticket": "Universal Studios Hollywood"
  , "name": "1-DAY TICKET"
  , "amount": "$85"
  }
, {
    "id": 2
  , "ticket": "Universal Studios Hollywood"
  , "name": "VIP EXPERIENCE"
  , "amount": "$299"
  }
, {
    "id": 3
  , "ticket": "DISNEYLAND"
  , "name": "1-DAY TICKET"
  , "amount": "$99"
  }
];

@withStyles(s)
class CheckoutPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className='w-container'>
        <Griddle results={fakeData} />
      </div>
    );
  }

}

export default CheckoutPage;
