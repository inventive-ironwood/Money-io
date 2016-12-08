class App extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.state = {
      curr: (<SpendingList list={props.data} />),
      data: props.data
    };
    this.render();
  }

  click(e) {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === 'Spending') {
      this.setState({ 
        curr: (<SpendingList list={this.state.data} />)
      });
    } else if (e.target.innerHTML === 'Owes/Debts') {
      this.setState({
        curr: (<OwesList list={this.state.data} />) 
      });
    }
  }
  render() {
    return (
      <div id="wrapper" className="app">
        <div id='sidebar-wrapper'>
          <Sidebar click={this.click}/>
        </div>
        <div id='page-content-wrapper'>
          {this.state.curr}
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;