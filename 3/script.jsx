// Code goes here

var Card = React.createClass({
  getInitialState: function(){
    return{} 
  },
  
  componentDidMount: function(){
    var component = this;
    $.get("https://api.github.com/users/"+this.props.login, function(data){
    component.setState(data);      
    })
  },
  
  render: function(){
    return(
    <div>
     <img src={this.state.avatar_url} width="50"/>
     <h3>{this.state.name}</h3>
     <hr/>
    </div>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <div>
       <Card login="petehunt" />
       <Card login="huan" />
      </div>
      )
  }
  
});

React.render(<Main />, document.getElementById('root'));

