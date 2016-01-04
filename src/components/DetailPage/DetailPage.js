import React, { Component, PropTypes } from 'react';
import s from './DetailPage.scss';
import cx from 'classnames';
import withStyles from '../../decorators/withStyles';

const title = 'Detail';

@withStyles(s)
class DetailPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    let {id, tickets} = this.props;
    let ticket = tickets.find(t=>t.id==id);
    console.log(ticket);
    return(
      <div className="w-container">
        <div className="w-row photo-row">
          <div className="w-col w-col-4">
            <h1 className="photo-page-title">{ticket.title}</h1>
            <div className="w-richtext description-text"></div>
            {ticket.items.map((item)=>{return(
              <a href="#" className={cx(s['btn'],s['btn--gray-border'])}>${item.amount} {item.name}</a>
            );})}

          </div>
          <div className="w-col w-col-8">
            <div className="w-richtext"><img src={"/tickets/" + ticket.photo} /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPage;
