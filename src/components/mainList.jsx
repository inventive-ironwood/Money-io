var MainList = (props) => (
  <div className="media-list">
    {props.list.map(main => <MainListEntry entry={main} />)}
  </div>
);

MainList.propTypes = {
  list: React.PropTypes.array.isRequired
};

window.MainList = MainList;