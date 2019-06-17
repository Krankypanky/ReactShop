import React from "react";
import { BookOverviewHeadline, BookOverviewList, BookOverviewListItem, CartBtn } from './BookOverview.style';

const addIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
</svg>;


const BookOverview = (props) => {
  const {addItemToCart} = props;

  return <>
    <BookOverviewHeadline>Bücher!</BookOverviewHeadline>
    <BookOverviewList>
      {props.books.map((book, index) =>
        (
          <BookOverviewListItem key={index}>
            <p>{book.title}</p>
            <img src={book.image} alt={book.title}/>
            <CartBtn onClick={() => addItemToCart(book)}>{addIcon}</CartBtn>
          </BookOverviewListItem>
        )
      )}
    </BookOverviewList>
  </>
};

export default BookOverview;


