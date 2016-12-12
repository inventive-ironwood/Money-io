var OwesListEntry = (props) => (
  <tr>
    <td>{props.entry.person}</td>
    <td>{props.entry.type}</td>
    <td>{props.entry.amount}</td>
    <td>{moment(props.entry.created_at).fromNow()}</td>
    <td>
       <div className="btn-group">
  <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pay via
  </button>
  <div className="dropdown-menu dropdown-menu-right">
    <a className="dropdown-item" href="http://paypal.com">Paypal</a>
    <div className="dropdown-divider"></div>
    <a className="dropdown-item" href="http://venmo.com">Venmo</a>
    <div className="dropdown-divider"></div>
    <a className="dropdown-item" href="http://squareup.com">Square</a>
    <div className="dropdown-divider"></div>
    <a className="dropdown-item" href="http://bitcoin.com">Bitcoin</a>
  </div>
</div>
    </td>
  </tr>
);

OwesListEntry.protoTypes = {
  entry: React.PropTypes.object.isRequired
};

window.OwesListEntry = OwesListEntry;