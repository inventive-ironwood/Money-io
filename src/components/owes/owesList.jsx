var OwesList = (props) => (
  <div className="owes">
    <h2>{props.title}</h2>
    {props.list.map(owes => <OwesListEntry entry={owes} />)}
  </div>
);

OwesList.prototypes = {
  list: React.PropTypes.array.isRequired
}

window.OwesList = OwesList;