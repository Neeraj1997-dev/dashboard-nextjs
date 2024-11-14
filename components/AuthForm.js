// components/AuthForm.js
import React from 'react';

export const AuthForm = ({ title, onSubmit, formType }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h2 className="text-xl">{title}</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
        {formType === 'login' ? 'Login' : 'Register'}
      </button>
    </form>
  );
};
