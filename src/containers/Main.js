import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import BubbleSort from "../pages/bubble/BubbleSortComponent";
import CocktailSort from "../pages/cocktail/CocktailSortComponent";
import InsertionSort from "../pages/Insertion/InsertionSortComponent";
import ShellSort from "../pages/shell/ShellSortComponent";
import MergeSort from "../pages/merge/MergeSortComponent";
import QuickSort from "../pages/quick/QuickSortComponent";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/bubble-sort"
            render={(props) => <BubbleSort {...props} theme={this.props.theme} />}
          />
          <Route
            path="/cocktail-sort"
            render={(props) => <CocktailSort {...props} theme={this.props.theme} />}
          />
          <Route
            path="/insertion-sort"
            render={(props) => <InsertionSort{...props} theme={this.props.theme} />}
          />
          <Route
            path="/shell-sort"
            render={(props) => <ShellSort {...props} theme={this.props.theme} />}
          />
          <Route
            path="/merge-sort"
            render={(props) => <MergeSort {...props} theme={this.props.theme} />}
          />
          <Route
            path="/quick-sort"
            render={(props) => <QuickSort {...props} theme={this.props.theme} />}
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/education"
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/opensource"
            render={(props) => (
              <Opensource {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}
          <Route
            path="/projects"
            render={(props) => <Projects {...props} theme={this.props.theme} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
