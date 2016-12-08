var OwesListEntry = (props) => (
  <div className = "owes-list-entry">
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

OwesListEntry.protoTypes = {
  entry: React.PropTypes.object.isRequired
};

window.OwesListEntry = OwesListEntry;