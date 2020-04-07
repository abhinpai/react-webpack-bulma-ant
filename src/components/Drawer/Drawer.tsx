import React, { PureComponent } from "react";
import { Row, Col, Drawer } from "antd";
import { observer, inject } from "mobx-react";
import { UtilityStore } from "../../services/UtilityStore";
import { Rocket } from "../../interfaces/IRockets";

interface IDrawer {
  utilityStore?: UtilityStore;
  rocket: Rocket.RootObject;
}

const pStyle = {
  fontSize: 16,
  lineHeight: "24px",
  display: "block",
  marginBottom: 16,
};

interface IDesc {
  title: string;
  content: string;
}

const DescriptionItem = (desc: IDesc) => {
  return (
    <div
      className="site-description-item-profile-wrapper"
      style={{
        fontSize: 14,
        lineHeight: "22px",
        marginBottom: 7,
      }}
    >
      <p
        className="site-description-item-profile-p"
        style={{
          marginRight: 8,
          display: "inline-block",
        }}
      >
        {desc.title}:
      </p>
      {desc.content}
    </div>
  );
};

@inject("utilityStore")
@observer
export default class DrawerComponent extends PureComponent<IDrawer> {


  render() {
    return (
      <Drawer
        title={this.props.rocket.rocket_name}
        width={500}
        placement="right"
        closable={true}
        onClose={() => this.props.utilityStore?.setDrawerVisibilityState(false)}
        visible={this.props.utilityStore?.drawerState}
      >
        <div>
          <p className="site-description-item-profile-p" style={pStyle}>
            Basic Details
          </p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Full Name" content="Lily" />
            </Col>
            <Col span={12}>
              <DescriptionItem
                title="Account"
                content="AntDesign@example.com"
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Description"
                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
            
            </Col>
          </Row>
        </div>
      </Drawer>
    );
  }
}
