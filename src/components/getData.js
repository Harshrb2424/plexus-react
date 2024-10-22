export const getHomeData = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Harshrb2424/plexus-edit/refs/heads/main/data/home.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  };
  

  export const getManagementData = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Harshrb2424/plexus-edit/refs/heads/main/data/management.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  };

  export const getMembersData = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Harshrb2424/plexus-edit/refs/heads/main/data/members.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (err) {
      console.error(err.message);
      return null;
    }
  };