var OwesList = (props) => (
  <div className="owes">
    <h2>Dues</h2>
    <table className="table">
      <thead id="owes-head">
        <tr>
          <th>Category</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Option</th>
        </tr>
      </thead>
      <tbody>
      {props.list.map(owes => <OwesListEntry entry={owes} />)}
      </tbody>
    </table>
    <DuesForm />
    <br />
    <LoansForm />
  </div>
);

OwesList.prototypes = {
  list: React.PropTypes.array.isRequired
};

window.OwesList = OwesList;