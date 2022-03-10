import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { SpinnerRoundFilled } from "spinners-react";
import "./Posts.css";

const Posts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/jobs/getjobs`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/vnd.github.cloak-preview",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setData(response.Jobs);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(data);

  const Loading = () => {
    return (
      <>
        <div className="Loading-component">
          <SpinnerRoundFilled
            className="spin"
            size={100}
            thickness={200}
            speed={80}
            color="#A8D0E6"
          />
          <h1>Loading...</h1>
        </div>
      </>
    );
  };

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="posts-container">
          <div className="content-page">
            <h1 className="post-heading">Latest Posts</h1>
            <div className="base-line"></div>
          </div>

          <div className="parent">
            {data.map((post) => (
              <Link className="post-link" to={`/product/${post._id}`}>
                <div className="container">
                  <div className="post-name">{post.JobRole}</div>
                  {/* <div className="vacancy-flex">
                    <span className="vacancy-header">Vacancy :- </span>
                    <div className="post-vacancy">{post.postVacancy}</div>
                  </div> */}

                <div className="post-category">
                  <span className="category-head">Category :- {}</span>
                  <div className="category-role">{post.JobCategory}</div>
                </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Posts;
