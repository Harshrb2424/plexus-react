import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMembersData } from "./getData"; // Assuming this returns the members' data

function MemberPage() {
  const { username } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const membersData = await getMembersData();
        const foundMember = membersData.find((m) => m.username === username);
        setMember(foundMember || null);
      } catch (error) {
        console.error("Error fetching members data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (!member) return <div>Member not found</div>;

  return (
    <div className="member-container">
      <div className="member-left">
        <img src={"https://raw.githubusercontent.com/Harshrb2424/plexus-edit/refs/heads/main/public"+member.portrait} alt={`${member.displayName}'s portrait`} />
        <h1>{member.fullName}</h1>
        <ul className="member-socials">
          {member.insta && (
            <li><a href={member.insta} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          )}
          {member.github && (
            <li><a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          )}
          {member.linkedin && (
            <li><a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          )}
          {member.twitter && (
            <li><a href={member.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
          )}
          {member.youtube && (
            <li><a href={member.youtube} target="_blank" rel="noopener noreferrer">YouTube</a></li>
          )}
        </ul>
      </div>

      <div className="member-right">
        <p><strong>Username:</strong> {member.username}</p>
        <p><strong>Roll No:</strong> {member.rollno}</p>
        <p><strong>Section:</strong> {member.section}</p>
        <p><strong>Year:</strong> {member.year}</p>
        <p><strong>Role:</strong> {member.role}</p>
        <p><strong>Introduction:</strong> {member.introduction || "N/A"}</p>
        <p><strong>Experience:</strong> {member.experience || "N/A"}</p>
        <p><strong>Email:</strong> {member.email}</p>
      </div>
    </div>
  );
}

export default MemberPage;
