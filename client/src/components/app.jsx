class App extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.submit = this.submit.bind(this);
    console.log(this.props);
    this.state = {
      signedIn: false,
      curr: (<SpendingList list={props.data} submit={this.submit}/>),
      data: this.props.data
    };
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
    e.preventDefault();
    var newData = this.state.data;

    var spendingData = {
      category: e.target.children[1].children[0].children[e.target.children[1].children[0].selectedIndex].value,
      title: e.target.children[2].children[0].value,
      amount: '$' + e.target.children[3].children[1].value,
      url: 'transactions'
    };

    console.log(spendingData);

    postReq(spendingData);

    this.state.data.push(spendingData);

    if (this.state.curr.type.name === 'SpendingList') {
      this.setState({
        curr: (<SpendingList list={this.state.data} submit={this.submit} />)
      });
    } else {
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
          <h1 className='appTitle'><strong>Money</strong>.io</h1>
          {this.state.curr}
        </div>
      </div>
    );
  }

}
window.App = App;