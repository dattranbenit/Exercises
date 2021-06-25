import React, {useState} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import '../../assets/scss/index.scss'
import parse from 'html-react-parser'

const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div className="tabs" style={{display: "block"}}>
            <Nav tabs>
                {props.data.map((part, index) => {
                        return (
                            <NavItem>
                                <NavLink
                                    className={classnames({active: activeTab === `${index + 1}`})}
                                    onClick={() => {
                                        toggle(`${index + 1}`);
                                    }}
                                    style={{cursor: "pointer"}}
                                >
                                    {parse(part["title"])}
                                </NavLink>
                            </NavItem>
                        )
                    }
                )}
            </Nav>

            <TabContent activeTab={activeTab}>
                {props.data.map((part, index) => {
                    return (
                        <TabPane tabId={`${index + 1}`}>
                            <Row>
                                <Col sm="12">
                                    {parse(part["content"])}
                                </Col>
                            </Row>
                        </TabPane>
                    )
                })}
            </TabContent>
        </div>
    );
}

export default Tabs;
