import Search from ".";
import addComponentStory from "../../utilities/storybook/addComponentStory";

const profiles = [
  {
    id: "profile1",
    name: "Profile 1",
  },
  {
    id: "profile2",
    name: "Profile 2",
  },
  {
    id: "profile3",
    name: "Profile 3",
  },
];

addComponentStory(Search, {
  fetchSuggestions: (value: string) => {
    return Promise.resolve(profiles.filter(profile => {
      return profile.name.toLowerCase().includes(value.toLowerCase());
    }));
  },
  onSelect: () => { return; },
});
