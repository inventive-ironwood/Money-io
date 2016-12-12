var OwesList = (props) => (
  <div className="owes">
    <h2>Dues</h2>
    <table className="table">
      <thead id="owes-head">
        <tr>
          <th>Who</th>
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
    <DuesForm submitOwesLoans={props.submitOwesLoans}/>
    <br />
    <LoansForm submitOwesLoans={props.submitOwesLoans}/>
  </div>
);

OwesList.prototypes = {
  list: React.PropTypes.array.isRequired
};

window.OwesList = OwesList;