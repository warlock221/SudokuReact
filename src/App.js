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
    let i,j,k
    for(i=0; i<9; ++i)
		{
			for( j=0; j<9; ++j)
			{
				if(this.state.puzzle[i][j] === 0)
				{
					for( k=1; k<10; ++k)
					{
						if(this.possible(i, j, k))
						{
							this.setState(prev => prev.puzzle[i][j] = k)
							this.solve();
							this.setState(prev => prev.puzzle[i][j] = 0)
						}
					}
					return; 
				}
				
			}
    }
    setTimeout(console.log("hi"),100000000)
  }

  possible(x,y,n)
  {
    let i,j,x0,y0
    for( i=0; i<9; ++i)
		{
			if(this.state.puzzle[i][y] === n)
			{
				return false;
			}
		}
		for( i=0; i<9; ++i)
		{
			if(this.state.puzzle[x][i] === n)
			{
				return false;
			}
    }
    
		x0 = this.find(x);
    y0 = this.find(y);
    
		for(i=x0; i<=x0+2; ++i)
		{
			for(j=y0; j<=y0+2; ++j)
			{
				if(this.state.puzzle[i][j] === n) return false;
			}
		}
		console.log("yes")
		return true;
  }

  find(n)
  {
    if(n <3) return 0;
		else if(n<6) return 3;
		else return 6;
  }


  render()
  {
    this.solve()
    
    return(
      <div style={{"paddingLeft":"500px"}}>
        <h1>Sudoku Solver</h1>
        {
          
          this.state.puzzle
            .map(nums => <h2>{nums.map(num => num+" ")}</h2>)
        }
      </div>
    )
  }
}

export default App;
