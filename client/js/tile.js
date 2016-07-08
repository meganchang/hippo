var Tile = React.createClass({
  render: function() {
    return (
      <div className="tile">
        Hello, world! I am a tile.
      </div>
    );
  }
});
ReactDOM.render(
  <Tile />,
  document.getElementById('content')
);