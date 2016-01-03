import React, { Component, PropTypes } from 'react';
import s from './InventoryPage.scss';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

const title = 'Inventory';

@withStyles(s)
class InventoryPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    let tickets = this.props.tickets;
    let rows = [];
    for(let index = 0; index < tickets.length;index++){
      let row = Math.floor(index / 3);
      if(!rows[row]){
        rows[row] = [];
      }
      let col = index % 3;
      rows[row][col] = tickets[index];
    }
    return (
      <div className="w-section section">
        <div className="w-container">
          <div className="w-dyn-list">
            <div className="w-dyn-items">
              {rows.map((row, key)=>{return(
                <div key={key} className="w-row">
                {row.map((col,key)=>{return(
                  <div key={key} className="w-dyn-item w-col w-col-4">
                    <a href={"detail/"+col.id} className="w-inline-block photo-link-block" onClick={Link.handleClick}>
                      <img src={'tickets/' + col.thumb}/>
                      <div className="title">{col.title}</div>
                    </a>
                  </div>
                  );})}
                </div>
              );})}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InventoryPage;
