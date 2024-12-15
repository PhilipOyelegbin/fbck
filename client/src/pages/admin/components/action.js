export const getUser = async () => {
  try {
    const user = await fetch(`${import.meta.env.VITE_API_URI}/api/v1/users`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return user;
  } catch (error) {
    return error;
  }
};

export const getVote = async () => {
  try {
    const votes = await fetch(`${import.meta.env.VITE_API_URI}/api/v1/vote`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return votes;
  } catch (error) {
    return error;
  }
};

export const getCandidate = async () => {
  try {
    const candidates = await fetch(
      `${import.meta.env.VITE_API_URI}/api/v1/candidate`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return candidates;
  } catch (error) {
    return error;
  }
};
