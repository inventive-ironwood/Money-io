var SpendingList = (props) => (
  <div className="spending">
    <h2>{props.title}</h2>
    {props.list.map(spending => <SpendingListEntry entry={spending} />)}
  </div>
);

SpendingList.prototypes = {
  list: React.PropTypes.array.isRequired
}

window.SpendingList = SpendingList;