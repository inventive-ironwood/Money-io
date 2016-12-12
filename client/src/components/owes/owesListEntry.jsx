var OwesListEntry = (props) => (
  <tr>
    <td>{props.entry.title}</td>
    <td> Jon </td>
    <td>{props.entry.price}</td>
    <td>2 hours ago</td>
    <td>
       <div className="btn-group">
  <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pay via
  </button>
  <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="#">Paypal</a>
    <div className="dropdown-divider"></div>
    <a className="dropdown-item" href="#">Venmo</a>
    <div className="dropdown-divider"></div>
    <a className="dropdown-item" href="#">Square</a>
    <div className="dropdown-divider"></div>
    <a className="dropdown-item" href="#">Bitcoin</a>
  </div>
</div>
    </td>
  </tr>
);

OwesListEntry.protoTypes = {
  entry: React.PropTypes.object.isRequired
};

window.OwesListEntry = OwesListEntry;