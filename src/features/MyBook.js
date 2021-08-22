import { Card, Col, Row, Space } from "antd";
import React from "react";

const { Meta } = Card;

const data = [
  {
    title: "Dac nhan tam",
    imgUrl: "https://picsum.photos/200/300"
  },
  {
    title: "Giet chet con chim nhai",
    imgUrl: "https://picsum.photos/200/300"
  },
  {
    title: "Giet chet con chim nhai",
    imgUrl: "https://picsum.photos/200/300"
  },
  {
    title: "Giet chet con chim nhai",
    imgUrl: "https://picsum.photos/200/300"
  },
  {
    title: "Giet chet con chim nhai",
    imgUrl: "https://picsum.photos/200/300"
  },
  {
    title: "Giet chet con chim nhai",
    imgUrl: "https://picsum.photos/200/300"
  }
];

const MyBook = () => {
  const BookList = () => (
    <>
      {data.map((book) => (
        <Col>
          <Card
            hoverable
            style={{ width: 200 }}
            cover={<img alt="example" src={book.imgUrl} />}
          >
            <Meta title={book.title} />
          </Card>
          ,
        </Col>
      ))}
    </>
  );

  return (
    <div className="MyBook">
      <Row wrap={true} gutter={[40, 16]} className="row">
        <BookList />
      </Row>
    </div>
  );
};

export default MyBook;
