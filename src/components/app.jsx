class App extends React.Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
    this.state ={
      curr: (<SpendingList list={props.data} />),
      data: props.data
    };
    this.render();
  }
  // click(vid) {
  //   // if (vid !== undefined) {
  //   //   this.setState({
  //   //     playing: vid
  //   //   });
  //     // this.render();
  //     // this.props.searchViews({key: window.YOUTUBE_API_KEY, id: vid.id.videoId}, this.viewsCaller);
  //     // this.props.searchComments({key: window.YOUTUBE_API_KEY, id: vid.id.videoId}, this.commentsCaller)
  // }

  // componentDidMount() {
  //   this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'puppies', max: 8}, this.caller);
  // }


  // search(e) {
  //   this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: e.target.value, max: 8}, this.caller);
  // }
  click(e) {
    console.log(e.target.innerHTML);
    if(e.target.innerHTML === 'Spending') {
      this.setState({ 
        curr: (<SpendingList list={this.state.data} />)
      })
    } else if(e.target.innerHTML === 'Owes/Debts') {
      this.setState({
        curr: (<OwesList list={this.state.data} />) 
      });
    }
  }
  render() {
    return (
      <div className="app">
        <Sidebar click={this.click}/>
        {this.state.curr}
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;