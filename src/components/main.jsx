var Main = (props) => (
  <div className="main">
    <h2>props.title</h2>
    <MainList list={props.list} />
  </div>
);

Main.prototypes = {
  list: React.PropTypes.array.isRequired
}

window.Main = Main;