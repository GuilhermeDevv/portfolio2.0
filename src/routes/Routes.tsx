import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Layout } from '../Layout/Layout';
import { About } from '../pages/About/About';
import { Projects } from '../pages/Projects/Projects';

export function RoutePage() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Layout>
  );
}
