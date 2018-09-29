/**
 * Main application class.
 *
 * @export
 * @class App
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {Child} from "./child/child";

export class App {
    /**
     * Run the application.
     * @param {Element} rootElement
     * @param {string} basePath
     * @returns {void}
     */
    run(rootElement, basePath) {
        ReactDOM.render(
            <BrowserRouter basename={basePath}>
                <div>
                    <Switch>
                        <Route path="/" exact component={Child} />
                    </Switch>
                    <hr />
                    <nav>
                        <Link to="/">Child</Link>
                    </nav>
                </div>
            </BrowserRouter>,
            rootElement
        );
    }
}

/* Generated by UniteJS */