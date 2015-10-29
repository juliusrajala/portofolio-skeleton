var MainComponent = React.createClass({
  render: function(){
    return(
      <div className="mainContainer">
        <p>Main container</p>
      </div>
    );
  }
});

ReactDOM.render(
  <MainComponent/>,
  document.getElementById('componentSet')
);