var SpendingListEntry = (props) => (
  <tr>
    <td><img src={props.entry.icon} ></img></td>
    <td>12/8/16 - 7:13PM</td>
    <td>{props.entry.title}</td>
    <td>{props.entry.price}</td>
    <td>Testie</td>
  </tr>
  );

SpendingListEntry.protoTypes = {
  entry: React.PropTypes.object.isRequired
};

window.SpendingListEntry = SpendingListEntry;