var MainListEntry = (props) => (
  <div className = "main-list-entry">
    {props.entry}
  </div>
);

MainListEntry.protoTypes = {
  entry: React.PropTypes.object.isRequired
};

window.MainListEntry = MainListEntry;