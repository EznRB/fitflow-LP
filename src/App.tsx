/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  // A gestão com autenticação e persistência pertence ao aplicativo principal.
  const path = window.location.pathname.replace(/\/$/, '');
  if (path === '/contato') return <ContactPage />;
  if (path === '/sobre') return <AboutPage />;
  return <LandingPage />;
}
