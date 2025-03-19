import React from 'react';
import { NavLink } from 'react-router-dom';
import './BottomMenu.css';

const BottomMenu = () => {
  return (
    <nav className="bottom-menu">
      <NavLink to="/search" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
        <span className="icon">🔍</span>
        <span className="label">Search</span>
      </NavLink>
      <NavLink to="/flashcards" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
        <span className="icon">🃏</span>
        <span className="label">Flashcards</span>
      </NavLink>
      <NavLink to="/add" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
        <span className="icon">➕</span>
        <span className="label">Add</span>
      </NavLink>
      <NavLink to="/prepare" className={({ isActive }) => isActive ? 'menu-item active' : 'menu-item'}>
        <span className="icon">📝</span>
        <span className="label">Prepare</span>
      </NavLink>
    </nav>
  );
};

export default BottomMenu;