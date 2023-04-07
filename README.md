## Details


Made with the following packages
* MaterialUI 5
* Styled Components

## Things to Note
* Implied in the given mock data object are possible multiple counts of a ship (i.e. `count: 1`). With the provided data, only one count for ship exists. I have taken the liberty of assuming that in other scenarios, this may not be the case.  In light of this, the state for tracking hits on each ship has been done dynamically (see `shipsState` and its corresponding `type` of `ShipsState`). This allows for the game to render multiple copies of a ship so long that there are respective layouts for them and that it has been reflected in the `count` property inside `shipTypes`.
* The codebase is structered to have separate folders within `src` to more neatly layout the files
  * `components` houses component folders for all `.jsx` files along with their corresponding `.styles.ts` files
  * `theme` houses a custom config file for the custom media query breakpoints along with all possible custom MUI configs in the future
  * `types` houses all `type` and `interface` declarations used across the app
  * `utils` houses utility functions (such as `isMobile()` to determine viewport size for conditional rendering) and `apiData.ts` for the mock data
  * `assets` contains all the `.png` files used within the app
