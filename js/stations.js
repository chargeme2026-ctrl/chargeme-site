/* Starter dataset — compiled from public charging-network listings
   (Tata Power, Torrent Power, Statiq, ChargeZone, Adani, Shell Recharge,
   GLIDA) as of mid-2026. Coordinates are area-level approximations,
   not exact pins. VERIFY before relying on this for a real trip, and
   replace/expand with your own confirmed data — see note in locator.html. */

const STATIONS = [
  { name:"Tata Power – GMDC Office", area:"Vastrapur", network:"Tata Power", type:"AC/DC", lat:23.0395, lng:72.5297, hours:"24 hours" },
  { name:"Torrent Power – Prahladnagar", area:"Prahladnagar", network:"Torrent Power", type:"AC", lat:23.0169, lng:72.5081, hours:"24 hours" },
  { name:"Torrent Power – Naranpura", area:"Naranpura", network:"Torrent Power", type:"AC", lat:23.0498, lng:72.5514, hours:"24 hours" },
  { name:"Tata Power – Fairfield by Marriott", area:"Usmanpura", network:"Tata Power", type:"AC/DC", lat:23.0479, lng:72.5661, hours:"24 hours" },
  { name:"Tata Power – Reliance Mall, Shahibaug", area:"Shahibaug", network:"Tata Power", type:"AC", lat:23.0550, lng:72.5950, hours:"10am–10pm" },
  { name:"Tata Power – Westside, Ellisbridge", area:"Ellisbridge", network:"Tata Power", type:"AC", lat:23.0225, lng:72.5580, hours:"24 hours" },
  { name:"GLIDA – MG Motors Ambawadi", area:"Ambawadi", network:"GLIDA", type:"AC", lat:23.0265, lng:72.5490, hours:"9am–9pm" },
  { name:"ChargeZone – Courtyard Marriott", area:"Judges Bunglow Rd", network:"ChargeZone", type:"DC Fast", lat:23.0350, lng:72.5030, hours:"24 hours" },
  { name:"Tata Power – TATA Motors Workshop, Sola", area:"Sola", network:"Tata Power", type:"AC", lat:23.0819, lng:72.5108, hours:"24 hours" },
  { name:"Shell Recharge – Chandkheda", area:"Chandkheda", network:"Shell Recharge", type:"DC Fast", lat:23.1057, lng:72.5820, hours:"24 hours" },
  { name:"Shell Recharge – Nikol", area:"Nikol", network:"Shell Recharge", type:"AC", lat:23.0470, lng:72.6480, hours:"24 hours" },
  { name:"Adani – Ahmedabad Airport", area:"Airport Rd", network:"Adani", type:"DC Fast", lat:23.0772, lng:72.6347, hours:"24 hours" },
  { name:"Statiq – Bopal / Iscon-Bopal Rd", area:"Bopal", network:"Statiq", type:"AC", lat:23.0338, lng:72.4657, hours:"24 hours" },
  { name:"MobiLane – GIFT City area", area:"Bhat / GIFT City", network:"MobiLane", type:"DC Fast", lat:23.1645, lng:72.6870, hours:"24 hours" },
  { name:"EESL – Near Kankaria Lake", area:"Maninagar / Kankaria", network:"EESL", type:"AC", lat:22.9930, lng:72.6060, hours:"6am–10pm" }
];
