# Grade 9 · Hexagonal Seating Studio

Teacher-only, offline-capable seating planner for 9A, 9B and 9C. The hexagonal room follows the supplied drawing: board along the bottom/front wall, 9A door on the lower right, and 9B/9C door on the upper right. Each of the six walls is approximately 6 m; desk sizes and clearances are **schematic, not surveyed measurements**.

## Start

Download this **private** GitHub repository as a ZIP and extract it. Open `index.html` in a browser with `app.js`, `style.css`, `floor-points.js`, and `floor-points.css` next to it. No installation, server, or internet connection is needed.

## Roster

The teacher-supplied roster includes 20 names for 9A, 19 for 9B, and 19 for 9C. The updated names appear **exactly as provided**, including `Antonia C`, `Antonia G`, `Antonia A`, `Jacobo O`, `Jacobo P`, `Mariana B`, `Mariana T`, `Isabella F`, and `Isabella L`. Earlier browser seating assignments remain attached to the same internal student IDs rather than being reset when a label is corrected.

## Desk spots and physical floor anchors

Choose a group, then set **Rows**, **Columns**, and **Desk spots** and click **Apply grid**. You can move desks individually in **Move desks** mode and assign students by dragging names or by selecting a name followed by a desk. Swapping occupied desks works the same way. A group keeps its own desk geometry and seating assignments.

The six default **physical floor reference points** (A–F) are located at back left, back right, front left, front right, back center, and front center. The references are floor **marks, not desks**. Set any count between 4 and 8, or use **Move floor points** to drag the lettered anchors to a workable position; arrow keys offer finer adjustment. The floor markers are **shared by all three groups** so that you need only one set of physical marks in the actual classroom. Use school-approved removable tape or stickers with the same letters. Keep markers visible between desks and outside walking routes, door approaches, and accessible pathways. If the actual geometry differs, move the anchors before marking the physical floor. A printable map includes the letters and a legend.

The map does not supply exact measured coordinates. Check desk widths, physical distances, access and emergency clearances on site before positioning furniture or applying floor markers. Floor reference descriptions (e.g., “back left”) describe the starting positions; a moved marker keeps its letter even if moved to another zone.

## Saving, printing, and privacy

The browser saves each group's layout and the shared reference points automatically **on that device only**. **Export backup** writes a version-3 JSON with desk layouts, student assignments and floor reference coordinates. **Import backup** accepts versions 1, 2 and 3; importing an older backup restores its desks and uses the default six floor points. **Print map** prints the currently selected group, including floor reference marks.

Keep this repository private: it contains a student roster. Backups also contain class assignments and should be stored in school-approved, access-controlled storage. Do not publicly host this version or distribute its backup beyond authorized school staff. The tool has no backend and does not transmit seating plans to an external server.