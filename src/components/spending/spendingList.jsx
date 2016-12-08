var Spending = (props) => (
  <div className="spending">
    <h2>{props.title}</h2>
    {props.list.map(spending => <SpendingListEntry entry={spending} />)}
  </div>
);

Spending.prototypes = {
  list: React.PropTypes.array.isRequired
}

window.Spending = Spending;