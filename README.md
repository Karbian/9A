# Grade 9 — Hexagonal Seating Studio · Layout editor

A teacher-only, offline-capable classroom seating planner for 9A, 9B and 9C. The classroom shape follows the supplied reference sketch: **board on the lower wall, 9A door toward the lower right, and 9B/9C door toward the upper right**. Each wall was described as approximately 6 m long. The drawing is a schematic and **does not certify furniture dimensions, accessible pathways or fire clearance**.

## Set up a classroom

1. Download this private GitHub repository as a ZIP and extract it, keeping `index.html`, `app.js` and `style.css` together. Double-click `index.html` in a modern browser. No hosting, backend, or installation is needed.
2. Choose **9A**, **9B**, or **9C**. Each group has independent desk positions and assignments. Initial plans have **20 spots for 9A** and **19 for 9B/9C**. The supplied roster has 20, 19 and 19 names respectively.
3. Under **Set up your desk layout**, enter **Rows**, **Columns** and **Desk spots**, then click **Apply grid**. Each value is independent: for example, 4 rows × 5 columns with 19 spots leaves one spot unused. Row 1 is closest to the board. Limits: 1–8 rows, 1–8 columns, 1–40 spots, and spots cannot exceed rows × columns.
4. Turn on **Move desks** and drag any spot to customize the arrangement with mouse, touch or stylus. Arrow keys move a focused spot precisely; Shift+arrow moves farther. Turn this mode off to put students into spots. **Align to grid** restores the chosen grid without changing surviving spot-number assignments.
5. Drag student names into desk spots, or select a name and then tap a spot. Moving a name onto an occupied spot swaps the students. Drag an assigned name back to the roster or press Delete/Backspace on its desk to unassign it.
6. Export a JSON backup to retain all three groups' geometry and names; use **Import backup** on another trusted device. **Print map** prints the selected group. All editing autosaves in this browser's local storage; it does **not** synchronize across devices.

### Changing desk counts

Applying a new grid retains student assignments by **desk spot number**, not by physical location. If you reduce the number of spots and any removed spots are occupied, the app asks for confirmation; affected students return to the roster. Increasing the number of spots does not duplicate names. The tool prevents manual placement of overlapping spots and constrains spot centers away from walls and the indicated doors; **always check actual walking space**.

### Older plans

The application migrates saved version 1 browser plans to version 2 and can import older version 1 backups. Version 1 placed the room's front at the top, while this edition follows the supplied reference drawing with the **board at the bottom**. Verify earlier arrangements after migration.

### Privacy

**Keep the GitHub repository private.** Student names are embedded in `app.js`, and anyone able to access the repository can read them. Do not turn on public GitHub Pages for a roster-containing build. Backups contain student ID assignments and the positions; store them in school-approved, access-controlled storage. No external services receive seating plans from this app.

Repeated first names are distinguished by numerical suffixes based only on supplied list order (e.g. Antonia · 1, Antonia · 2); confirm each person's identity with the teacher rather than assuming a surname.