import React from 'react';
import { useParams } from 'react-router-dom';

const MatchDetails = () => {
  const { id } = useParams(); // Obtén el ID del partido de los parámetros de la ruta

  // Usar el ID para buscar la información del partido y mostrarla aquí

  return <div>Detalles del partido con ID: {id}</div>;
};

export default MatchDetails;