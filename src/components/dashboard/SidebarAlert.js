import React from 'react';
export default (props) => {
    const [active,setActive]  = React.useState(false);
    const [screen,setScreen]  = React.useState("");

    const openSidebar = (key) => {
        setScreen(key);
        setActive(true);
    }
    return(
        <div className="home">              
            <div className="ttt-wrapper">
                <nav id="ttt-sidebar-alert" className={active ? "active d-flex align-items-center justify-content-center" : ""}>
                    <div id="ttt-dismiss">
                        <i className="fas fa-times-circle" onClick={() => setActive(false)}></i>
                    </div>       
                    <div className="Sidebar-alert-content">
                      
                    </div>             
                </nav>
                <div id="ttt-content">  
                    {props.children}
                </div>
                
            </div>
            <div className={active ? "ttt-overlay active" : "ttt-overlay"}></div>
        </div>
    )

}