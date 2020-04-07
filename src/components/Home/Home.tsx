import React, { PureComponent, Fragment } from "react";
import { observer, inject } from "mobx-react";
import ApiServiceStore, { RootObject } from "../../services/ApiServiceStore";
import "antd/dist/antd.css";
import "./Home.scss";
import { Layout, Row, Col } from "antd";
import DrawerComponent from "../Drawer/Drawer";
import { UtilityStore } from "../../services/UtilityStore";
import ErrorBoundary from "../ErrorBoundry/ErrorBoundryComponent";
const { Header, Footer } = Layout;

interface IHomeState {}

interface IHomeProps {
  apiServiceStore?: ApiServiceStore;
  utilityStore?: UtilityStore;
}

@inject("apiServiceStore", "utilityStore")
@observer
export default class Home extends PureComponent<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.renderCol = this.renderCol.bind(this);
  }

  componentDidMount() {
    this.props.apiServiceStore?.getRockets();
  }

  render() {
    return (
      <Fragment>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
          </Header>
          <div
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 380 }}
            >
              <div>
                <Row gutter={[16, 24]}>
                  {this.props.apiServiceStore?.rockets.map((rocket, index) => {
                    return this.renderCol(rocket, index);
                  })}
                </Row>
              </div>
            </div>
          </div>
          <Footer style={{ textAlign: "center" }}>
            Made in <span>❤️</span> 3.1432
          </Footer>
        </Layout>
        <ErrorBoundary>
          <DrawerComponent />
        </ErrorBoundary>
      </Fragment>
    );
  }

  renderCol(rocket: RootObject, index: any) {
    return (
      <Col
        className="gutter-row"
        xs={24}
        sm={12}
        md={8}
        lg={6}
        xl={6}
        key={index}
      >
        <article
          className={"card"}
          onClick={() =>
            this.props.utilityStore?.setDrawerVisibilityState(true)
          }
        >
          <img src={rocket.flickr_images[0]} alt="Rocket Image" />
          <h3>
            {rocket.rocket_name}
            <em>{rocket.company}</em>
          </h3>
          <p>{rocket.description}</p>
        </article>
      </Col>
    );
  }
}
