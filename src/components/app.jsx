class App extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      curr: (<SpendingList list={props.data} submit={this.submit}/>),
      data: props.data
    };
    this.render();
  }

  click(e) {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === 'Spending') {
      this.setState({ 
        curr: (<SpendingList list={this.state.data} submit={this.submit} />)
      });
    } else if (e.target.innerHTML === 'Owes/Debts') {
      this.setState({
        curr: (<OwesList list={this.state.data} />) 
      });
    }
  }

  submit(e) {
    var newData = this.state.data;
    newData.push({
      icon: '../src/assets/burger.png',
      title: e.target.children[2].children[0].value,
      price: '$' + e.target.children[3].children[1].value
    });
    this.setState({data: newData});
  }

  render() {
    return (
      <div id="wrapper" className="app">
        <div id='sidebar-wrapper'>
          <Sidebar click={this.click}/>
        </div>
        <div id='page-content-wrapper'>
          <h1 className='appTitle'>Money.io</h1>
          {this.state.curr}
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;