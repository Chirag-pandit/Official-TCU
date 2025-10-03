import AboutUs from './sections/AboutUs';
import Sponsors from './sections/Sponsors';
import CommunityPartners from './sections/CommunityPartners';
import CoreTeam from './sections/CoreTeam';
import Organizers from './sections/Organizers';
import Schedule from './sections/Schedule';
import PrizePool from './sections/PrizePool';

export default function Sections() {
  return (
    <div className="py-20">
      <AboutUs />
      <Schedule />
      <PrizePool />
      <Sponsors />
      <CommunityPartners />
      <CoreTeam />
      <Organizers />
    </div>
  );
}