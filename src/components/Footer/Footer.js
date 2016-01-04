/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import s from './Footer.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(s)
class Footer extends Component {

  render() {
    return (
      <div className="w-section footer">
        <div className="w-container">
          <div>
            <a href="#" className="w-inline-block social-icon-link"><img width="20" src="images/social-03.svg" />
            </a>
            <a href="#" className="w-inline-block social-icon-link"><img width="20" src="images/social-18.svg" />
            </a>
            <a href="#" className="w-inline-block social-icon-link"><img width="20" src="images/social-30.svg" />
            </a>
          </div>
        </div>
        <div className="footer-text">Powered by JTB</div>
      </div>
    );
  }

}

export default Footer;
