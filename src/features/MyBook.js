import React, { useEffect } from "react";
import { Card, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./bookSlice";

const { Meta } = Card;

const BookList = ({data}) => (
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

const MyBook = () => {
  const status = useSelector(state => state.books.status)
  const data = useSelector(state => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if(status === 'idle') {
      dispatch(fetchBooks());
    } else if(status === 'completed') {
      console.log(data);
    }
  }, [status, dispatch]);

  let content;
  if(status === 'completed') {
    content = <BookList data={data} />;
  }

  return (
    <div className="MyBook">
      <Row wrap={true} gutter={[40, 16]} className="row">
        {content} 
      </Row>
    </div>
  );
};

export default MyBook;
