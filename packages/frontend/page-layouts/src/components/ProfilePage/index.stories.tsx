import React from "react";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import { createStories } from "storybook-utilities";
import ProfilePage from ".";

createStories("Page Layouts").add(
  "ProfilePage",
  () => (
    <MemoryRouter initialEntries={[{pathname: "/profile/profile_id"}]}>
      <Switch>
        <Route
          component={ProfilePage}
          path="/profile/:id"
        />
      </Switch>
    </MemoryRouter>
  )
);
