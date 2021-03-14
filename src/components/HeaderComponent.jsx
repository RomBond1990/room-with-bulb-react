import React, {Component} from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://github.com/RomBond1990" className="navbar-brand">Room Service</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;
