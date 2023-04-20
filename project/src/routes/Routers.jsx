import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Aboutme from '../pages/Aboutme';
import Apicall from '../pages/Apicall';
import Project from '../pages/Project';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/aboutme" />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/apicall" element={<Apicall />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
};

export default Routers;
