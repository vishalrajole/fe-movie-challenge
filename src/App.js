import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Movies from "./views/routes/movies/movies.index";
import MovieDetails from "./views/routes/movie-details/movie-details.index";
import ErrorBoundary from "./views/components/error-boundary/error-boundary.index";
import styleConstants from "./style/styleConstants";
import GlobalStyle from "./style/normalize";
import { Container } from "./style/layout";

const App = () => {
  return (
    <ThemeProvider theme={styleConstants}>
      <ErrorBoundary>
        <Container>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/movies" />} />
              <Route path="/movies" component={Movies} />
              <Route path="/movie-details/:movieId" component={MovieDetails} />
            </Switch>
          </BrowserRouter>
        </Container>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
