import React, {Component} from "react"
import {
	Container,
	ListGroup,
	ListGroupItem,
	Nav,
	NavItem,
	NavLink,
	TabContent,
	TabPane
} from "reactstrap"

class InventoryScreen extends Component {
	constructor(props) {
		super(props)
		this.tabClick = this.tabClick.bind(this)
        this.handleActiveClass = this.handleActiveClass.bind(this)
		this.state = {
			activeTab: 1,
			setActiveTab: 1
		}
	}

	tabClick(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({activeTab: tab, setActiveTab: tab})
		}
	}

	handleActiveClass(tab) {
		if (this.state.activeTab === tab) {
			return "Tab--active"
		}
        return
	}

	render() {
		return (
			<Container>
				<Nav tabs>
					<NavItem
						className={this.handleActiveClass(1)}
						onClick={() => {
							this.tabClick(1)
						}}
					>
						<NavLink>Backpack 3/5</NavLink>
					</NavItem>
					<NavItem
						className={this.handleActiveClass(2)}
						onClick={() => {
							this.tabClick(2)
						}}
					>
						<NavLink>Storage 0/0</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId={1}>
						<ListGroup horizontal>
							<ListGroupItem>Item 1</ListGroupItem>
							<ListGroupItem>Item 1</ListGroupItem>
							<ListGroupItem>Item 1</ListGroupItem>
						</ListGroup>
					</TabPane>
					<TabPane tabId={2}>
						<ListGroup horizontal>
							<p>No storage available. Upgrade your house.</p>
						</ListGroup>
					</TabPane>
				</TabContent>
			</Container>
		)
	}
}

export default InventoryScreen
