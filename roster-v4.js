'use strict';
/* Corrected teacher roster. Keep student IDs stable and clear outdated transferred-student seats once. */
(() => {
  const updated = {
    '9A':['Isabella','Martin','Maria Adelaida','Lucas','Matias','Alejandro','Samuel','David','Emilia','Maria Camila','Juana','Juliana','Pablo','Lorenzo','Juan Sebastian','Maria Jose','Mariana','Juan Jose','Sofia','Maria Del Rosario'],
    '9B':['Antonia C','Elena','Samuel','Maria Antonia','Antonia G','Santiago','Julieta','Gabriela','Jose Jacobo','Antonia A','Mariana','Matías','Valentina','Juana','Salomon','Jacobo O','Sofia','Jacobo P','Tomas'],
    '9C':['Mariana B','Sara Sofia','Juan Sebastián','Alejandro','Isabella F','Jeronimo','Matias','Lucia','Belen','Isabella L 9C Dianita','Sara','Ana Lucia','Maria Jose','Juan Diego','Mariana T','Pablo','Emmanuel','David','Catalina']
  };
  for (const [g,names] of Object.entries(updated)) {
    if (GROUPS[g].length !== names.length) throw Error('Wrong roster size: '+g);
    GROUPS[g].forEach((p,i)=>{p.name=names[i];p.label=names[i];});
  }
  const changed={'9A':new Set(['9A-3']),'9B':new Set(['9B-4']),'9C':new Set(['9C-8','9C-12'])};
  function removeOldAssignments(data){let n=0;for(const [g,room] of Object.entries(data))for(const spot of room.spots)if(changed[g].has(spot.id)){spot.id=null;n++;}return n;}
  function markCurrent(data){Object.values(data).forEach(room=>room.rosterRevision=4);return data;}
  const beforeValidate=validateV2;
  validateV2=function(input){const data=beforeValidate(input);if(!Object.keys(updated).every(g=>input.rooms?.[g]?.rosterRevision===4))removeOldAssignments(data);return markCurrent(data);};
  const beforeLegacy=fromLegacy;
  fromLegacy=function(input){const data=beforeLegacy(input);removeOldAssignments(data);return markCurrent(data);};
  let first=true;
  try{first=localStorage.getItem('glm-grade9-roster-v4-applied')!=='done';}catch(e){console.warn(e);}
  if(first){const removed=removeOldAssignments(rooms);markCurrent(rooms);save();try{localStorage.setItem('glm-grade9-roster-v4-applied','done');}catch(e){console.warn(e);}if(removed)toast(`${removed} transferred student(s) need new seats in their new groups.`);}
  else markCurrent(rooms);
  render();
})();