import React from 'react';
import './styles.css'
export default class CommandsList extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
  }

  onKeyDown({ event }) {
    if (event.key === "ArrowUp") {
      this.upHandler();
      return true;
    }

    if (event.key === "ArrowDown") {
      this.downHandler();
      return true;
    }

    if (event.key === "Enter") {
      this.enterHandler();
      return true;
    }

    return false;
  }

  upHandler() {
    this.setState({
      selectedIndex:
        (this.state.selectedIndex + this.props.items.length - 1) %
        this.props.items.length,
    });
  }

  downHandler() {
    this.setState({
      selectedIndex: (this.state.selectedIndex + 1) % this.props.items.length,
    });
  }

  enterHandler() {
    this.selectItem(this.state.selectedIndex);
  }

  selectItem(index) {
    const item = this.props.items[index];

    if (item) {
      this.props.command(item);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.items.length !== this.props.items.length) {
      this.setState({ selectedIndex: 0 });
    }
  }

  render() {
    const { items } = this.props;
    const { selectedIndex } = this.state;

    return (
      <ul className="te__menu" style={{ listStyle: 'none', maxHeight: '350px', overflowY: 'scroll', width: '350px', background: 'white', padding: '0.125rem 0rem' }}>
        {items.map(({ title, subtitle, icon }, idx) => (
          <li
            key={idx}
            onClick={() => this.selectItem(idx)}
            className={`te__menu-item-container`}
          >
            <div className={`te__menu-item ${selectedIndex === idx ? "active" : ""}`} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', padding: '1rem', background: '#fff', border: '1px solid grey', borderRadius: '4px' }}>{icon}</div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1rem' }}><h4 style={{ margin: 0 }}>{title}</h4><p style={{ margin: 0 }}>{subtitle}</p></div>

            </div>
          </li>
        ))}
      </ul>
    );
  }
}