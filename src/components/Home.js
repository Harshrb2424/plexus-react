import React, { useEffect, useState } from "react";
  import { getHomeData, getManagementData, getMembersData } from "./getData";
import Card, { CardAssets } from "./Card";


function Home() {
  const [home, setHome] = useState(null);
  const [management, setManagement] = useState(null);
  const [members, setMembers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const homeData = await getHomeData();
        const managementData = await getManagementData();
        const membersData = await getMembersData();

        setHome(homeData);
        setManagement(managementData);
        setMembers(membersData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const managementMembers = management.filter(item => 
    ["Founder Chairman", "Secretary", "President"].includes(item.role)
);
  const hod = management.filter(item => item.role === "HOD CSE(AI & ML)");

  // Define the valid roles you want to filter
  const validRoles = ["President", "Vice-President", "Secretary", "Members of Association"];

  // Filter members based on valid roles
  const filteredMembers = members?.filter(member => validRoles.includes(member.role)) || [];

  return (
    <div>
      <div id="home">
        <div>
          <h5>{home?.home.subtitle}</h5>
          <h1>{home?.home.title}</h1>
          <h4>{home?.home.desc}</h4>
          <div>{/* SVGs */}</div>
        </div>
        <div>
          <img
            className="plexusGlass"
            src="https://raw.githubusercontent.com/Harshrb2424/plexus-edit/refs/heads/main/assets/Plexus%20Glass.png"
            alt="Plexus Logo"
            style={{mixBlendMode: 'lighten'}}
          />
        </div>
      </div>

      <div id="about-us">
        <div>
          <img
            className="mrce"
            src="https://raw.githubusercontent.com/Harshrb2424/plexus-edit/refs/heads/main/assets/MRCE.png"
            alt="Plexus Logo"
          />
        </div>
        <div>
          <h1>About Us</h1>
          <h4>{home?.['about-us']?.desc || "Description"}</h4>
        </div>
      </div>

      <div id="management">
        <h1>Our Management</h1>
        {managementMembers && managementMembers.map((person, index) => (
          <CardAssets key={index} data={person} />
        ))}
      </div>
      {/* HOD Section */}
      <div id="management">
        <h1>Head of Department</h1>
        {hod && hod.map((person, index) => (
          <CardAssets key={index} data={person} />
        ))}
      </div>

      <div id="association">
        <h1>Club Association</h1>
        {filteredMembers.map((member, index) => (
          <Card key={index} data={member} />
        ))}
      </div>
    </div>
  );
}

export default Home;
