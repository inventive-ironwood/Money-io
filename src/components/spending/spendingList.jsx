var SpendingList = (props) => (
  <div className="spending">
    <h2>Spending</h2>
    <table className="table">
      <thead id="spending-head">
        <tr>
          <th></th>
          <th>Date</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
      {props.list.map(owes => <OwesListEntry entry={owes} />)}
      </tbody>
    </table>
    <SpendingForm submit={props.submit}/>
  </div>
);

SpendingList.prototypes = {
  list: React.PropTypes.array.isRequired
};

window.SpendingList = SpendingList;