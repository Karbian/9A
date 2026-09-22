# Grade 9 · Hexagonal Seating Studio

Interactive classroom seating planner for **9A, 9B and 9C**. The classroom shape is a schematic hexagon, not a measured architectural plan.

## Usage

Open `index.html` in your browser after downloading the repository ZIP. Keep `index.html`, `style.css` and `app.js` in the same directory. The app needs no external services or build process.

Select a group, then drag a student name onto a desk, or click a name and then the desk. To move an assigned student, drag the name or click its occupied desk, then click the destination. Moving onto an occupied desk swaps students. Drag a seated student back into the roster, or focus an occupied desk and press Delete to unassign them. Touch and stylus dragging are supported. Use **Show seated students too** to display all students. Use **Print map** to print the current group and **Export backup** to download your saved seating for all groups. **Import backup** restores all three groups.

9A has **20** entries; 9B and 9C have **19** each, based on the teacher-supplied roster. Identical first names are labeled with numbers according to the order supplied; verify which student each label refers to before using the plans.

## Privacy and persistence

This repository is **private** and contains teacher-supplied student first names. Keep it private. The seating plan is saved to browser `localStorage` on that device: it is not synchronized or uploaded to GitHub. A browser reset or private browsing session may lose it, so export backups to approved school storage. **Do not publish this repository as a public website or enable a public GitHub Pages site containing real student names**. For a public template, replace the embedded roster with fictional placeholders and import private rosters via a school-approved authenticated system.

The backup file contains all groups' seating assignments keyed by roster ID. Import checks each group, exactly 20 desks, and duplicate/mismatched students before replacing the current arrangement.