﻿var SearchSidebar = React.createClass({
    displayName: "SearchSidebar",
    render: function () {
        return (
                <form action="#" method="get" className="sidebar-form">
                    <div className="input-group">
                        <input type="text" name="q" className="form-control" placeholder="Search..." />
                        <span className="input-group-btn">
                            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
                        </span>
                    </div>
                </form>
               );
    }
});

var NavItem = React.createClass({
    displayName: 'NavItem',
    render: function () {
        var icon = "fa fa-" + this.props.icon + " text-" + this.props.iconcolor;
        var datacolor = "label pull-right bg-" + this.props.datacolor;
        return (
                <li>
                    <a href={this.props.route}>
                        <i className={icon}></i> <span>{this.props.title}</span>
                        <small className={datacolor}>x</small>
                    </a>
                </li>
        );
    }
});
var NavGroup = React.createClass({
    displayName: 'NavGroup',
    render: function () {
        var icon = "fa fa-" + this.props.icon + " text-" + this.props.iconcolor;
        return (
		        <li className="treeview">
			        <a href="#">
                        <i className={icon}></i><span>{this.props.title}</span>
                        <i className="fa fa-angle-left pull-right"></i>
			        </a>
			        <ul className="treeview-menu">
			            {this.props.children}
			        </ul>
		        </li>
                /*
                                        <li className="treeview">
                                            <a href="#">
                                                <i className="fa fa-share"></i> <span>Multilevel</span>
                                                <i className="fa fa-angle-left pull-right"></i>
                                            </a>
                                            <ul className="treeview-menu">
                                                <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                                                <li>
                                                    <a href="#"><i className="fa fa-circle-o"></i> Level One <i className="fa fa-angle-left pull-right"></i></a>
                                                    <ul className="treeview-menu">
                                                        <li><a href="#"><i className="fa fa-circle-o"></i> Level Two</a></li>
                                                        <li>
                                                            <a href="#"><i className="fa fa-circle-o"></i> Level Two <i className="fa fa-angle-left pull-right"></i></a>
                                                            <ul className="treeview-menu">
                                                                <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                                                                <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                                            </ul>
                                        </li>
                */
                );
    }
});
var MainSidebar = React.createClass({
    displayName: 'MainSidebar',
    getInitialState: function () {
        return {title: this.props.title}
    },
    render: function () {
        return (
                <aside className="main-sidebar">
                                <section className="sidebar">
                                    <div className="user-panel">
                                        <div className="pull-left image">
                                            <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                                        </div>
                                        <div className="pull-left info">
                                            <p>Alexander Pierce</p>
                                            <a href="#"><i className="fa fa-circle text-success"></i> On-line</a>
                                        </div>
                                    </div>
                                    <SearchSidebar />
                                    <ul className="sidebar-menu">
                                        <li className="header">MAIN NAVIGATION</li>
                                        <NavGroup title=" Dashboard" icon="dashboard">
                                            <NavItem title="Dashboard v1" icon="circle-o" route="#" datacolor="red" />
                                            <NavItem title="Dashboard v2" icon="circle-o" route="#" datacolor="green" />
                                        </NavGroup>
                                        <NavItem title="Widgets" icon="th" iconcolor="red" route="#" datacolor="green" />
                                    </ul>
                                </section>
                </aside>
               );
    }
});