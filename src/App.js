import {Component} from 'react'

class App extends Component 
{
  constructor()
  {
    super()
    this.state = {
      puzzle :[ [0,8,0,0,1,3,4,0,0],
               [4,2,0,6,8,0,0,0,0],
       [0,0,1,0,5,4,0,8,3], [1,9,0,0,0,8,7,0,0], [0,4,7,0,0,2,5,0,8],
       [0,5,0,0,0,9,0,3,0], [2,0,9,3,0,5,0,7,0], [5,0,0,7,2,0,0,0,9],
       [7,3,0,0,0,0,2,0,6] ]
    }
    this.solve = this.solve.bind(this)
    this.possible = this.possible.bind(this)
  }
  solve()
  {

  }

  possible(value)
  {

  }

  find()
  {

  }


  render()
  {
    return(
      <div>
        {this.state.puzzle}
      </div>
    )
  }
}

export default App;
