var OwesList = (props) => (
  <div className="owes">
    <h2>Dues</h2>
    <table className="table">
      <thead id="owes-head">
        <tr>
          <th></th>
          <th>Title</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Testing</th>
        </tr>
      </thead>
      <tbody>
      {props.list.map(owes => <OwesListEntry entry={owes} />)}
      </tbody>
    </table>
    <DuesForm />
    <br>
    <LoansForm />
  </div>
);

OwesList.prototypes = {
  list: React.PropTypes.array.isRequired
};

window.OwesList = OwesList;