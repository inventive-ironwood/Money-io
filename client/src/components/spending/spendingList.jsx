var SpendingList = (props) => (
  <div className="spending">
    <h2>Spending</h2>
    <table className="table">
      <thead id="spending-head">
        <tr>
          <th>Category</th>
          <th>Title</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {props.list.map(owes => <SpendingListEntry entry={owes} />)}
      </tbody>
    </table>
    <SpendingForm submit={props.submit}/>
  </div>
);

SpendingList.prototypes = {
  list: React.PropTypes.array.isRequired
};

window.SpendingList = SpendingList;