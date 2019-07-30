import React from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import {
  setCategories,
  selectCategory
} from "../redux/reducers/JokeReducer/actions";
import { dispatch } from "rxjs/internal/observable/pairs";
import Select from "react-dropdown-select";
import { Query } from "@apollo/react-components";
import { loadCategoriesQuery } from "../graphql/queries/jokeQueries";
import Joke from "./Joke";

class App extends React.Component {
  render() {
    const { loadCategories, setCategory } = this.props;
    return (
      <div className="box">
        <h1>Chuck Norris Jokes</h1>
        <h2>Select a category: </h2>

        <Query query={loadCategoriesQuery}>
          {result => {
            const { loading, error, data } = result;

            if (loading) {
              return <p> loading categories</p>;
            }

            if (error) {
              return <p> failed to load categories</p>;
            }

            let transformedCategories = [];
            for (let index = 0; index < data.categories.length; index++) {
              let value = data.categories[index];
              transformedCategories.push({ value: value, label: value });
            }

            loadCategories(transformedCategories);

            return (
              <Select
                className="select"
                options={transformedCategories}
                onChange={category => setCategory(category)}
              />
            );
          }}
        </Query>
        <Joke />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadCategories: categories => {
    dispatch(setCategories(categories));
  },
  setCategory: category => {
    if (category.length > 0) {
      dispatch(selectCategory(category[0].value));
    }
  }
});

const mapStateToProps = state => ({
  categories: state.jokes.categories ? undefined : state.jokes.categories
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);
