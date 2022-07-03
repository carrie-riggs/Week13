import React from 'react';


export default class Navbar extends React.Component {
    render() {
        return(
            <div>
                <ul className="table">
                    <li><b><a href="link">Home</a></b></li>
                    <li><b><a href="link">Page 2</a></b></li>
                    <li><b><a href="link">Page 3</a></b></li>
                    <form>
                        <input type="text" placeholder='Search' className='searchBar'></input>
                    </form>
                </ul>    
            </div>
        );
    }

}
