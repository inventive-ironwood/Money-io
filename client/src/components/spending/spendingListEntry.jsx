var SpendingListEntry = (props) => (
  <tr>
    <td><img src={props.entry.icon}></img></td>
    <td>{props.entry.title}</td>
    <td>{props.entry.amount}</td>
    <td>1 hour ago</td>
  </tr>
  );

SpendingListEntry.protoTypes = {
  entry: React.PropTypes.object.isRequired
};

window.SpendingListEntry = SpendingListEntry;