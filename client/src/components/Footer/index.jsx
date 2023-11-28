import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const GitHubProfiles = () => {
    const usernames = ["Dunadunn", "gmtz0794", "chinosj89", "danielfama14"];
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
      const fetchGitHubProfile = async (username) => {
        const url = `https://api.github.com/users/${username}`;
        try {
          const response = await fetch(url);
          if (response.ok) {
            const data = await response.json();
            return data;
          } else {
            throw new Error('Failed to fetch GitHub profile');
          }
        } catch (error) {
          console.error('Error fetching GitHub profile:', error);
          return null;
        }
      };

      const fetchData = async () => {
        const profilesData = await Promise.all(usernames.map(username => fetchGitHubProfile(username)));
        setProfiles(profilesData.filter(profile => profile !== null));
      };

      fetchData();
    }, []);

    return (
      <div className="d-flex flex-row justify-content-center">
        {profiles.map(profile => (
          <div key={profile.login} className="mr-3 mb-2">*
            <a href={profile.html_url} target="_blank" rel="noopener noreferrer" className="mr-3 mb-2">
              {profile.login}
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <footer className="w-100 m-auto bg-dark p-3 fixed-bottom text-sm">
      <div className="container text-center text-white mb-1">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4 className="text-sm">
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by the fitness-for-all team:

          <GitHubProfiles />
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
