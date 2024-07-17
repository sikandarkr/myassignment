import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card'; // Adjust the path as necessary
import { onRemoveData } from '../../../redux/actions/universities';

// Mock useNavigate and useDispatch
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Card Component', () => {
  const mockNavigate = jest.fn();
  const mockDispatch = jest.fn();
  const mockState = { list: [] }; // Mock the state if necessary

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockImplementation((callback) => callback(mockState)); // Mock useSelector
    jest.clearAllMocks();
  });

  const props = {
    name: 'Test University',
    country: 'Test Country',
    item: { name: 'Test University' },
    key: '1'
  };

  test('renders Card component with correct props', () => {
    render(<Card {...props} />);
    expect(screen.getByText('Test University')).toBeInTheDocument();
    expect(screen.getByText('Country: Test Country')).toBeInTheDocument();
    expect(screen.getByText('View Details')).toBeInTheDocument();
  });

  test('navigates to details page on "View Details" click', () => {
    render(<Card {...props} />);
    fireEvent.click(screen.getByText('View Details'));
    expect(mockNavigate).toHaveBeenCalledWith('/details', { state: props.item, replace: true });
  });

  test('dispatches onRemoveData action on close button click', () => {
    jest.useFakeTimers();
    render(<Card {...props} />);
    fireEvent.click(screen.getByText('X'));
    jest.runAllTimers();
    expect(mockDispatch).toHaveBeenCalledWith(onRemoveData('Test University'));
    jest.useRealTimers();
  });
});
