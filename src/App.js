import React from "react";
import { Layout } from "antd";
import Sidebar from "./common/Sidebar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MyBook from "./features/MyBook";
import BookShop from "./features/BookShop";

const { Sider, Content } = Layout;

function App() {
  return (
    <Router>
      <div className="App">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0
            }}
            width={180}
          >
            <Sidebar />
          </Sider>

          <Layout style={{ marginLeft: `180px` }}>
            <Content>
              <Switch>
                <Route exact path="/">
                  <h1>A book database</h1>
                </Route>
                <Route exact path="/mybook">
                  <MyBook />
                </Route>

                <Route exact path="/bookshop">
                  <BookShop />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
