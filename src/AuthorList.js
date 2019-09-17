import React from "react";

// Components:
import AuthorCard from "./AuthorCard";

function AuthorList(props) {
  const authorCards = props.authors.map(author => (
    <AuthorCard author={author} key={author.books} />
  ));
  return (
    <div className="content col-10">
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
      </div>
    </div>
  );
}

export default AuthorList;
