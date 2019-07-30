import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import { setJoke } from "../redux/reducers/JokeReducer/actions";
import { dispatch } from "rxjs/internal/observable/pairs";
import { Query } from "@apollo/react-components";
import { loadCategoryJokeQuery } from "../graphql/queries/jokeQueries";

class Joke extends React.Component {
  render() {
    const { joke, category, loadJoke } = this.props;

    return (
      <Query query={loadCategoryJokeQuery} variables={{ category }}>
        {result => {
          const { loading, error, data } = result;

          if (loading) {
            return <p />;
          }
          if (error) {
            return <p>error loading joke</p>;
          }

          loadJoke(data.categoryJoke);
          if (joke !== "" || joke === undefined) {
            return <p />;
          }
          return <p>Joke: {joke}</p>;
        }}
      </Query>
    );
  }
}

const mapStateToProps = state => ({
  joke: state.jokes.joke,
  category: state.jokes.category
});

const mapDispatchToProps = dispatch => ({
  loadJoke: joke => {
    console.log(joke);
    dispatch(setJoke(joke));
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Joke);
