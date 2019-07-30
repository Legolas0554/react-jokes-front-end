import gql from "graphql-tag";

export const loadCategoriesQuery = gql`
  query {
    categories
  }
`;

export const loadCategoryJokeQuery = gql`
  query GetCharacter($category: String!) {
    categoryJoke(category: $category) 
  }
`;
