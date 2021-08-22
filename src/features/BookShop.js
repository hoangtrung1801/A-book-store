import { Row, Input } from "antd";
import React, { useState } from "react";

const { Search } = Input;

const BookShop = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div className="BookShop">
      <Row className="row">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </Row>
    </div>
  );
};

export default BookShop;
