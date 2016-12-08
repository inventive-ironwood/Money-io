var SpendingListEntry = (props) => (
  <div className = "spending-list-entry">
    <table>
      <tbody>
        <tr>
          <td> 
            <img src={props.entry.icon} ></img>
          </td>
          <td>
            {props.entry.title}
          </td>
          <td>
            {props.entry.price}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

SpendingListEntry.protoTypes = {
  entry: React.PropTypes.object.isRequired
};

window.SpendingListEntry = SpendingListEntry;