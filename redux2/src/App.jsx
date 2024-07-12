import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchMatchesRequest, fetchMatchesSuccess, fetchMatchesFailure } from './redux/actions';

const FootballMatches = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, footballMatches } = useSelector((state) => state);

  useEffect(() => {
    const fetchMatches = async () => {
      dispatch(fetchMatchesRequest());
      try {
        const response = await axios.get('https://jsonmock.hackerrank.com/api/football_matches?page=2');
        dispatch(fetchMatchesSuccess(response.data.data));
      } catch (error) {
        dispatch(fetchMatchesFailure(error.message));
      }
    };

    fetchMatches();
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching matches</div>;
  }

  return (
    <div>
      <h1>Football Matches</h1>
      <ul>
        {footballMatches.map((match) => (
          <li key={match.id}>{match.team1} vs {match.team2}</li>
        ))}
      </ul>
    </div>
  );
};

export default FootballMatches;
