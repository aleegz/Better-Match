import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/MatchDetails.module.scss';

const MatchDetails = ({ selectedPartido }) => {
  const { id } = useParams();

  return (
    <>
      <div className={styles.container}>
        Detalles del partido con ID: {id}
      </div>
    </>
  );
};

export default MatchDetails;